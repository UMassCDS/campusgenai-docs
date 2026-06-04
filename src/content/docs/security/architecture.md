---
title: Security Architecture
description: Tenant isolation, vendor data agreements, retention, and security review — for institutional IT and compliance teams.
---

This page describes the infrastructure, vendor relationships, and data-protection terms that underpin campusGenAI. For end-user privacy guidance, see [Privacy & Data](/security/privacy-and-data/).

## Tenant isolation and infrastructure

Each subscribing institution's campusGenAI deployment is provisioned within a separate, dedicated AWS account. Your tenant's instance operates in its own AWS account, architecturally separated from all other institutional deployments. 

User data, including conversations, prompts, outputs, uploaded files, and account information, resides exclusively within the institution's dedicated AWS environment. Other campusGenAI subscribing institutions do not have access to your tenant’s data, infrastructure, or user activity.

## UMass access to institutional data

As the platform operator, UMass Amherst maintains administrative access to the infrastructure supporting each institution's campusGenAI instance. This is comparable in scope to the administrative access inherent in any hosted service (similar to how an institution providing email services has technical access to that email infrastructure).

UMass administrative staff with appropriate roles have the technical ability to access user inputs and outputs stored in the platform. In practice, UMass does not access, review, or use subscribing institution user data except at the explicit request of the subscribing institution (e.g., for troubleshooting or support), to maintain the security and operational integrity of the platform, or as required by law. 

UMass does not use subscribing institution data for its own research, analytics, or any purpose unrelated to delivering and supporting the campusGenAI service. Administrative access is governed by UMass Amherst information security policies, which include role-based access controls and logging.


## AI model providers — data use and training

All AI models available through the campusGenAI platform are accessed exclusively through Amazon Web Services (AWS) Bedrock and Microsoft Azure AI Foundry. These are enterprise cloud AI services with published data protection practices:

* **AWS Bedrock**: Per AWS's published data protection documentation, customer inputs and outputs processed through Amazon Bedrock are not used to train foundation models. AWS does not share customer data with third-party model providers. [(AWS Bedrock Data Protection)](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html)
* **Microsoft Azure AI Foundry**: Per Microsoft's published documentation, customer data, prompts, and completions are not used to train generative AI foundation models, and Microsoft does not share customer logs or content with model providers. [(Azure AI Foundry Data Privacy)](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy?tabs=azure-portal)

UMass Amherst's enterprise agreements with both AWS and Microsoft incorporate these data protection terms. These protections apply to all models currently offered through the platform, including models from OpenAI, Anthropic, Meta, and others as served through Bedrock and Azure AI Foundry.


## Data retention

Conversation data (prompts and outputs) is retained within each institution's dedicated environment to provide service functionality such as conversation history. Users have the ability to delete conversations. Deleted conversations are removed from the application and are not accessible to the user or platform administrators. Deleted data may persist in routine infrastructure backups for a limited retention period consistent with standard AWS backup practices. Current practice upon service termination is to coordinate with the subscribing institution on deletion or return of institutional data.

## Security review

The campusGenAI platform infrastructure has been reviewed and approved by the UMass Amherst Information Security team for use with non-public institutional data under UMass data classification standards. 

The campusGenAI team is available to work with your institution's information security team to address additional questions or provide further documentation to support your internal review process.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
