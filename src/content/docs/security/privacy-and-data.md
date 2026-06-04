---
title: Privacy & Data
description: Data privacy, security practices, and what campusGenAI does and doesn't share.
---

## Your data is private by default

Conversations, uploaded files, and agents you create are private to your account and organization. Other users cannot see your conversations or files. Each institution's campusGenAI deployment runs in its own dedicated environment, so users at other institutions can't access your data either.

The only exceptions are things you explicitly choose to share:

- **Agents you share with everyone publicly** — when you publish an agent, its instructions are shared with everyone on the platform. Your conversations and the files attached to that agent are not shared.
- **Agents shared with other individual users** — if you share an agent with another user, that user can use the agent. Whether they can see it's configuration details depends on which permission level you choose when sharing.

## AI providers don't train on your data

All AI models in campusGenAI are accessed through enterprise cloud services (**AWS Bedrock** and **Microsoft Azure AI Foundry**) whose data-protection terms prevent your conversations and files from being used to train foundation models.

For contractual specifics, see [Security Architecture](/security/architecture/).

## Deleting conversations

You can delete any conversation from your history. Deleted conversations are removed from the application and are not accessible to the user or platform administrators. 

Deleted data may persist in routine infrastructure backups for a limited retention period consistent with standard AWS backup practices. See [Security Architecture](/security/architecture/) for retention specifics.

## What data is collected

campusGenAI collects:

- Authentication information (through your institutional SSO)
- Conversation content and uploaded files
- Usage metrics (which models you used, token counts)
- Platform interaction logs

Administrators at your institution can see aggregate usage data and per-user activity levels. They cannot read individual conversation content.

## Authentication

campusGenAI typically uses **your institution's Single Sign-On (SSO)** for authentication. You log in with your normal institutional credentials — in that case, campusGenAI does not store a separate password.

Depending on your institution's deployment, you may instead sign in with:

- **Google sign-on**: Log in with a Google account, with no separate campusGenAI password.
- **Email and password**: Most common on trial platforms. In this case campusGenAI stores a password credential for your account.

Check with your admin if you're unsure which method your deployment uses.

## Data classification

The campusGenAI platform is designed to meet institutional security requirements. For fully onboarded institutions, the platform is typically approved for UMass Level 3 data classification, but we recommend confirming with your admin.

**What Level 3 data means in practice:**

- Standard work documents, drafts, and communications: appropriate for use with campusGenAI
- Student records (FERPA-protected): check with your institution before pasting into AI conversations
- Health information (HIPAA-protected): do not use with campusGenAI without explicit approval from your compliance team
- Highly sensitive personal information (Social Security numbers, financial records): do not use

When in doubt, consult your institution's information security office.

## Each institution's policies apply

campusGenAI is deployed by and for individual institutions and organizations. Your institution's data governance policies govern how you should use the platform. The campusGenAI team sets technical security baselines; your institution sets the policies for what data is appropriate to work with.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
