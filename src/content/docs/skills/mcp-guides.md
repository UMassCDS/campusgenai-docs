---
title: MCP & External Tools
description: Built-in tools and Model Context Protocol (MCP) connectors that extend what campusGenAI agents can do.
---

:::caution
Tool availability varies by deployment. Administrators control which tools and MCP connectors are enabled. Contact your administrator to find out what's available in your specific deployment.
:::

## Agent tools at a glance

campusGenAI agents can use two kinds of capabilities:

- **Built-in tools** ship with the platform — they're always present, and your administrator (or you, when configuring an agent) toggles them on per agent.
- **MCP connectors** plug external systems into campusGenAI through the Model Context Protocol. The set of MCP connectors available depends on your deployment.

## Built-in tools

These tools are part of the campusGenAI platform. Enable them on an agent when you want it to reach beyond plain text generation.

| Tool | What it does |
|------|--------------|
| **Google search** | Searches the web for current information not in the model's training data. Useful for news, recent events, and up-to-date facts. |
| **GPT-Image** | Generates images from text descriptions. Useful when an agent needs to produce diagrams, illustrations, or visual examples. |
| **Wolfram** | Sends math, science, and computational queries to Wolfram Alpha and returns structured results. Useful for formulas, unit conversions, symbolic math, and quantitative reasoning. Requires a Wolfram Alpha App ID, which you provide when adding the tool to an agent. |

## What is MCP?

The Model Context Protocol (MCP) is an open standard that lets AI models connect to external systems — databases, APIs, file systems, and web services. On campusGenAI, MCP is the mechanism for adding new external integrations beyond the built-in tools.

An MCP server exposes a set of functions (tools) the AI can call. When processing a message, the agent decides whether to call one of those functions to get external information, and incorporates the result into its response.

From the user's perspective, this is transparent — you ask a question, and the agent uses whatever it needs to answer it.

## Available MCP connectors

| Connector | What it does | Status |
|-----------|--------------|--------|
| **Document Generator** | Creates CSV, DOCX, and PDF files from agent output. Useful when you want a deliverable file instead of just chat text. | Available |
| **Google Drive** | Reads and writes files in a connected Google Drive. | Coming soon |

More MCP connectors are added over time. Check with your administrator for the current list in your deployment.

## Configuring an agent to use tools

1. Create or edit an agent (see [Using Agents](/platform/using-agents/))
2. In the agent configuration, look for the **Tools** or **MCP** section
3. Enable the built-in tools and MCP connectors you want the agent to use
4. Save the agent

Only enable what the agent actually needs. Each enabled tool adds potential access surface and may have rate limits or usage costs.

## Best practices

- **Test before deploying broadly.** Agent + tool combinations can behave unexpectedly. Test with representative prompts before sharing the agent with your organization.
- **Be explicit in instructions.** Tell the agent when it should and shouldn't use a tool — "search the web only if you're asked about events after 2024" is more reliable than leaving it to the model's discretion.
- **Verify tool outputs.** The AI interprets tool results, and that interpretation can be wrong. Review outputs for high-stakes tasks.
- **Check rate limits.** Some tools and MCP connectors have rate limits or per-call costs. Understand the constraints before building agents that call them frequently.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
