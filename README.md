# Anna Gadomska — Portfolio 2026

Local-first, dependency-free prototype. HTML, CSS, JavaScript and an original layered SVG studio illustration. No Sites runtime, remote fonts or external asset dependencies.

## Run

Requires Node.js 18 or later.

```sh
npm run dev
```

Open http://localhost:4173. Use `PORT=4174 npm run dev` if that port is taken. `npm run check` checks JavaScript syntax. The site itself can also be served by any static web server.

## Files

- `index.html`: page structure and editable SVG illustration.
- `style.css`: design tokens, responsive layouts, hover/focus states and reduced-motion support.
- `app.js`: shared project data, generated bookshelf and disclosures, capped-duration navigation and opt-in synthesized purring.
- `server.js`: loopback-only development server.

## Editorial status

First working design prototype. Project summaries are adapted from https://ag2025portfolio.lovable.app/ (reviewed 26 October 2026). Project dates and metrics are deliberately omitted pending confirmation. The shelf order is provisional. Values/about copy are draft proposals. The noticeboard shows a family photo (`assets/board-family.png`) and a larger polaroid with the “mom” illustration (`assets/board-mom.png`) and a Helsinki City 5 running medal (`assets/board-medal.png`, cut out of a photo and redrawn in ink and silver, with a drawn ribbon and pin). Project diagrams are conceptual illustrations, not product screenshots. Full case studies and authentic images remain to be added.

## Interaction system

All books use the same hover/focus lift, reveal a title and open the matching disclosure before scrolling. Anna links to About. The noticeboard is not a link: only clickable objects get a label. The cat closes its eyes when petted and shows one small green heart that drifts up slightly and fades; sound is explicitly opt-in. Links and disclosures work by keyboard and touch. Motion respects `prefers-reduced-motion`. Navigation animates for 380ms, independent of distance, and is interrupted by touch/wheel. The page never captures scrolling.

## Backup

Source is kept in this Git repository. A local commit is only a local snapshot; pushing to GitHub provides the remote backup. No automatic publishing or external writes are performed by this project.

## Visual revision 2

The room now uses `assets/studio-v2.png`, an imagegen edit based on the user's recovered v17 illustration. It is rendered whole, with SVG interaction regions; no rectangular image fragments are shifted on hover. The recovered ZIP remains untouched. The earlier vector prototype is in ignored `work/versions/`.

Hovering Anna fades in `assets/anna-face-front.png`, a front-facing head (with the old pencil patched out) aligned over the original, so she turns to look at the visitor. Books highlight rather than physically lifting. Cat eye closure uses an SVG overlay and opt-in synthesized purring. On narrow screens the scene pans horizontally to retain usable targets; the page's project list remains directly available below. The family and “mom” polaroids are layered over the scene in `.board-photos`; pins come from the illustration.

## Visual revision 3

Blue hair streak in `assets/studio-v3-blue-streak.png`. Labels use locally bundled Patrick Hand (OFL license in assets/fonts), rounded pills and no icons. Hover fades the base scene to 90% opacity while an aligned contour-clipped copy keeps the object at 100%. No image fragments move. Keyboard focus retains a solid focus contour.

## Labels

Only clickable objects have a label; the noticeboard has none. Labels hang just off their object, tilted to lean towards it. Static labels set this in their `transform` in `index.html`. Book labels work like library shelf tags: all sit on the top edge of their binder, nudged right, at the same −6° tilt (`bookLabel` in `app.js`). Only one label shows at a time. The cat is the exception: it leads nowhere, so its hint (“Cuddles needed!”) is plain handwritten text with a white halo, not a pill, so it doesn't read as a link. A visible label is interactive: hovering it keeps it open and clicking it does what clicking the object does. Labels stay open for 0.3s after the pointer leaves, so it can cross the gap.

## Header and board quote

The navigation reads My work · About me · Let’s talk, with no arrows or underlines. The hero has no separate “Take a look at my work” link; the chapter rule below the studio already offers “Scroll to the work”.

## Shelf and projects (information architecture)

One binder per project; the rest of the shelf is empty (`assets/studio-v4-shelf.png` paints the extra binders out of the v3 scene). Top shelf: Miro work (Knowledge Integrations, Brand Center, Curated Templates, Others). Second: Figma to Uizard, Dealfront UI, Integrations, TomTom. Third: RevoTV, University of Lodz. Bottom: side projects (Dad Game, Sisu Camp). Binder marks are hand-drawn in black ink (`logos` in `app.js`): Miro, Uizard, Dealfront, TomTom, University of Lodz and RevoTV logos traced from the official files and split into icon and wordmark (`logos.js`) and printed onto the binders with a light photocopy filter (`#xerox`); the other binders have their names in Patrick Hand, the tooltip font (as paths). Every brand icon is the size of the Miro tile (`ICON`), every word has the same x-height (`LETTER`), and each label is centred on the binder's front face (`faces` in `app.js`). Ink colour follows the cover for contrast: cream on blue and green covers (4.7–7.4:1), black on cream covers (13–15:1). The project list below the studio follows the same groups: At Miro, Before Miro, Outside the brief. Projects without written copy say “Case study coming soon.”

Binders show the project name in a tooltip; on hover or keyboard focus the binder (its spotlight copy and logo) grows slightly from its base (4.5% wider, under 2% taller, so it barely rises above its neighbours), as if pulled slightly out of the shelf, while a soft shadow fades in where it stood (the shadow stays put).

The bottom shelf's right half holds hand-drawn SVG props (`.shelf-props` in `index.html`): a hand-drawn maneki-neko sticker (`assets/lucky-cat.png`) whose raised paw is a separate layer (`lucky-cat-paw.png`) that waves gently around the elbow, and a small stack of two books lying flat with their spines out: Don Norman's *Emotional Design* and Steve Krug's *Don't Make Me Think*. Props use soft gradients and a paper-grain filter to sit closer to the illustration.
A floorball (salibandy) stick, about half the shelf tall, leans against the right upright (`.floorball`): all black, standing close to the wall, with an open mesh blade on the floor.
A warm neon “Work” sign on the wall above the shelf (`.neon`) links to the work section; its glow strengthens on hover.

The sculpture now stands on the top shelf and the camera (the Picstories link) on the second shelf; the side table is empty, waiting for an 80s phone. The neon sits behind the shelf-top box and plant (`assets/shelf-top-front.png` is drawn above it).
