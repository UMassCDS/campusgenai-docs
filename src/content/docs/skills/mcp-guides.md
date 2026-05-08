---
title: MCP & External Tools
description: Model Context Protocol — connecting AI agents to external tools and data sources on campusGenAI.
---

:::caution
MCP tool availability varies significantly by deployment and requires administrator setup. This page describes how MCP works in general — contact your administrator to find out what tools are available in your specific deployment.
:::

## What is MCP?

The Model Context Protocol (MCP) is an open standard that lets AI models connect to external systems — databases, APIs, file systems, and web services. On campusGenAI, MCP enables agents to go beyond text generation and actually interact with outside data sources.

With MCP tools, an agent can:

- Search the web for current information not in its training data
- Execute code and return the results
- Read and write files in connected storage systems
- Call external APIs and incorporate live data into responses

## How it works

1. An MCP server exposes a set of **tools** — functions the AI can call
2. An agent is configured to use one or more MCP servers
3. When processing a message, the agent decides whether to call a tool to get external information
4. The tool executes, returns results to the agent, and the agent incorporates them into its response

From the user's perspective, this is transparent — you ask a question, and the agent uses whatever tools it needs to answer it.

## Common MCP tools

Depending on your deployment, available tools may include:

| Tool | What it does |
|------|-------------|
| Web search | Searches the internet for current information |
| Code execution | Runs Python or other code and returns results |
| File system access | Reads from or writes to connected storage |
| Database connectors | Queries institutional databases |
| Calendar/scheduling | Reads calendar data |

Contact your administrator for the specific list of tools enabled in your deployment.

## Configuring an agent to use MCP tools

1. Create or edit an agent (see [Using Agents](/campusgenai-docs/platform/using-agents/))
2. In the agent configuration, look for the **Tools** or **MCP** section
3. Enable the tools you want the agent to use
4. Save the agent

Only enable tools the agent actually needs. Each enabled tool adds potential access surface and may have rate limits or usage costs.

## Best practices

- **Test before deploying broadly.** Agent + MCP combinations can behave unexpectedly. Test with representative prompts before sharing the agent with your organization.
- **Be explicit in instructions.** Tell the agent when it should and shouldn't use a tool — "search the web only if you're asked about events after 2024" is more reliable than leaving it to the model's discretion.
- **Verify tool outputs.** The AI interprets tool results, and that interpretation can be wrong. Review outputs for high-stakes tasks.
- **Check rate limits.** Some MCP tools have rate limits or per-call costs. Understand the constraints before building agents that call them frequently.

---

## Need help?

- **Get help:** [Contact us](/campusgenai-docs/get-help/)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
