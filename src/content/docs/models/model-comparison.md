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
| GPT-4o | OpenAI | General purpose, reasoning, multimodal | Good default for most tasks |
| GPT-5-mini | OpenAI | Fast, lightweight tasks | Cost-efficient; good for simple Q&A and summarization |
| GPT-5.2 | OpenAI | Complex reasoning, general purpose | Strong across writing, analysis, and problem-solving |
| GPT-5 Codex | OpenAI | Code generation and debugging | Specialized for software development tasks |
| Claude 4.6 Sonnet | Anthropic | Long documents, nuanced writing, analysis | Handles very long context well; strong prose quality |
| Claude 4.6 Opus | Anthropic | Complex multi-step reasoning, high-stakes tasks | Most capable Claude model; use when quality matters most |
| Gemini | Google | Fast responses, multimodal tasks | Good for image analysis |
| DeepSeek R1 | DeepSeek | Math, technical reasoning, code | Open-weight model; strong at multi-step reasoning |

## How to choose

Use this as a starting point — the right model depends on your specific task and what's available in your deployment.

**For most tasks:** GPT-4o or GPT-5.2 handles general writing, Q&A, brainstorming, and summarization well. Either is a good default.

**For quick, simple tasks:** GPT-5-mini is faster and lighter. Use it for short summaries, simple lookups, or anything that doesn't require deep reasoning.

**For long documents:** Claude 4.6 Sonnet handles large amounts of text more reliably. If you're uploading a 50-page report or a long policy document, try Claude first.

**For high-stakes or complex work:** Claude 4.6 Opus is the most capable option for tasks where quality and accuracy matter most — detailed analysis, nuanced writing, or complex multi-step problems.

**For code:** GPT-5 Codex is purpose-built for software tasks. DeepSeek R1 is also strong for code, math, and technical reasoning. GPT-4o works well for code too.

**For image analysis:** GPT-4o and Gemini both support vision. Upload images and ask questions about them with either model.

**For nuanced writing and prose:** Claude models tend to produce well-structured, thoughtful writing. Good for drafting reports, proposals, or detailed analysis where tone and structure matter.

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
