# Anna Gadomska — Portfolio 2026

Local-first, dependency-free prototype. HTML, CSS, JavaScript and an original layered SVG studio illustration. No Sites runtime, remote fonts or external asset dependencies.

## Run

Requires Node.js 18 or later.

```sh
npm run dev
```

Open http://localhost:4173. `npm run check` checks JavaScript syntax. The site itself can also be served by any static web server.

## Files

- `index.html`: page structure and editable SVG illustration.
- `style.css`: design tokens, responsive layouts, hover/focus states and reduced-motion support.
- `app.js`: shared project data, generated bookshelf and disclosures, capped-duration navigation and opt-in synthesized purring.
- `server.js`: loopback-only development server.

## Editorial status

First working design prototype. Project summaries are adapted from https://ag2025portfolio.lovable.app/ (reviewed 26 October 2026). Project dates and metrics are deliberately omitted pending confirmation. The shelf order is provisional. Values/about copy are draft proposals. Noticeboard portraits are drawn placeholders, not real family photos. Project diagrams are conceptual illustrations, not product screenshots. Full case studies and authentic images remain to be added.

## Interaction system

All books use the same hover/focus lift, reveal a title and open the matching disclosure before scrolling. Anna links to About; the noticeboard links to Values. The cat closes its eyes when petted; sound is explicitly opt-in. Links and disclosures work by keyboard and touch. Motion respects `prefers-reduced-motion`. Navigation animates for 380ms, independent of distance, and is interrupted by touch/wheel. The page never captures scrolling.

## Backup

Source is kept in this Git repository. A local commit is only a local snapshot; pushing to GitHub provides the remote backup. No automatic publishing or external writes are performed by this project.

## Visual revision 2

The room now uses `assets/studio-v2.png`, an imagegen edit based on the user's recovered v17 illustration. It is rendered whole, with SVG interaction regions; no rectangular image fragments are shifted on hover. The recovered ZIP remains untouched. The earlier vector prototype is in ignored `work/versions/`.

Anna's hover currently reveals a label; a true animated change in gaze still requires separately illustrated face states. Books highlight rather than physically lifting. Cat eye closure uses an SVG overlay and opt-in synthesized purring. On narrow screens the scene pans horizontally to retain usable targets; the page's project list remains directly available below. Illustrated family pictures are fictional placeholders.

## Visual revision 3

Blue hair streak in `assets/studio-v3-blue-streak.png`. Labels use locally bundled Patrick Hand (OFL license in assets/fonts), rounded pills and no icons. Hover fades the base scene to 90% opacity while an aligned contour-clipped copy keeps the object at 100%. No image fragments move. Keyboard focus retains a solid focus contour.
