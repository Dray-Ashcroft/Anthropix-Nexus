<h1 align="center">Changelog</h1>

<p align="center"><em>Anthropix Nexus · Evolutionary Reconstruction and Phylogenetic Mapper</em></p>

<p align="center">
  <a href="#rc-iii--anthropix-nexus">RC III</a> ·
  <a href="#rc-ii--light-mode">RC II</a> ·
  <a href="#rc-i--initial-release">RC I</a>
</p>

---

## Release Summary

| Release | Title | Date | Focus |
|:--|:--|:--|:--|
| RC III | Anthropix Nexus | 15 Nov 2026 | Profile images moved to this repository; README and changelog *(current)* |
| RC II | Light Mode | 17 Oct 2026 | Light theme; lock, slider and image-link fixes |
| RC I | Initial Release | 15 Oct 2026 | Hominidae cladogram, profile cards, autosave, new branding and layout |

---

## RC III · Anthropix Nexus

*15 Nov 2026 · Current release*

**Changed**
- All 18 profile image links point to the Anthropix-Nexus repository (previously Homnid-EvoGen)
- `script.js` read-only copy updated to match `index.html`
- README rewritten in the standard format: lineage table, collapsible map key, profile cards, reconstructions and developer tools

**Added**
- Repository banner and screenshots (22 Oct 2026)
- `CHANGELOG.md`

---

## RC II · Light Mode

*17 Oct 2026*

**Added**
- Light theme: sun/moon button in the top bar, clearer on projectors and in bright rooms; dark stays the default and the choice is remembered

**Fixed**
- Lock button showed "unlocked" while the tree was locked, so the first tap did the opposite
- Developer Mode position sliders disappeared after returning from a profile card to the tree
- An image link typed without pressing Set was lost when leaving the card; it is now kept, and Undo restores the old one

---

## RC I · Initial Release

*15 Oct 2026*

**Added**
- Single Hominidae clade on a Miocene → Pliocene → Pleistocene / Holocene timeline (23 Mya to present), replacing the Synapsida and Sauropsida tabs
- Solid or dotted links; dotted marks an uncertain or broad relationship, explained in the legend
- Two image slots per profile card, side by side, each with its own link field
- Tree label field, so the cladogram name can differ from the scientific name
- Autosave every 3 seconds, with a Restore / Discard prompt on the next visit
- Subtle epoch shading behind the timeline
- Warning when exports are blocked in preview mode

**Changed**
- Name and branding: Anthropix Nexus, with a gorilla-profile logo built into the file
- Colour theme: golden ochre replaces indigo
- Typography unified to IBM Plex Sans and IBM Plex Mono, replacing eight fonts
- Laptop and smart-panel layout: tabs and search share one row; the tree grows with the screen (no 1300 px cap)
- Profile pictures sit in square slots and are never cropped; long names wrap instead of being cut off
- Age entry accepts decimals, rejects values outside 0–23 Mya, and asks before saving a child older than its parent
- New nodes are placed in a free spot; the root node's age and name are editable
- Hominid examples in empty fields and an ape placeholder image

**Fixed**
- Cancel in Spawn Mode deleted a node without a second warning
- Developer panel edits were lost from HTML snapshots; snapshots now save exactly what is on screen
- Open editors lost edits after Undo / Redo; rename made one undo step per letter; slider undo now works with touch
- Names with quotes or angle brackets broke the rename box and profile tabs
- Profile card could not scroll on phones; developer panel was pushed off-screen on phones
- Nodes jammed to the right edge when Connect Pins / Lock Scale were off
- Image error on load; snapshots no longer embed the last-opened card
- White outlines around labels in browsers with automatic night mode
- Epoch labels sat on the dotted line; the youngest epoch band now reaches the right edge
- Exports on mobile could cancel immediately after tapping
- Leftover reptile entries removed from the developer panel

**Content**
- Family corrected to Hominidae on all cards
- Spelling: *Homo neanderthalensis*, *Sivapithecus*, Miocene Ape; Subfamily Ponginae tidied
- Miocene Ape classified as Order Primates, Family Proconsulidae

**Repository**
- Read-only `styles.css` and `script.js` copies added so GitHub's language bar shows HTML, CSS and JavaScript; the app still runs from `index.html`

*Tested on phones (360–412 px), tablets (768 px), laptops (1280–1920 px) and smart panels (1080p and 4K), with mouse and touch.*

---

<p align="center">
  <a href="README.md">README</a> · <a href="LICENSE">License (GPL-3.0)</a>
</p>
