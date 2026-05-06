---
title: Using Agents
description: Create and use AI agents on campusGenAI — custom instructions, model selection, and use cases.
---

## What are agents?

Agents are AI assistants pre-configured with specific instructions, a chosen model, and optionally reference files. Instead of writing a detailed prompt every time you do a recurring task, you configure an agent once and reuse it.

An agent configuration includes:

- **Instructions**: How the agent should behave, what tone to use, what to include or exclude
- **Model**: Which AI model the agent uses
- **Files** (optional): Reference documents the agent can draw from in every conversation
- **Tools** (optional): Capabilities like web search or code execution, if enabled in your deployment

## Creating an agent

1. Go to the **Agents** section in the platform sidebar
2. Click **Create New Agent**
3. Fill in the configuration:
   - **Name** — something descriptive (e.g., "Grant Writing Assistant", "Board Report Generator")
   - **Instructions** — detailed behavioral instructions (see below)
   - **Model** — choose based on the task; see [Model Comparison](/campusgenai-docs/models/model-comparison/)
   - **Files** — upload any reference documents
   - **Tools** — add Google search, image generation, Wolfram, etc.
   - **MCPs** — add document generation capabilities and more
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

## Artifacts

Artifacts let an agent display generated output in a live-rendered panel alongside the chat, rather than as plain text in the conversation. This is useful when the output is something you'd want to view, interact with, or copy — a diagram, a formatted table, a working HTML component, or a code file.

Supported output types:
- **HTML/JavaScript** — rendered as a live preview in the panel
- **React components** — interactive UI prototypes
- **Mermaid diagrams** — flowcharts, sequence diagrams, entity-relationship diagrams
- **Structured content** — tables, formatted reports, code files

### Enabling artifacts

Artifacts are enabled per-agent, not globally. When creating or editing an agent, open the **Tools** menu (sliders icon) and enable **Artifacts** from the expanded options. Not all models render artifacts equally well — if output isn't rendering as expected, try a different model.

### Example use cases

- **Process diagram** — describe a workflow and ask the agent to generate a Mermaid flowchart
- **Data table** — paste in raw data and ask for a formatted summary table
- **Web prototype** — ask the agent to build a simple HTML/CSS layout for a page or component
- **Report template** — generate a structured document with headers, tables, and placeholder text ready to fill in

## Sharing agents

Agents you create are private by default. You can share them with specific people or make them available to everyone on your deployment.

**To share an agent:**
1. Open the agent and go to its settings
2. Choose **Share with everyone** to make it available platform-wide, or invite specific users by name or email
3. Set the permission level:
   - **Viewer** — can start conversations with the agent but cannot see or edit its configuration
   - **Advanced Viewer** — can see the agent's instructions and settings but cannot edit
   - **Editor** — can modify the agent's configuration
   - **Owner** — full control, including sharing and deletion

You can also generate a **shareable link** to send directly to someone. Links respect the permission level you set.

## Agent Center

The Agent Center is a browsable directory of agents that have been shared on your deployment. You can find it in the sidebar under **Agents**.

Use the Agent Center to:
- **Discover** agents other users have shared
- **Filter** by category, agents shared with you, agents created by you, agent templates, and more
- **Start a conversation** with any shared agent directly

Agents marked with a **registered badge** have been reviewed and endorsed — these are typically maintained by your institution or a trusted team.

## Generating documents

Agents can produce downloadable files — PDFs, Word documents (.docx), and spreadsheets (.csv) — when configured with the appropriate MCP. This is useful for agents that generate recurring reports, formatted summaries, or structured data exports that users need to save or share outside the platform.

To enable document generation for an agent, add the relevant MCP when configuring the agent's tools. See [MCP & External Tools](/campusgenai-docs/skills/mcp-guides/) for setup details.

---

## Need help?

- **Email:** campusgenai@umass.edu
- **Learning path:** [8-step getting started guide](https://umasscds.github.io/campusgenai-site/learn)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
