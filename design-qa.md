# Design QA — previsión diaria móvil

source visual truth path: `/var/folders/ty/8gh55kg96pjfryzzvz56btfr0000gp/T/codex-clipboard-18beb6f0-ba76-49cd-bc20-a9f4a336f468.png`
implementation screenshot path: Codex in-app browser capture of `http://127.0.0.1:4323/localidad/caceres/` (captured in this turn; CUA does not persist a filesystem path)
viewport: implementation 390 × 844 CSS px; source 726 × 1154 px, normalized as a responsive mobile comparison rather than 1:1 pixel scale
state: localidad Cáceres, datos cargados, listado diario contraído; expansión del primer día comprobada y vuelta al estado contraído

## Comparison evidence

Full-view comparison: the source uses a dense vertical seven-day forecast with weekday/date, max/min, one daily weather icon, and a right-side affordance. The implementation now follows that information order and adds two compact data columns: probability of rain and maximum wind.

Focused region comparison: the daily rows were inspected at 390px. Rows remain single-line compositions with stable spacing, the daily icon is shown once, labels do not overlap, and the seven-row list has no horizontal overflow (`scrollWidth === innerWidth === 390`). The metrics strip was also inspected at 390px: its internal scroll width is 1322px inside a 366px viewport, while the page itself remains 390px wide. The locality summary was inspected after compacting: the title and current temperature use lighter weights and the hero remains within the 390px viewport.

## Required fidelity surfaces

- Fonts and typography: existing project system font and weight hierarchy are preserved; weekday, date, temperatures, compact metric labels, and values have distinct scales.
- Spacing and layout rhythm: mobile rows use a fixed five-column grid with 14px/12px padding, 8px gaps, and stable 86px minimum height. Desktop uses the same content order in a wider horizontal grid.
- Colors and visual tokens: existing project tokens are reused for heat, rain, muted text, borders, and active-row background; no new palette drift was introduced.
- Image quality and asset fidelity: weather images remain real weather image assets supplied by the existing Open-Meteo/OpenWeather mapping; no placeholder or CSS-drawn weather icon was added.
- Copy and content: visible copy is Spanish and uses concise labels (`Prob. lluvia`, `Viento`); dynamic values remain sourced from Open-Meteo.
- Icons: the existing weather icon and accessible image alt text are preserved. The row retains the native button semantics without redundant visible `Ver` copy.
- Accessibility: daily forecasts remain semantic buttons with `aria-expanded`/`aria-controls`; weather descriptions remain available through image alt text; focus styling is inherited from the project.

## Findings

No actionable P0/P1/P2 findings remain.

## Comparison history

1. Initial implementation: mobile rows stacked the date, description, icon, and metrics into tall card-like blocks, unlike the reference's dense daily list.
2. Fix applied: `src/pages/localidad/[slug].astro` now renders weekday/date, max/min, one icon, rain probability, wind, and a detail affordance; `src/styles/location.css` adds responsive five-column row grids.
3. Post-fix evidence: mobile capture shows seven compact rows with no horizontal overflow. Desktop capture shows the same component in a horizontal layout. Expand/collapse was tested successfully.

## Implementation checklist

- [x] One daily weather icon per forecast row.
- [x] Maximum and minimum temperatures separated visually.
- [x] Additional daily information columns for rain probability and wind.
- [x] Responsive mobile and desktop layouts.
- [x] Existing daily hourly-detail interaction preserved.
- [x] Metrics are compact and horizontally scrollable on mobile.
- [x] Metrics remain an eight-card grid on desktop.
- [x] Locality summary is more compact on mobile, with lighter title and temperature typography.
- [x] Redundant section labels and the regional animation link are removed from the visible locality view.
- [x] Weekly maximum/minimum changes are shown as signed degree differences against the previous day, with red/blue semantic color cues.
- [x] The redundant visible “Ver” label was removed while day expansion remains functional.
- [x] Hourly forecast uses a compact 2x2 metric grid with rain, wind, gusts, and humidity.
- [x] `npm run build` completed successfully.

## Follow-up polish

No required follow-up polish for this request.

final result: passed
