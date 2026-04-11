# campusGenAI Documentation Site

## What this is

Reference documentation for campusGenAI platform users. Built with Astro Starlight. Deploys to GitHub Pages at umasscds.github.io/campusgenai-docs.

## Relationship to other sites

- **Marketing site:** umasscds.github.io/campusgenai-site (repo: UMassCDS/campusgenai-site, local: ~/Projects/campusgenai-update)
- **Platform — community deployment:** community.campusgenai.org
- **Platform — enterprise deployments:** institution-specific (genai.umass.edu, genai.smith.edu, etc.)
- **This site** is for existing users who need reference docs — not for prospects who need to be sold on the platform.

## Architecture

- Astro Starlight 0.38+
- Static output (GitHub Pages)
- Content in `src/content/docs/` as markdown
- Themed to match marketing site visual identity (Inter font, rust `#c2410c` accent, slate surfaces)
- Theme overrides in `src/styles/custom.css`
- Sidebar configured in `astro.config.mjs`

## Content structure

```
src/content/docs/
├── index.md                         ← Docs homepage (splash template)
├── getting-started/quick-guide.md
├── platform/
│   ├── chat-interface.md
│   ├── working-with-files.md
│   ├── using-agents.md
│   ├── settings.md
│   └── admin-dashboard.md
├── models/model-comparison.md
├── skills/
│   ├── prompt-engineering.md
│   └── mcp-guides.md
├── security/privacy-and-data.md
└── reference/release-notes.md
```

## Content principles

- Reference-oriented: "how to do X" not "why X matters"
- Assume the reader already has access to campusGenAI
- No sales language, no "Request Demo" CTAs
- Link to the marketing site's /learn page for onboarding/learning path content
- Every page ends with the standard "Need help?" block:

```markdown
---

## Need help?

- **Email:** campusgenai@umass.edu
- **Learning path:** [8-step getting started guide](https://umasscds.github.io/campusgenai-site/learn)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
```

## Adding a new doc page

1. Create a `.md` file in the appropriate `src/content/docs/` subdirectory
2. Add frontmatter: `title` and `description`
3. Add the page to the sidebar array in `astro.config.mjs`
4. End with the "Need help?" block above

## Links that reference this site

The marketing site has two links pointing to the old `/learn#guides` path that should be updated to point here once this site is established:

- `src/layouts/BaseLayout.astro` line 228 — footer "Documentation" link
- `src/pages/launch/ignition.astro` line 96 — Platform Guides href

Update these to `https://umasscds.github.io/campusgenai-docs/` (or the custom domain once set).

## Moving to a custom domain

**When this site moves to `docs.campusgenai.org`, do these steps in order:**

### 1. Update astro.config.mjs
```js
// Change:
site: 'https://umasscds.github.io',
base: '/campusgenai-docs',

// To:
site: 'https://docs.campusgenai.org',
base: '/',
```

### 2. Fix internal links in content files
All cross-links between docs pages currently use the `/campusgenai-docs/` prefix.
A single find-and-replace handles this:

```bash
# In the campusgenai-docs repo root:
grep -r "/campusgenai-docs/" src/content/docs/ --include="*.md" -l
# Then replace /campusgenai-docs/ → / in those files
```

Files affected (all of them — every cross-link uses the prefix):
- `src/content/docs/index.md` (hero action links)
- `src/content/docs/getting-started/quick-guide.md`
- `src/content/docs/platform/working-with-files.md`
- `src/content/docs/platform/using-agents.md`
- `src/content/docs/models/model-comparison.md`

### 3. Update the marketing site (repo: campusgenai-site / local: campusgenai-update)
Two files need updating:

| File | Line | Current value | Change to |
|------|------|---------------|-----------|
| `src/layouts/BaseLayout.astro` | 228 | `url('/learn#guides')` | `https://docs.campusgenai.org/` |
| `src/pages/launch/ignition.astro` | 96 | `"/learn#guides"` | `https://docs.campusgenai.org/skills/prompt-engineering/` (or wherever Platform Guides lands) |

Also update the "Need help?" links in every docs page — they currently point to
`https://umasscds.github.io/campusgenai-site/learn`, which should become
`https://campusgenai.org/learn` (or whatever the marketing site domain is by then).

### 4. DNS and GitHub Pages
- Add a CNAME record: `docs.campusgenai.org` → `umasscds.github.io`
- In the GitHub repo settings (Settings → Pages), add the custom domain
- GitHub will provision an SSL certificate automatically (takes ~10 min)
- Add a `public/CNAME` file to the repo containing `docs.campusgenai.org` so it persists across deploys

## What NOT to do

- Do NOT add "Request Demo" buttons or marketing CTAs. This is a user reference site.
- Do NOT duplicate the learning path content from /learn. Link to it.
- Do NOT add a blog/updates section. Updates live on the marketing site at /updates. This site has release-notes.md for technical changes only.
- Do NOT add a tutorials/ section for video content — those were empty stubs in the original Starlight site. Add tutorials only when real video content exists.
- Do NOT use Starlight's `autogenerate` for sidebars — the sidebar is explicitly defined in astro.config.mjs for control over ordering and labels.
