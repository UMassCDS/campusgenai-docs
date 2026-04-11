---
title: Using Agents
description: Create and use AI agents on campusGenAI — custom instructions, model selection, and use cases.
---

## What are agents?

Agents are AI assistants pre-configured with specific instructions, a chosen model, and optionally reference files. Instead of writing a detailed prompt every time you do a recurring task, you configure an agent once and reuse it.

An agent configuration includes:

- **Instructions** — how the agent should behave, what tone to use, what to include or exclude
- **Model** — which AI model the agent uses
- **Files** (optional) — reference documents the agent can draw from in every conversation
- **Tools** (optional) — capabilities like web search or code execution, if enabled in your deployment

## Creating an agent

1. Go to the **Agents** section in the platform sidebar
2. Click **Create New Agent**
3. Fill in the configuration:
   - **Name** — something descriptive (e.g., "Grant Writing Assistant", "Board Report Generator")
   - **Instructions** — detailed behavioral instructions (see below)
   - **Model** — choose based on the task; see [Model Comparison](/campusgenai-docs/models/model-comparison/)
   - **Files** — upload any reference documents
4. Save and start a conversation with the agent

## Writing good instructions

The quality of an agent depends almost entirely on its instructions. Be specific about:

- **Role:** what the agent is and who it serves
- **Tone:** formal, conversational, technical, plain language
- **Output format:** how responses should be structured — bullet points, tables, prose paragraphs
- **Constraints:** what it should and shouldn't include or do

### Example: grant writing assistant

```
You are a grant writing assistant for a social services non-profit.
When given a program description, funder requirements, or a draft section:

1. Write in clear, evidence-based language appropriate for foundation funders
2. Structure responses to match standard LOI/proposal formats unless instructed otherwise
3. Flag any claims that need supporting data or citations
4. Suggest specific language improvements, not just general feedback
5. Do not invent statistics or outcomes — ask for real data if needed

Tone: professional but not overly formal. Avoid jargon.
```

## Use cases

Common agent types across campusGenAI organizations:

- **Grant writing and LOI drafting** — pre-loaded with funder requirements or your organization's style guide
- **Board report generator** — turns program data and meeting notes into narrative summaries
- **Intake form reviewer** — checks client intake forms for completeness and flags missing information
- **Policy Q&A** — answers staff questions about internal policies, referencing uploaded policy documents
- **Meeting summarizer** — takes raw notes and produces structured summaries with action items
- **Training material creator** — generates staff training content based on your programs and workflows

## Sharing agents

Agents you create are private to your organization by default. You can publish useful agents to the community library — when you do, every organization on the platform can use that agent. Only the agent's instructions are shared; your conversations and data remain private.

To publish an agent: open the agent settings and look for the "Publish to community library" option.

---

## Need help?

- **Email:** campusgenai@umass.edu
- **Learning path:** [8-step getting started guide](https://umasscds.github.io/campusgenai-site/learn)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
