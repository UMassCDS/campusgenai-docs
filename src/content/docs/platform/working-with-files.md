---
title: Working with Files
description: Upload files to campusGenAI and use them with AI models and agents.
---

## Uploading a file

1. In a chat conversation, click the **attachment button** (paperclip icon) in the input area
2. Select one or more files from your computer
3. The files upload and attach to your next message
4. Type your prompt about the files and send

Files are attached per-message. If you want the AI to continue referencing a file in the same conversation, you don't need to re-upload — the model retains context from earlier in the conversation.

## Supported file types

| Type | Formats |
|------|---------|
| Documents | PDF, DOCX, TXT, MD |
| Spreadsheets | CSV, XLSX |
| Images | PNG, JPG, GIF (with vision-capable models) |
| Code | Python, JavaScript, and most common languages |

## Working with uploaded content

### Document analysis

Upload a PDF or document and ask:

```
Summarize the key findings from this paper in 5 bullet points.
```

```
What are the gaps in this proposal?
```

```
Identify every action item mentioned in this report.
```

Be specific about what you want. "Summarize this" works, but "identify the three main recommendations in this report and list the evidence supporting each one" produces a more useful result.

### Spreadsheet and data analysis

Upload a CSV or spreadsheet and ask:

```
What are the top 5 trends in this dataset?
```

```
Create a summary table showing totals by category.
```

```
Which rows have missing values?
```

### Code review

Upload a code file and ask:

```
Review this code for potential issues and suggest improvements.
```

```
Explain what this function does.
```

## File access in agents

Agents can also be configured with reference files that they use in every conversation. This is useful for agents that always need to reference a specific document — a grant writing assistant that follows your style guide, a policy Q&A agent that references your handbook, and so on.

To add files to an agent: when creating or editing an agent, use the file upload option in the agent configuration. Uploaded files become part of that agent's knowledge for every conversation it handles.

## File size and limits

File upload limits vary by institution. Contact your administrator if you need to upload very large files.

## Privacy

Uploaded files are processed according to your institution's data governance policies. See [Privacy & Data](/campusgenai-docs/security/privacy-and-data/) for details.

---

## Need help?

- **Email:** campusgenai@umass.edu
- **Learning path:** [8-step getting started guide](https://umasscds.github.io/campusgenai-site/learn)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
