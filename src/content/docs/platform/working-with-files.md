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

In a new conversation, you can re-attach a previously uploaded file without uploading it again: open the **Attached Files** section in the sidebar (paperclip icon) and select the file from there.

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

campusGenAI is useful for quick questions about your data — spotting patterns, summarizing contents, identifying missing values, or talking through what an analysis should look like. For complex work like pivot tables, statistical modeling, or multi-step formulas, it works best as a thinking partner: use it to plan your approach or interpret results, then carry out the analysis in Excel, Google Sheets, or a tool like R or Python.

Upload a CSV or spreadsheet and ask:

```
What are the top 5 trends in this dataset?
```

```
Summarize this data by category.
```

```
Which rows have missing values?
```

```
How would I calculate a month-over-month growth rate for this data in Excel?
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

Uploaded files are processed according to your institution's data governance policies. See [Privacy & Data](/security/privacy-and-data/) for details.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
