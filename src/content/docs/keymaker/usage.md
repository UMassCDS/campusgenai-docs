---
title: Usage and Best Practices
description: Monitoring KeyMaker usage, rate limits, security best practices, and when to use the API versus the chat interface.
---

This page covers how KeyMaker usage works, how to keep an eye on cost, and how to use your API key safely.

## Budgets and usage

Your API usage draws on the **API budget** your Sponsor allocates to you. That budget is a spending cap: when it runs out, requests made with your key return an error until more funds are allocated. See [Billing & budgets](/keymaker/billing/) for how budgets are billed, how much to allocate, and how to request more.

## Monitoring usage

Both users and Sponsors monitor usage and cost in the **KeyMaker portal in campusGenAI** (profile picture → **KeyMaker**). Check it regularly to understand how much of your Sponsor's funding you're consuming.

Sponsors: keep in mind that programmatic workflows (batch jobs, pipelines) can consume far more than interactive chat use — a single script can make thousands of calls. Review usage regularly, especially after onboarding new team members, and remove team members who no longer need access.

## Rate limits

Each key has a **requests-per-minute** and a **tokens-per-minute** limit. Your limits are shown on the **Rate Limits** card in the KeyMaker portal. Check yours there rather than assuming a number.

If you see a **"too many requests"** error (HTTP 429), you've hit a rate limit:

- Wait a moment and retry. Most client libraries can retry automatically with backoff.
- For batch jobs, add a short delay between requests or reduce how many run in parallel.
- Send fewer, larger requests where your workflow allows it.

## Security best practices

Your API key is billed to your sponsor's funding and should be protected like a password.

- **Never commit keys to a repository.** Keep them out of source control — use a config file like `~/.claude/settings.json`, environment variables, or a secrets manager.
- **Never share your key** or paste it into shared documents, tickets, or chat.
- **[Rotate your key](/keymaker/rotating-your-key/)** periodically, and immediately if you suspect it's been exposed.
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
