---
title: Credits & Tokens
description: How credits and tokens work on campusGenAI, how to check your balance, and how refills happen.
---

Every conversation on campusGenAI consumes **tokens**, which can draw down your **credit** balance. You don't need to manage this actively, but understanding the mechanics helps you pick the right model and recognize why some conversations feel "heavier" than others.

## Credits

Credits are your usage budget on the platform. Your institution's administrator sets your credit **allocation** and how often it refills. Both can differ by institution and by role, for example faculty and staff versus students.

Refills happen automatically on a schedule. Depending on your deployment, that might be nightly or monthly. At each refill your balance is reset to your full allocation. Credits **do not stack**: unused balance doesn't carry over into the next refill period.

:::note[Sponsor-funded team wallets work differently]
A [team wallet](#team-wallets) funded by a Sponsor through KeyMaker isn't covered by your institution's usage policies:

- **No refill schedule:** it isn't reset at refill, so any unused balance carries over until it's spent.
- **Model access set by the Sponsor:** your institution's model access rules don't apply. The Sponsor decides which models the team can use.
:::

Some deployments also offer models that don't use credits at all, or limit certain models to some roles. Check the model picker or ask your administrator what applies to you.

## Tokens

Tokens are the unit AI models use to measure language. Every word (or part of a word) in your prompts, any files you attach, and the model's response back to you are all counted in tokens.

- 1 token ≈ 4 characters of English text
- A short question uses a few hundred tokens
- A long document summary can use tens of thousands

Each message in the chat shows its token count, so you can see in real time how much a conversation is using.

## How credits and tokens connect

When a model processes your conversation, it uses tokens — and your credit balance is charged to cover that cost. **More tokens used means more credits spent**, but the credit-to-token ratio isn't fixed. Two factors drive it:

| Factor | Effect on credit usage |
|--------|------------------------|
| **Model choice** | More powerful models cost more credits per token. See [Model Comparison](/models/model-comparison/) for relative cost. |
| **Prompt complexity** | Long messages, attached files, and detailed responses all generate more tokens. |

A quick chat with a standard model uses a small fraction of a typical allocation. Running a lengthy research summary through a premium model uses noticeably more — though normal use rarely exhausts an allocation.

## Checking your balance

1. Click your **profile picture** in the bottom-left corner of the sidebar.
2. Select **Settings**.
3. Open the **Balance** tab. Your current balance and the **Next Refill** time are shown there.

The **Next Refill** line shows when your balance will next be reset. Refills are automatic, so there's nothing you need to do.

## Team wallets

If you need more chat credit than your default balance, a sponsor can fund a **team chat balance** for you through [KeyMaker](/keymaker/overview/). You spend it in the regular chat, with no API use or coding required. Ask your PI, supervisor, or department to [register as a sponsor and add you to their team](/keymaker/getting-started/).

To choose which wallet pays for your chats, select the wallet chip in the message box (or the wallet entry at the top of your profile picture menu). Under **Switch wallet**, pick **Balance** (your default balance) or a team wallet.

A team chat balance is separate from your default balance. It's a one-time allocation that doesn't refill when your default balance does. See [Billing & budgets](/keymaker/billing/) for how it's billed.

## Storage usage

Some deployments also track **file storage** alongside credits. View your storage limit status by going to **Attach Files** in the left sidebar and then selecting **Manage Files**.

![Storage status panel showing the Manage Files view](/storage-status.png)

## Choosing models for cost

For routine drafting, summarizing, or brainstorming, a lighter model is usually sufficient and noticeably cheaper. Save the premium models for tasks that genuinely need them — code reasoning, long-document analysis, complex multi-step instructions. The [Model Comparison](/models/model-comparison/) page lays out the tradeoffs.

If you receive a **low-balance notification**, you may be able to request additional credits from your institution's administrator.

## Notes

- Credit limits, refill schedules, and storage quotas are all set by your institution's administrator and may differ from the defaults described here.
- Regardless of how many credits or tokens you use, your conversations are not used to train AI models. See [Privacy & Data](/security/privacy-and-data/) for details.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
