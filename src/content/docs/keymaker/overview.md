---
title: KeyMaker Overview
description: Direct API access to campusGenAI's AI models for programmatic use, custom applications, and research workflows.
---

KeyMaker is direct API access to the AI models available through campusGenAI. It lets you use those models outside the chat interface — in your own code, custom applications, and research workflows — while running on the same secure, institutionally governed infrastructure as the chat platform.

## What KeyMaker is

The campusGenAI chat interface is great for conversational, day-to-day use. KeyMaker opens the door to everything beyond that:

- **Programmatic integrations** — call AI models directly from your own scripts and services
- **Custom applications** — build institutional tools and apps on top of campusGenAI's models
- **Research workflows** — batch processing, data analysis, and custom AI pipelines
- **Developer tooling** — use coding agents like [Claude Code](/keymaker/claude-code/) against campusGenAI's models

You authenticate with an API key and point your tools at the KeyMaker base URL:

```
https://thekeymaker.umass.edu
```

## Who it's for

- Researchers building custom AI pipelines
- Developers integrating AI into institutional applications
- Faculty and staff running programmatic workflows (batch processing, data analysis, etc.)
- Graduate students working on AI-related projects under a sponsor

## Key benefits

- **Institutional governance and data security** — KeyMaker runs through the same secure infrastructure as the chat platform: an AWS secure landing zone, approved for Level 3 data, with no data used to train models.
- **Multi-model access** — the same set of AI models available on the campusGenAI chat platform is available through the API. See the [Model Comparison](/models/model-comparison/) page for what's offered.
- **Sponsor-funded** — sponsors bring their own funding source (speedtype, grant, or department budget) to cover usage, so there's no additional burden on the institution's central budget.
- **Team provisioning** — sponsors can allocate API access and manage usage across their team members.

## How it differs from the chat interface

| | Chat interface | KeyMaker (API) |
|---|---|---|
| Access | Web interface, conversational | Programmatic — your code, CLI, or app |
| Best for | Everyday questions, drafting, exploration | Automation, custom apps, research pipelines |
| Funding | Included with your campusGenAI account | Sponsor-funded (speedtype required) |

Not sure which to use? See [Usage and Best Practices](/keymaker/usage/#when-to-use-the-api-vs-the-chat-interface).

## Getting started

Ready to request access? Head to [Getting Started](/keymaker/getting-started/) for eligibility, the request process, and team provisioning.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
