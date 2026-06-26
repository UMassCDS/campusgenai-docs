---
title: Usage and Best Practices
description: Monitoring KeyMaker usage, cost awareness for sponsors, security best practices, and when to use the API versus the chat interface.
---

This page covers how KeyMaker usage works, how to keep an eye on cost, and how to use your API key safely.

## Quotas and usage

KeyMaker doesn't impose a fixed quota. Your usage draws on the **funding your sponsor allocates** — if the funding is there, you can use it however it's allocated to you. Sponsors control how that funding is distributed across their team in the KeyMaker portal.

## Monitoring usage

Both users and sponsors monitor usage and cost in the **KeyMaker portal in campusGenAI** (profile picture → **KeyMaker**). Check it regularly to understand how much of your sponsor's funding you're consuming.

## Cost awareness for sponsors

Because usage is billed to your speedtype, it's worth managing it actively:

- Review usage in the KeyMaker portal regularly, especially after onboarding new team members.
- Allocate funding across team members deliberately rather than leaving it open-ended.
- Remove team members who no longer need access.
- Keep in mind that programmatic workflows (batch jobs, pipelines) can consume far more than interactive chat use — a single script can make thousands of calls.

## Requesting more funds

If you're running low on your allocation, the process is currently manual and depends on whether you're a team member or a sponsor.

**Team members:** Request additional funds directly from your sponsor. Your sponsor controls how funding is allocated across the team in the KeyMaker portal and can increase your allocation from there.

**Sponsors:** Request a budget top-up for your team within the KeyMaker portal. The request is sent to the admin portal for approval.

:::note
This process is manual today. Automated alerts and email notifications are planned for a future release.
:::

## Security best practices

Your API key is billed to your sponsor's funding and should be protected like a password.

- **Never commit keys to a repository.** Keep them out of source control — use a config file like `~/.claude/settings.json`, environment variables, or a secrets manager.
- **Never share your key** or paste it into shared documents, tickets, or chat.
- **Rotate your key** periodically, and immediately if you suspect it's been exposed.
- **Use one key per person or service** where possible, so usage is attributable and a single key can be revoked without disrupting everyone.
- **Scrub keys from logs and screenshots** before sharing them for troubleshooting.

## When to use the API vs. the chat interface

**Use the [chat interface](/platform/chat-interface/) when you're:**

- Asking everyday questions, drafting, or exploring ideas
- Working interactively, one prompt at a time
- Not writing code to call the model

**Use KeyMaker (the API) when you're:**

- Integrating AI into a custom application or institutional tool
- Automating work — batch processing, data analysis, pipelines
- Using a coding agent such as [Claude Code](/keymaker/claude-code/) or [Codex](/keymaker/codex)
- Running repeatable, programmatic workflows that go beyond a chat session

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
