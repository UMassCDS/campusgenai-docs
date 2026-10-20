---
title: Portal Tour
description: A tour of the KeyMaker page in campusGenAI — teams, keys, budgets, requests, and email notifications.
---

The KeyMaker page is where you request access, switch between your teams, find your API key and endpoint, and track your spend. To open it, sign in to campusGenAI and click the **key icon** (**The KeyMaker**) in the left side menu. You can also open it from your **profile picture** menu.

:::note[The KeyMaker page is changing]
KeyMaker recently moved from a pop-up window to a dedicated page, and the new page is still rolling out, so your deployment may show the older pop-up for a while. The interface is also likely to change again soon, so labels and layout may differ from what's described here.
:::

<!-- TODO: screenshots (text-only for now — see redact/retake list in KEYMAKER_DOCS_PLAN.md) -->

## Before you join a team

The page is titled **TheKeyMaker Budget Management** and has two tabs:

- **Trial Key**: select **Get Free Key** to get a short-term trial key. See [Path C](/keymaker/getting-started/#path-c-free-trial-key).
- **Sponsor Access**: two cards:
  - **Join your Sponsor's team** → **Request to Join**. See [Path B](/keymaker/getting-started/#path-b-join-your-sponsors-team).
  - **Register as a team Sponsor** → **Register as Sponsor**. See [Path A](/keymaker/getting-started/#path-a-register-as-a-team-sponsor).

If a join request is denied, a banner at the top of the **Sponsor Access** tab shows your Sponsor's reason, and you can resubmit.

## Your teams

If you belong to **more than one team**, the **Sponsor Access** tab shows **Your Teams**: one card per team, with your role and the team's status. With only one team, you won't see any cards: KeyMaker goes straight to that team's view, and steps below that say to select a team's card don't apply to you.

- **Purple cards** are teams you sponsor. They're marked **PI** (KeyMaker uses PI and Sponsor interchangeably) and say "You run this team".
- **Green cards** are teams you're a member of. They're marked **Member** and show the team's Sponsor and your budget.

### Switch between teams

1. Open the KeyMaker page and go to **Sponsor Access**.
2. Under **Your Teams**, select a team's card. Use the arrows to scroll if you have more teams than fit.
3. The selected card shows a check mark. Everything below the cards (key, budget, members) now applies to that team.

### Join or sponsor another team

Use the buttons at the top right of the **Sponsor Access** tab:

- **+ Join a Sponsor's Team**: request to join another team. See [Path B](/keymaker/getting-started/#path-b-join-your-sponsors-team).
- **+ Register as a Sponsor**: request to sponsor a new team. This always requires approval. See [Path A](/keymaker/getting-started/#path-a-register-as-a-team-sponsor).

## Member view

For a team you're a member of, the page shows:

- **Sponsor banner**: the team's Sponsor and department.
- **API key**: your key for this team, shown masked. Use **Regenerate Key** to replace it, for example if it may have been exposed. See [Rotating your key](/keymaker/rotating-your-key/).
- **API Endpoint**: the base URL your tools point at. Copy it from here wherever a guide says `YOUR_KEYMAKER_URL`.
- **API Budget**: amount spent out of amount allocated, and the percentage used.
- **Chat Balance**: the chat credit your Sponsor has funded for this team. See [Billing & budgets](/keymaker/billing/) for how it differs from API budget.
- **Rate Limits**: your requests-per-minute and tokens-per-minute limits.
- **Setup guides**: links to [API Usage](/keymaker/python/), [Claude Code Setup](/keymaker/claude-code/), and [Codex Setup](/keymaker/codex/).
- **Available Models**: the model names your key can use. Copy names from here rather than from examples.

## Sponsor view

For a team you sponsor, the page has three tabs.

### Overview

Your own key and budget for this team: **Your Sponsor API Key** (with **Regenerate Key**), the **API Endpoint**, **My Budget** (your API Budget and Chat Balance), **Rate Limits**, and **Request Budget Top-Up**.

### Team Requests

A summary of the team's funds (**Grant total**, **Unallocated**, and how much is in API budgets and chat balances), followed by pending join requests.

To review a join request:

1. You'll get an email when someone asks to join your team.
2. If you sponsor more than one team, select the team's card. Then open **Team Requests**.
3. Approve or deny the request. If you deny it, give a reason. The requester sees it and can resubmit.
   <!-- TODO: exact approve/deny button labels (no screenshot of a pending request yet) -->

### Team Members

The same funding summary, a search box, and a row for each person on the team:

- **You (Sponsor)**: your own spend and cap, with **Fund chat** and **Edit Budget**.
- **Each member**: their API usage against their cap and how much chat they've been funded, with **Fund chat** and **Fund API key**.

To fund a member:

1. If you sponsor more than one team, select the team's card. Then open **Team Members**.
2. By default, all of the team's budget is allocated to you. Select **Edit Budget** on your own row and lower it to free up funds. They appear as **Unallocated**.
3. On the member's row, select **Fund API key** to set their API budget, or **Fund chat** to give them a chat balance. Read [Billing & budgets](/keymaker/billing/) first: the two are billed very differently.

The member gets an email when their budget changes.

To remove a member, select the trash icon on their row. This removes them from the selected team only. They keep any other teams they belong to.

## Using a team's chat balance

If a Sponsor has funded a chat balance for you, you choose which wallet pays for your chats:

1. In the chat screen, select the wallet chip in the message box. You can also use the wallet entry at the top of your **profile picture** menu.
2. Under **Switch wallet**, pick **Balance** (your default balance) or a team wallet. Team wallets are listed by Sponsor, team, and department.

The check mark shows which wallet your next messages will use.

## Email notifications

KeyMaker emails you as requests move through the system. Your institution's administrator decides which notifications are turned on, so you may not receive all of them.

**Sponsors** are emailed when:

- someone requests to join your team
- a member's join request is approved
- the status of your Sponsor registration or budget top-up request changes

**Members** are emailed when:

- your join request is approved
- your join request is denied
- your Sponsor adds to or reduces your API budget or chat balance
- you're removed from a team

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
