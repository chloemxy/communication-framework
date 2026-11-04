import sys, json, numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert('RGB')
S = 2
im = im.resize((im.width*S, im.height*S), Image.LANCZOS)
a = np.asarray(im).astype(np.float32)
g = a.mean(2)
H, W = g.shape
# napkin region (draft framing), with the pen excluded by its blue body
yy, xx = np.mgrid[0:H, 0:W]
nap = (xx > 880) & (xx < 1826) & (yy > 60) & (yy < 990) & ~((xx > 1745) & (yy > 650))   # sketch area only, clear of the napkin edges
bg = ndi.median_filter(g, size=31)
dark = (bg - g) > 28
blue = (a[...,2] - a[...,0]) > 25
pen = ndi.binary_dilation(blue & (g < 90), iterations=8)
pen = ndi.binary_closing(pen, iterations=6)
ink = dark & nap & ~pen
ink = ndi.binary_opening(ink, iterations=1) | (ink & ndi.binary_dilation(ndi.binary_opening(ink, iterations=1), iterations=2))
# blank plate: erase every trace of ink (a looser threshold than the ink layer), then fill each hole
# from the paper around it with a normalised blur, so no pale outline of a box or line stays behind
erase = ndi.binary_dilation((((bg - g) > 8) & ndi.binary_dilation(ink, iterations=10)) | ink, iterations=5)   # faint ink only near real ink, so the napkin texture survives
keep = (~erase).astype(np.float32)
blank = a.copy()
for c in range(3):
    ch = a[..., c]
    num = ndi.gaussian_filter(ch * keep, 14); den = ndi.gaussian_filter(keep, 14)
    fill = num / np.maximum(den, 1e-3)
    blank[..., c] = np.where(erase, fill, ch)
grow = ndi.binary_dilation(ink, iterations=3)
Image.fromarray(blank.clip(0,255).astype(np.uint8)).save(out + '/napkin-blank.webp', quality=90)
# ink layer: alpha from darkness, inside the grown mask
alpha = np.clip((bg - g) / 90.0, 0, 1) * grow
rgba = np.zeros((H, W, 4), np.uint8)
rgba[..., 0], rgba[..., 1], rgba[..., 2] = 28, 32, 52
rgba[..., 3] = (alpha * 255).astype(np.uint8)
Image.fromarray(rgba).save(out + '/napkin-ink.png', optimize=True)
# strokes: group ink into marks (words merge), ordered big frames first, then top-to-bottom, left-to-right
lab, n = ndi.label(ndi.binary_dilation(ink, iterations=4))
objs = ndi.find_objects(lab)
marks = []
for i, sl in enumerate(objs):
    y0, y1, x0, x1 = sl[0].start, sl[0].stop, sl[1].start, sl[1].stop
    area = int((lab[sl] == i + 1).sum())
    if area < 60: continue
    marks.append(dict(lab=i + 1, x=x0, y=y0, w=x1-x0, h=y1-y0, big=(x1-x0)*(y1-y0) > 0.03*W*H))
marks.sort(key=lambda m: (not m['big'], m['y']//60, m['x']))
# which mark owns each ink pixel, as a greyscale map (value = position in drawing order), so the page
# reveals only a mark's own ink and never a neighbour's that falls inside its box
owner = np.zeros((H, W), np.uint8)
grownlab = ndi.grey_dilation(lab, size=5)
for k, m in enumerate(marks):
    owner[(grownlab == m['lab']) & grow] = k + 1
    m['id'] = k + 1; del m['lab']
Image.fromarray(owner).save(out + '/napkin-marks.png', optimize=True)
json.dump(dict(W=W, H=H, marks=marks), open(out + '/napkin-strokes.json', 'w'))
print(W, H, len(marks), 'marks;', sum(m['big'] for m in marks), 'big;', int(ink.sum()), 'ink px;', int((owner == 0)[grow].sum()), 'ink px unowned')
