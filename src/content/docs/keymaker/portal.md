---
title: Portal Tour
description: A tour of the KeyMaker portal in campusGenAI — the Trial Key and Sponsor Access tabs, and what members and sponsors see.
---

The KeyMaker portal is where you request access, find your API key and endpoint, and track your spend. To open it, sign in to campusGenAI, click your **profile picture** in the bottom left corner, and click **KeyMaker**.

<!-- TODO: profile-menu screenshot (1.53.27) -->

## Before you have access

The portal is titled **TheKeyMaker Budget Management** and opens on two tabs:

- **Trial Key**: select **Get Free Key** to get a short-term trial key. See [Path C](/keymaker/getting-started/#path-c-free-trial-key).
- **Sponsor Access**: two cards:
  - **Join your Sponsor's team** → **Request to Join**. Search for your sponsor by name or email and describe what you'll use the API for.
  - **Register as a team Sponsor** → **Register as Sponsor**. Enter your name, department, billing code, and initial budget.

<!-- TODO: screenshots of Trial Key tab, Sponsor Access tab, and both forms -->

## Member view

Once your request is approved, the portal shows, from top to bottom:

- **Sponsor banner**: the sponsor whose team you're on.
- **API key**: shown masked. Use **Regenerate Key** to replace it, for example if it may have been exposed. See [Rotating your key](/keymaker/rotating-your-key/).
- **API Endpoint**: the base URL your tools point at. Copy it from here wherever a guide says `YOUR_KEYMAKER_URL`.
- **API Budget**: amount spent out of amount allocated, and the percentage used.
- **Chat Balance**: your team chat wallet. See [Billing & budgets](/keymaker/billing/) for how it differs from API budget.
- **Rate Limits**: your requests-per-minute and tokens-per-minute limits.
- **Setup guides**: links to [API Usage](/keymaker/python/), [Claude Code Setup](/keymaker/claude-code/), and [Codex Setup](/keymaker/codex/).
- **Available Models**: the model names your key can use. Copy names from here rather than from examples.

The footer has **Report an issue** and **Give feedback** links.

<!-- TODO: member-view screenshots -->

## Sponsor view

Sponsors use the **Team Requests** tab to approve members who asked to join, then allocate funds to each member's API budget and chat balance. See [Billing & budgets](/keymaker/billing/#allocating-funds-sponsors).

<!-- TODO: sponsor screenshots + walkthrough — Team Requests, allocation, top-up request, chat wallet switcher -->

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
