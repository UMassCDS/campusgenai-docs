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
2. Click the **key icon** (**The KeyMaker**) in the left side menu. You can also open it
   from your **profile picture** menu.

KeyMaker opens as its own page, titled **TheKeyMaker Budget Management**, with two tabs:
**Trial Key** and **Sponsor Access**.

:::note[The KeyMaker page is changing]
KeyMaker recently moved from a pop-up window to a dedicated page, and the new page is still
rolling out, so your deployment may show the older pop-up for a while. The interface is
also likely to change again soon, so labels and layout may differ from what's described
here.
:::

## Teams and roles

You can belong to **more than one team**, and a Sponsor can sponsor more than one team.
Roles apply per team, not to your account as a whole, so you can sponsor one team and be a
member of another at the same time.

- **One key per team.** You have a separate API key for each team you belong to, so usage
  and cost are tracked per team and attributed to the right funding source, for example a
  specific grant.
- **Team cards.** If you belong to more than one team, **Your Teams** on the **Sponsor
  Access** tab shows a card for each team. With only one team, you won't see any cards:
  KeyMaker shows that team directly. Purple cards are teams you sponsor (marked **PI**, which KeyMaker uses
  interchangeably with Sponsor) and green cards are teams you're a member of (marked
  **Member**). Each card also shows the team's status.
- **Switching teams.** Select a team card to see that team's key, budget, and members.
  Everything below the cards applies to the selected team only.

If you used KeyMaker before multi-team support, your existing team and key carried over
automatically. No action is needed.

## Path A — Register as a team sponsor

Sponsors hold a budget, manage team membership, and allocate funds to members. Choose this
path if you're authorized to charge a funding account — a grant, a department account, a
course budget — and other people will bill against it. If you're not that person, forward
this page to whoever handles funding for your group: your PI, supervisor, or business
manager.

1. Open KeyMaker and go to **Sponsor Access**.
2. On the **Register as a team Sponsor** card, select **Register as Sponsor**. If you
   already belong to a team, select **+ Register as a Sponsor** at the top of the page
   instead.
3. Complete the registration form:
   - **Full Name**
   - **Department**
   - **Billing code**: the funding account your team's usage is charged to. Your
     institution's administrators set this field's label, so it may appear as something
     else, for example **Cost Center**. You must be authorized to charge the account you
     enter. If you're unsure which code to use, confirm with your department's business or
     finance contact before submitting.
   - **Team / Group Name**: the name your members will see when they join. It
     distinguishes your team from others billed to the same billing code, so pick
     something recognizable, like your lab, course, or project.
     <!-- TODO: confirm whether team names must be unique (system-enforced or convention; per institution or platform-wide) -->
   - **Requested Budget (USD)**: the total available to your team. You don't need to get
     this exactly right: you can request a top-up later.
   - **Research Use Case**: how you plan to use the API.
4. Select **Submit Registration**. Registering is a request, not instant access: your
   billing code is verified and your registration is approved before your team is
   created. Timing varies with verification, and you'll get an email when your request's
   status changes.
5. Once approved, members can request to join your team. You'll get an email for each
   request, and it appears on your team's **Team Requests** tab. Approve or deny each
   request. If you deny one, give a reason. The requester sees it and can resubmit.
   <!-- TODO: exact approve/deny button labels (no screenshot of a pending request yet) -->
6. Allocate funds on the **Team Members** tab. By default **100% of your budget is
   allocated to you as the Sponsor**, so first lower your own budget with **Edit Budget**
   to free up funds (shown as **Unallocated**), then use **Fund API key** and **Fund chat**
   on each member's row.
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
3. On the **Join your Sponsor's team** card, select **Request to Join**. If you already
   belong to a team, select **+ Join a Sponsor's Team** at the top of the page instead.
4. Under **Find your Sponsor**, search by name or email. Type at least two letters, then
   pick your sponsor from the results. If your sponsor runs more than one team, choose
   the team you want to join.
5. Answer **What will you use the API for?**
6. Select **Submit Request**. Your sponsor gets an email and reviews your request on their
   **Team Requests** tab.
7. You'll get an email when your request is approved or denied. If it's denied, KeyMaker
   shows your sponsor's reason. Review your details and resubmit.
8. Once approved, return to KeyMaker. If you belong to more than one team, select the new
   team's card. Your member view shows:
   - your sponsor's name in a banner at the top
   - your **masked API key**, with **Regenerate Key** if you need to replace it
   - your **API Endpoint**
   - your **API Budget** and **Chat Balance** cards
   - your **Rate Limits** (requests per minute and tokens per minute)
   - your **Available Models**
9. Copy your key and endpoint, then follow a setup guide:
   [API usage](/keymaker/python/) ·
   [Connect to Claude Code](/keymaker/claude-code/) ·
   [Connect to Codex](/keymaker/codex/)

To join another team later, repeat these steps. Each team gives you a separate key.

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
- **Chat vs. API** — your default balance (shown as **Balance**) covers chat
  in campusGenAI. A team chat balance is separate and is funded by your sponsor. See
  [Credits & tokens](/platform/credits-and-tokens/).
- **Billing** — API usage is pay-as-you-go and billed monthly to the billing code on file.

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
