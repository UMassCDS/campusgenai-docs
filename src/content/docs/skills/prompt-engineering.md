---
title: Prompt Engineering
description: Write effective prompts to get better results from AI models on campusGenAI.
---

Prompt engineering is how you communicate with AI models to get useful, accurate results. These techniques work across all models on campusGenAI.

## Core principles

### Be specific

Vague prompts produce vague results. Adding context, constraints, and a clear goal dramatically improves output quality.

| Instead of | Try |
|-----------|-----|
| "Write me an email" | "Write a professional email to our program officer updating them on Q1 enrollment (up 15%) and requesting a meeting to discuss next quarter's targets" |
| "Summarize this report" | "Summarize the three main recommendations in this report and list the evidence supporting each one" |
| "Help me with this proposal" | "Review this grant proposal abstract for clarity and strength of argument. Identify the weakest section and suggest specific improvements" |

### Provide context

Tell the AI what it needs to know to do the task well:

- **Who the audience is** — a funder, a board, a colleague, a client
- **What tone you want** — formal, conversational, plain language
- **What format you need** — bullet points, a table, prose paragraphs, a specific length
- **Any constraints** — word limits, things to include or avoid

```
I'm writing a board report for a non-profit board that has limited
technical background. Summarize our Q1 AI usage data (attached) in
plain language. Focus on: how many staff are using the tools, what
kinds of tasks they're using AI for, and one specific example of
time saved. Keep it to 3 short paragraphs.
```

### Define the output format

If you have a specific structure in mind, say so explicitly:

```
Create a comparison table of the three grant opportunities listed
below. Columns: funder name, deadline, maximum award, eligibility
requirements, and whether we qualify based on our org profile.
```

### Iterate

Your first prompt is rarely your last. Follow up with:

- "Make this shorter"
- "Add more detail about the budget section"
- "Change the tone to be less formal"
- "Give me three alternative versions of the opening paragraph"

Think of it as a conversation, not a single command.

## Patterns that work well

### Role assignment

Giving the AI a role can sharpen its responses significantly:

```
You are an experienced grant reviewer for community health foundations.
Review the following abstract and identify three strengths and three
weaknesses from a funder's perspective.
```

### Step-by-step reasoning

For complex analysis or calculations, ask the AI to show its work:

```
Walk me through analyzing this budget gap step by step.
Show your reasoning at each stage.
```

### Few-shot examples

Show the AI what you want by providing examples before the task:

```
Rewrite these sentences in active voice:

Original: "The program was delivered by our team."
Rewritten: "Our team delivered the program."

Original: "Outcomes were measured by program staff."
Rewritten: "Program staff measured outcomes."

Now rewrite: "The evaluation was completed by our external evaluator."
```

### Structured extraction

Good for pulling specific information out of documents:

```
From the attached meeting transcript, extract:
1. All decisions made (as a bullet list)
2. All action items (person responsible + what they'll do)
3. Any open questions that need follow-up
```

## Use cases by role

### Non-profit and community organizations

- Draft grant LOIs and proposals from program descriptions
- Turn program data into board reports and funder updates
- Create plain-language summaries of policy or regulatory documents
- Develop FAQ documents for your community from internal resources
- Prepare talking points for advocacy meetings or funder presentations
- Draft intake forms, referral letters, and follow-up communications

### Faculty and researchers

- Generate discussion questions and assignment prompts from course materials
- Summarize research papers and identify themes across multiple sources
- Draft and refine grant abstracts
- Create rubrics and assessment criteria
- Get feedback on manuscript sections

### Administrators and staff

- Summarize meeting notes and extract action items
- Draft internal communications, announcements, and policy updates
- Analyze open-ended survey responses for themes
- Create onboarding materials and process documentation
- Build templates for recurring communications

## What AI won't do reliably

- **Accurate citations** — AI can fabricate plausible-sounding references. Always verify citations independently.
- **Current information** — Models have knowledge cutoffs. Don't rely on them for current events, new regulations, or recent research without verification.
- **Precise numbers** — AI is not a calculator. Use it to structure analysis, not to do arithmetic.
- **Confidential research** — Don't paste sensitive personal information, student records, or health data into AI conversations unless your institution has specifically approved it.

---

## Need help?

- **Email:** campusgenai@umass.edu
- **Learning path:** [8-step getting started guide](https://umasscds.github.io/campusgenai-site/learn)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
