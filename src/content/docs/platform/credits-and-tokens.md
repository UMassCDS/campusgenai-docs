---
title: Credits & Tokens
description: How credits and tokens work on campusGenAI, how to check your balance, and how refills happen.
---

Every conversation on campusGenAI consumes **tokens**, which draw down your **credit** balance. You don't need to manage this actively, but understanding the mechanics helps you pick the right model and recognize why some conversations feel "heavier" than others.

## Credits

Credits are your usage budget on the platform. Each user has a credit balance and a **refill interval** (typically one day), both of which are configured by your institution's administrator.

Your balance carries over between sessions. Refills happen automatically, but only when two conditions are true:

1. Your current balance isn't enough to send your next message, **and**
2. The refill interval has elapsed since your last refill.

This means you won't get a fresh top-up while you still have credits left. The system tops you up only when you actually need it.

:::note
The refill mechanism described here is under active development and may change. Check this page for the most current behavior.
:::

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

A quick chat with a standard model uses a small fraction of a daily allocation. Running a lengthy research summary through a premium model uses noticeably more — though normal use rarely exhausts a daily limit.

## Checking your balance

1. Click your **profile picture** in the bottom-left corner of the sidebar.
2. Select **Settings**.
3. Open the **Balance** tab. Your current balance and the **Next Refill** time are shown there.

If the time on the "Next Refill" line has passed but your balance hasn't updated, send a new message — the act of sending triggers the refill check. Refresh the Balance tab and you'll see the new amount.

## Storage usage

Some deployments also track **file storage** alongside credits. Storage consumption is displayed in the same Settings area, under **Usage** or **Storage** depending on your deployment.

<video
  src="/check-storage.mov"
  autoplay
  loop
  muted
  playsinline
  style="max-width: 100%; border-radius: 0.5rem; margin-top: 1rem;"
></video>

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
