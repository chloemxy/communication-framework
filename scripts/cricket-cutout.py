"""Cut the cricket out of presentation/media/bg/cricket.png (a cricket on the slide's flat blue) into
presentation/media/bg/cricket-cut.png: transparent background, trimmed to the cricket, soft edge.
Run: python -I scripts/cricket-cutout.py
"""
import os
import numpy as np
from PIL import Image
from scipy import ndimage as nd

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'presentation', 'media', 'bg')
im = np.asarray(Image.open(os.path.join(ROOT, 'cricket.png')).convert('RGB')).astype(np.float32)
H, W = im.shape[:2]
# the background blue, from the border
border = np.concatenate([im[:40].reshape(-1, 3), im[-40:].reshape(-1, 3), im[:, :40].reshape(-1, 3), im[:, -40:].reshape(-1, 3)])
blue = np.median(border, 0)
dist = np.sqrt(((im - blue) ** 2).sum(2))
# alpha ramps from the noise level of the blue up to a clear difference
noise = np.percentile(np.sqrt(((border - blue) ** 2).sum(1)), 99)
alpha = np.clip((dist - noise) / 40, 0, 1)
# keep only the largest connected shape (the cricket), with its thin legs and antennae
lab, n = nd.label(alpha > .25, structure=np.ones((3, 3)))
sizes = nd.sum(np.ones_like(lab), lab, range(1, n + 1))
keep = nd.binary_dilation(lab == (np.argmax(sizes) + 1), iterations=3)
alpha = alpha * keep
ys, xs = np.nonzero(alpha > .02)
y0, y1, x0, x1 = ys.min() - 4, ys.max() + 5, xs.min() - 4, xs.max() + 5
rgba = np.dstack([im, alpha * 255])[y0:y1, x0:x1].astype(np.uint8)
Image.fromarray(rgba, 'RGBA').save(os.path.join(ROOT, 'cricket-cut.png'))
print('cricket', x1 - x0, 'x', y1 - y0, 'at', x0, y0)
