---
title: Billing & Budgets
description: How KeyMaker API budgets and team chat balances are billed, how much to allocate, and what to do when funds run low.
---

KeyMaker usage is billed monthly to the billing code your sponsor registered. Sponsors decide how their budget is split across team members, and for each member, how much goes to **API budget** versus **chat balance**. Those two behave very differently at billing time.

## API budget vs. chat balance

| | API budget | Chat balance |
| --- | --- | --- |
| **Used for** | Programmatic access with your API key (Claude Code, Codex, scripts) | Chat in campusGenAI, using your team's wallet |
| **What it is** | A spending cap | A one-time transfer of funds |
| **What gets billed** | Only what's actually used, monthly | The **full amount** transferred, at month end, even if only partly spent |
| **Unspent funds** | Carry over | Stay with the member, who can keep using them |
| **Can it be reversed?** | Sponsor can lower the cap | No — once transferred, it can't be moved back. [Contact us](/get-help/) if a transfer was made in error. |
| **Adding more** | The Sponsor raises the cap | The Sponsor funds another transfer |

**In practice:** allocating API budget is low-risk, because you only pay for what's used. Keep chat balances small and add more as needed.

A member doesn't need to use the API at all. If someone only needs more chat credit, a sponsor can give them a chat balance and little or no API budget. Joining a team currently issues an API key either way.

:::note[Your default balance is separate]
Every user has a default balance (shown as **Balance**) that covers chat in campusGenAI. A team chat balance is in addition to it and is funded by the sponsor. See [Credits & tokens](/platform/credits-and-tokens/).
:::

## How billing works
- Usage and cost are tracked **per team**. If you belong to more than one team, each team's usage is billed to that team's billing code.

- Usage is **billed monthly** to the billing code on file.
- Members see their own spend in the [KeyMaker portal](/keymaker/portal/). Sponsors and administrators see team and institutional usage in the admin portal.
- Your institution's finance administrator routes the bill to the billing code.

## Allocating funds (sponsors)

- By default, **100% of your budget is allocated to you** as the sponsor. Lower your own budget with **Edit Budget** before you give any to a member.
- Allocate per member on the **Team Members** tab, and choose how much of each member's allocation goes to API budget and how much to chat balance.

### How much to allocate

The best estimate comes from real usage. Have members run a representative piece of their workload on a [trial key](/keymaker/getting-started/#path-c-free-trial-key), then check what it cost.

As a rough guide to monthly API spend:

| Usage pattern | Typical monthly cost |
| --- | --- |
| Testing and trying things out | Well under $100 |
| Typical research coding support, selective with expensive models | Up to about $100 |
| Moderate ongoing development | Low hundreds of dollars |
| Heavy multi-agent workflows using frontier models | Can reach thousands of dollars |

Programmatic workflows can consume far more than interactive use — a single script can make thousands of calls.

## Running low or out of funds

When an API budget runs out, requests made with that key return an error until more funds are allocated.

- **Team members:** ask your sponsor to increase your allocation.
- **Sponsors:** select **Request Budget Top-Up** on your team's **Overview** tab. The request goes to an administrator for approval, and timing varies.

Check your spend regularly so you can ask for more before you run out.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
