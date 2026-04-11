---
title: Model Comparison
description: Available AI models on campusGenAI, their strengths, and when to use each one.
---

campusGenAI gives you access to multiple AI models through a single interface. This page helps you choose the right one for your task.

:::note
Model availability varies by deployment. Not all models listed here may be available in your institution's instance. Check your model selector for what's currently available. This table reflects the current lineup as of Spring 2026 — models change frequently.
:::

## Model comparison

<!-- Verify this table against current platform configuration before relying on it — models and capabilities change. -->

| Model | Provider | Best for | Notes |
|-------|----------|----------|-------|
| GPT-4o | OpenAI | General purpose, strong reasoning, multimodal | Good default for most tasks |
| Claude 3.5 Sonnet | Anthropic | Long documents, nuanced writing, careful analysis | Handles very long context well |
| Gemini | Google | Fast responses, multimodal tasks | Good for image analysis |
| DeepSeek R1 | DeepSeek | Code, math, technical reasoning | Open-weight model; strong at multi-step reasoning |

## How to choose

**For most tasks:** Start with GPT-4o or whichever model is selected by default. It handles general writing, Q&A, brainstorming, and summarization well.

**For long documents:** Claude handles larger amounts of text more reliably. If you're uploading a 50-page report or a long policy document, try Claude first.

**For code and technical work:** DeepSeek R1 is strong at code generation, debugging, and mathematical reasoning. GPT-4o is also solid for code.

**For image analysis:** If you're uploading images and asking questions about them, use GPT-4o or Gemini — both support vision well.

**For nuanced writing:** Claude tends to produce well-structured, thoughtful prose. Good for drafting reports, proposals, or detailed analysis where tone and structure matter.

## Switching models mid-conversation

You can switch models at any point using the model selector. Note that switching starts a new context — the new model doesn't have access to the previous conversation history. For tasks where you want to try different models on the same content, copy the relevant context into a new conversation rather than switching mid-thread.

## Model access

Model availability is controlled by your administrator. If a model isn't appearing in your selector that you'd like to use, contact your IT department or campusgenai@umass.edu.

---

## Need help?

- **Email:** campusgenai@umass.edu
- **Learning path:** [8-step getting started guide](https://umasscds.github.io/campusgenai-site/learn)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
