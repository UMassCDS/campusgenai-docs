---
title: Getting Started with KeyMaker
description: How to get a KeyMaker API key — as a team sponsor, a team member, or with a free trial key.
---

KeyMaker issues API keys for programmatic access to campusGenAI models, enabling workflows
outside the chat interface — including tools like Claude Code and Codex. This page covers
the fastest route to a working key for each type of user.

KeyMaker is also how a sponsor can fund **extra chat credit** for their team. You don't
need to write code or use the API: a sponsor can allocate a **chat balance** that you spend
in the regular campusGenAI chat. Joining a team currently issues an API key as well, but
you don't have to use it.

:::caution[You may not have access yet]
KeyMaker is in beta and access is being rolled out gradually. If you don't see KeyMaker in your profile menu, your account isn't enabled yet — contact your institutional administrator to ask about access. This applies to team members as well as sponsors: your
sponsor being set up doesn't automatically enable your account.
:::

## Which path am I?

| Your situation | Path | What's involved |
| --- | --- | --- |
| I want to try the API before committing any funds | [Trial key](#path-c-free-trial-key) | A few minutes — no approval needed |
| My lab, course, or department will fund my usage | [Team member](#path-b-join-your-sponsors-team) | A short form, then sponsor approval |
| I just want more chat credit, no API needed | [Team member](#path-b-join-your-sponsors-team) | Same as above. Your sponsor allocates a chat balance |
| I hold the budget and will fund others | [Team sponsor](#path-a-register-as-a-team-sponsor) | Registration, then approval |

:::note[Members: your sponsor must register first]
You can only request to join a sponsor who has **already registered** in KeyMaker. If your
sponsor doesn't appear in the search, ask them to complete
[Path A](#path-a-register-as-a-team-sponsor) before you submit your request.
:::

## Opening KeyMaker

Every path starts the same way:

1. Sign in to campusGenAI with your institutional credentials.
2. Click your **profile picture** in the bottom left corner.
3. Click **KeyMaker**.

The KeyMaker screen is titled **TheKeyMaker Budget Management** and opens on two tabs:
**Trial Key** and **Sponsor Access**.

<!-- TODO: add profile-menu screenshot (1.53.27) here and in portal.md -->

## Path A — Register as a team sponsor

Sponsors hold a budget, manage team membership, and allocate funds to members. Choose this
path if you're authorized to charge a funding account — a grant, a department account, a
course budget — and other people will bill against it. If you're not that person, forward
this page to whoever handles funding for your group: your PI, supervisor, or business
manager.

1. Open KeyMaker and go to **Sponsor Access**.
2. On the **Register as a team Sponsor** card, select **Register as Sponsor**.
3. Complete the registration form:
   - **Full Name**
   - **Department**
   - **Billing code** — the funding account your team's usage is charged to. Your
     institution's administrators set this field's label, so it may appear as something
     else, for example "Cost Center". You must be authorized to charge the account you
     enter; if you're unsure which code to use, confirm with your department's business or
     finance contact before submitting.
   - **Initial budget** — the total available to your team. You don't need to get this
     exactly right: funds can be added to your budget later.
     <!-- TODO: confirm exact field labels + remaining fields below the fold -->
4. Submit the form. An administrator verifies your billing code, then a platform
   administrator approves your registration. Timing varies with verification.
5. Once approved, open the **Team Requests** tab to review and approve join requests from
   your members.
6. Allocate funds to each member. By default **100% of your budget is allocated to you as
   the sponsor**, so you must first un-allocate some of your own funds before you can give
   them to anyone else.
7. For each member, decide how much goes to **API budget** and how much to **chat
   balance**. These behave very differently at billing time — read
   [Billing & budgets](/keymaker/billing/) before you allocate. In short: an API budget is
   a spending cap and you're billed monthly only for what your team actually uses, while a
   chat balance transfer is permanent and is billed in full at month end regardless of how
   much the member spends. Start chat balances small and add more as needed.

Next: [Billing & budgets](/keymaker/billing/) · [Portal tour](/keymaker/portal/)

## Path B — Join your sponsor's team

1. Confirm your sponsor has registered (see the note above).
2. Open KeyMaker and go to **Sponsor Access**.
3. On the **Join your Sponsor's team** card, select **Request to Join**.
4. Under **Find your Sponsor**, search by name or email. Type at least two letters, then
   pick your sponsor from the results.
5. Answer **What will you use the API for?**
6. Submit the request. Your sponsor approves it from their **Team Requests** tab and
   allocates your funds.
7. Once approved, return to KeyMaker. Your member view shows:
   - your sponsor's name in a banner at the top
   - your **masked API key**, with **Regenerate Key** if you need to replace it
   - your **API Endpoint**
   - your **API Budget** and **Chat Balance** cards
   - your **Rate Limits** (requests per minute and tokens per minute)
   - your **Available Models**
8. Copy your key and endpoint, then follow a setup guide:
   [API usage](/keymaker/python/) ·
   [Connect to Claude Code](/keymaker/claude-code/) ·
   [Connect to Codex](/keymaker/codex/)

:::caution[Treat your key like a password]
Your key bills against your sponsor's funding account. Don't commit it to a repository,
paste it into a shared document, or share it with collaborators. If it may have been
exposed, use **Regenerate Key** immediately. See
[security best practices](/keymaker/usage/#security-best-practices).
:::

Next: [Portal tour](/keymaker/portal/) · [Using your key](/keymaker/usage/)

## Path C — Free trial key

A trial key is the low-commitment way to find out what your work actually costs before
anyone allocates a budget.

1. Open KeyMaker and go to the **Trial Key** tab.
2. Select **Get Free Key**.
3. Copy your key and endpoint, then follow a setup guide:
   [API usage](/keymaker/python/) ·
   [Connect to Claude Code](/keymaker/claude-code/) ·
   [Connect to Codex](/keymaker/codex/)

What you get:

- A small amount of usage for a limited time — for example, $5 for 7 days. The amount
  and duration are set by your institution and shown on the **Trial Key** tab.
- No renewal
- No approval step
- Access to all available models

When the trial expires or the funds run out, your next step is **Sponsor Access** — either
[join a sponsor's team](#path-b-join-your-sponsors-team) or
[register as a sponsor](#path-a-register-as-a-team-sponsor).

:::tip[Use the trial to size your budget]
Run a representative piece of your real workload on the trial key, then check your spend.
That number is the best input you have for the allocation conversation with your sponsor.
See [Billing & budgets](/keymaker/billing/) for guidance on how much to allocate.
:::

<!-- TODO: plan flags "trial key is probably API-only" as unconfirmed — do not add a chat claim until verified -->

## Find your API endpoint

Alongside your key, the KeyMaker portal shows an **API Endpoint** box containing the base
URL your tools should point at. Each institution's deployment has its own endpoint, so copy
the value shown in your own portal rather than one you've seen elsewhere.

You'll need it when you set up [Claude Code](/keymaker/claude-code/),
[Codex](/keymaker/codex/), or [Python](/keymaker/python/) — each of those guides marks the
spot with `YOUR_KEYMAKER_URL`.

## After you have a key

- **Check your spend** — your own usage appears in KeyMaker; sponsors and administrators
  see team and institutional usage in the admin portal.
- **Use valid model names** — copy them from **Available Models** rather than hardcoding
  from examples.
- **Know your rate limits** — requests-per-minute and tokens-per-minute limits are shown
  on your **Rate Limits** card. Check yours there rather than assuming a number.
- **Chat vs. API** — your default balance (shown as **Free balance** for now) covers chat
  in campusGenAI. A team chat balance is separate and is funded by your sponsor. See
  [Credits & tokens](/platform/credits-and-tokens/).
- **Billing** — API usage is pay-as-you-go and billed monthly to the billing code on file.
  Model usage is billed at provider rates plus a standard institutional overhead.

## Getting help

- KeyMaker is in active development. Use **Report an issue** or **Give feedback** in the
  footer for bugs and suggestions — including during beta, when this is the fastest route.
- Allocation, budget, and billing-code questions go to your sponsor first, then your
  institutional administrator.
- Anything your administrator can't resolve escalates to the campusGenAI expert team.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
