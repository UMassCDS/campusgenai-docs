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

| Model | Provider | Cost | Best for | Notes |
|-------|----------|------|----------|-------|
| GPT-5.2 | OpenAI | $$ | Advanced reasoning, long context, coding, vision | Top OpenAI option; supports web search and image generation |
| GPT-5 | OpenAI | $$ | Next-gen reasoning, creativity, deep context | Supports web search and image generation |
| GPT-5 Codex | OpenAI | $$ | Code generation, debugging, technical work | Built on GPT-5; specialized for software development |
| GPT-5-mini | OpenAI | $ | Fast, lightweight tasks | Compact and efficient; supports web search and image generation |
| GPT-4o | OpenAI | $$ | General-purpose tasks | Fast, versatile model for everyday use |
| Claude 4.6 Opus | Anthropic | $$$ | Agentic coding, tool use, long-context reasoning, enterprise workflows | Most capable Claude model; use when quality matters most |
| Claude 4.6 Sonnet | Anthropic | $$$ | Hybrid reasoning, agentic tasks, long-form analysis | Strong default for complex work; handles long context well |
| Claude 4.5 Haiku | Anthropic | $ | Lightweight, fast chat and analysis | Fastest Claude option; cost-efficient |
| DeepSeek-R1 | DeepSeek | $$ | Deep reasoning, math, technical code | Open-weight reasoning specialist |
| LLaMA 3 70B Instruct | Meta | $$ | Instruction following | Open-weight model |
| Mistral Large | Mistral | $ | Complex reasoning | Strong general-purpose reasoning |
| Grok 3 | xAI | $$ | Reasoning across diverse tasks | Advanced reasoning model |

**Cost:** $ = lower cost per token; $$$ = higher cost. Cheaper models are well-suited to quick lookups and lightweight tasks; pricier models are best reserved for work that needs their extra capability.

## How to choose

Use this as a starting point — the right model depends on your specific task and what's available in your deployment.

**For most tasks:** GPT-5.2 is the top general-purpose option — strong across writing, Q&A, analysis, and brainstorming. GPT-5 and GPT-4o are also good defaults.

**For quick, simple tasks:** GPT-5-mini and Claude 4.5 Haiku are both faster and lighter than their bigger siblings. Use them for short summaries, simple lookups, or anything that doesn't need deep reasoning.

**For long documents:** Claude 4.6 Sonnet handles large amounts of text reliably. If you're uploading a long report or policy document, try Sonnet first.

**For high-stakes or complex work:** Claude 4.6 Opus is the most capable Claude model — good for detailed analysis, nuanced writing, agentic workflows, and complex multi-step problems.

**For code:** GPT-5 Codex is purpose-built for software tasks. DeepSeek-R1 is strong for code, math, and technical reasoning. Claude 4.6 Opus also handles agentic coding well.

**For image generation:** GPT-5.2, GPT-5, GPT-5-mini, and the Claude 4.6 family all support generating images via tool use — describe what you want and the model will create it.

**For other reasoning needs:** Mistral Large, Grok 3, and Meta LLaMA 3 70B Instruct are also available in some deployments for general reasoning and instruction-following tasks.

**For nuanced writing and prose:** Claude models tend to produce well-structured, thoughtful writing. Good for drafting reports, proposals, or detailed analysis where tone and structure matter.

## Switching models mid-conversation

You can switch models at any point using the model selector. Note that switching starts a new context — the new model doesn't have access to the previous conversation history. For tasks where you want to try different models on the same content, copy the relevant context into a new conversation rather than switching mid-thread.

## Model access

Model availability is controlled by your administrator. If a model isn't appearing in your selector that you'd like to use, contact your IT department.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
