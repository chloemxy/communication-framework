"""Assets for the "Why AI?" slide's background: the exploded Lego drawing assembles itself.

Reads presentation/media/bg/Lego start.png (pieces apart) and Lego end.png (figure built), both
1456 x 816, and writes presentation/media/bg/lego/:
  grid.jpg     the end drawing's blueprint grid with the figure taken out (stays still)
  p0..p8.png   each piece from the start drawing: white lines, filled solid blueprint blue
  pieces.json  each piece's box in the start drawing, where it locks into the built figure, and
               its stacking order
Run: python -I scripts/lego-pieces.py
"""
import json, os
import numpy as np
from PIL import Image
from scipy import ndimage as nd

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'presentation', 'media', 'bg')
OUT = os.path.join(ROOT, 'lego')
os.makedirs(OUT, exist_ok=True)
A = np.asarray(Image.open(os.path.join(ROOT, 'Lego start.png')).convert('RGB')).astype(np.float32)
B = np.asarray(Image.open(os.path.join(ROOT, 'Lego end.png')).convert('RGB')).astype(np.float32)
H, W = B.shape[:2]
REGION = (960, 1340)                       # x range that holds the figure in both drawings


def ink(img):
    """Line strength 0..1: the figure's white lines; the grid is dimmer and stays out."""
    return np.clip((img.mean(2) - 135) / 75, 0, 1)


def white(alpha):
    a = (alpha * 255).astype(np.uint8)
    return Image.fromarray(np.dstack([np.full_like(a, 244), np.full_like(a, 248), np.full_like(a, 255), a]), 'RGBA')


# grid: lift the figure out of the end drawing and rebuild the grid behind it from the rows and
# columns outside the figure (each pixel = blue + its row's grid line + its column's grid line)
inkB = ink(B)
mask = np.zeros((H, W), bool)
mask[:, REGION[0]:REGION[1]] = nd.binary_dilation(inkB[:, REGION[0]:REGION[1]] > 0.02, iterations=6)
blue = np.median(B.reshape(-1, 3), 0)
dev = B - blue
outside_x = np.ones(W, bool); outside_x[REGION[0]:REGION[1]] = False
rows = np.median(dev[:, outside_x], axis=1)                      # per-row line, from the left part
fig_rows = mask.any(1)
cols = np.median(dev[~fig_rows], axis=0)                         # per-column line, above/below the figure
synth = np.clip(blue + np.maximum(rows[:, None, :], 0) + np.maximum(cols[None, :, :], 0), 0, 255)
soft = nd.gaussian_filter(mask.astype(np.float32), 2)[..., None]
grid = B * (1 - soft) + synth * soft
Image.fromarray(grid.astype(np.uint8)).save(os.path.join(OUT, 'grid.jpg'), quality=90)

# pieces: each part's box in the start drawing, how far it moves to lock into the built figure (the
# exploded view only spreads the parts apart, so closing the gaps builds the figure from the same
# lines), and its stacking order front to back (higher is in front)
P = [('head',      (1092, 104, 1236, 248), (  0,  56), 3),
     ('torso',     (1068, 250, 1232, 452), (  0,   0), 2),
     ('left arm',  ( 990, 290, 1092, 430), ( 26,   6), 4),
     ('right arm', (1212, 284, 1314, 428), (-26,   6), 4),
     ('left hand', ( 994, 430, 1060, 524), ( 30, -34), 3),   # behind the arm: its peg goes into the cuff
     ('right hand',(1246, 428, 1312, 524), (-30, -34), 3),
     ('hips',      (1080, 452, 1220, 612), (  0, -40), 1),
     ('left leg',  (1002, 536, 1094, 712), ( 70, -56), 0),
     ('right leg', (1212, 536, 1302, 712), (-70, -56), 0)]
inkA = ink(A); inkA[:, :REGION[0]] = 0; inkA[:, REGION[1]:] = 0
# every connected stroke goes to exactly one piece (the smallest box holding its centre), so no line
# is drawn twice and nothing is left behind
lab, n = nd.label(inkA > 0.03, structure=np.ones((3, 3)))
owner = np.full(n + 1, -1)
for k, c in enumerate(nd.center_of_mass(inkA > 0.03, lab, range(1, n + 1)), start=1):
    cy, cx = c
    best, area = -1, 1e12
    for i, (_, a, _, _) in enumerate(P):
        if a[0] <= cx < a[2] and a[1] <= cy < a[3] and (a[2] - a[0]) * (a[3] - a[1]) < area:
            best, area = i, (a[2] - a[0]) * (a[3] - a[1])
    owner[k] = best
own = owner[lab]; own[lab == 0] = -1
paper = np.median(A.reshape(-1, 3), 0)
out = []
for i, (name, a, (dx, dy), z) in enumerate(P):
    m = np.where(own == i, inkA, 0)
    ys, xs = np.nonzero(m > 0)
    x0, y0, x1, y1 = xs.min() - 2, ys.min() - 2, xs.max() + 3, ys.max() + 3
    m = m[y0:y1, x0:x1]
    # solid: the part's outline is filled with the blueprint blue, so it hides whatever is behind it
    solid = nd.binary_fill_holes(nd.binary_closing(m > 0.12, iterations=3))
    solid = nd.gaussian_filter(solid.astype(np.float32), .6)
    alpha = np.maximum(solid, m)
    rgb = paper[None, None, :] * (1 - m[..., None]) + np.array([244, 248, 255])[None, None, :] * m[..., None]
    Image.fromarray(np.dstack([rgb, alpha * 255]).astype(np.uint8), 'RGBA').save(os.path.join(OUT, f'p{i}.png'))
    out.append({'name': name, 'z': z, 'from': [int(x0), int(y0), int(x1), int(y1)],
                'to': [int(x0 + dx), int(y0 + dy), int(x1 + dx), int(y1 + dy)]})
print('strokes with no piece:', int((owner[1:] < 0).sum()))
json.dump({'size': [W, H], 'pieces': out}, open(os.path.join(OUT, 'pieces.json'), 'w'), indent=1)
print('wrote', OUT)
