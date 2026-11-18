"""Web copies of Sonia's UHN materials for slide 2 (they fall onto the empty desk).

Reads presentation/media/bg/UHN materials-*/ (PNGs, and the first page of each PDF) and writes
presentation/media/bg/uhn/: p01.jpg .. p12.jpg at 520 px on the long side, hero.jpg (the Stroke
teach-back poster, which lifts off the pile) at 900 px, and posters.json with each one's size.
Run: python -I scripts/uhn-posters.py
"""
import glob, json, os
import fitz
from PIL import Image

Image.MAX_IMAGE_PIXELS = None
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'presentation', 'media', 'bg')
SRC = glob.glob(os.path.join(ROOT, 'UHN materials-*'))[0]
OUT = os.path.join(ROOT, 'uhn')
os.makedirs(OUT, exist_ok=True)


def load(p):
    if p.lower().endswith('.pdf'):
        page = fitz.open(p)[0]
        pix = page.get_pixmap(dpi=110)
        return Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    im = Image.open(p)
    if im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA'); bg = Image.new('RGB', im.size, (255, 255, 255)); bg.paste(im, mask=im.split()[3]); return bg
    return im.convert('RGB')


files = sorted(f for f in os.listdir(SRC) if f.lower().endswith(('.png', '.pdf', '.jpg')))
out = []
for i, f in enumerate(files, 1):
    im = load(os.path.join(SRC, f))
    big = im.copy()
    im.thumbnail((520, 520), Image.LANCZOS)
    name = f'p{i:02d}.jpg'
    im.save(os.path.join(OUT, name), quality=82)
    out.append({'file': name, 'w': im.width, 'h': im.height, 'from': f})
    if f.startswith('Stroke'):
        big.thumbnail((900, 900), Image.LANCZOS)
        big.save(os.path.join(OUT, 'hero.jpg'), quality=86)
        hero = {'file': 'hero.jpg', 'w': big.width, 'h': big.height, 'from': f}
json.dump({'posters': out, 'hero': hero}, open(os.path.join(OUT, 'posters.json'), 'w'), indent=1)
print(len(out), 'posters; hero', hero['w'], hero['h'])
