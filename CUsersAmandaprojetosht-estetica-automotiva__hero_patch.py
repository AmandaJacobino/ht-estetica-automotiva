import io, re
path = r"C:\Users\Amanda\projetos\ht-estetica-automotiva\src\styles\globals.css"
with io.open(path, 'r', encoding='utf-8') as f:
    s = f.read()

old = """/* Hero */
.hero {
  padding: 56px 0 40px;
  position: relative
}"""
new = """/* Hero */
.hero {
  padding: 96px 0 80px;
  position: relative;
  overflow: hidden;
  min-height: 100svh;
  display: flex;
  align-items: center;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 1;
  pointer-events: none;
}

.hero > .container {
  position: relative;
  z-index: 2;
  width: 100%;
}"""
assert old in s, "hero block not found"
s = s.replace(old, new)

old2 = """.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  margin-top: 28px
}"""
new2 = """.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 24px;
  margin-top: 0
}"""
assert old2 in s
s = s.replace(old2, new2)

old3 = """/* Video container â€” sits right above the title */
.hero-video {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 18px;
  overflow: hidden;
  background: linear-gradient(160deg, var(--bg-2), var(--bg-1));
  border: 1px solid var(--line-strong);
  margin-bottom: 8px
}

.hero-video video,
.hero-video img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}"""
new3 = """/* Full-bleed background video filling the hero section */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--bg-1);
  z-index: 0;
  pointer-events: none;
}

.hero-video video,
.hero-video img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}"""
assert old3 in s
s = s.replace(old3, new3)

with io.open(path, 'w', encoding='utf-8') as f:
    f.write(s)
print("ok")
