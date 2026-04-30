---
title: Admin Portal
description: Platform administration — user management, usage analytics, and configuration for campusGenAI administrators.
---

The Admin Portal is available to designated administrators in each campusGenAI deployment. It provides tools for managing users, monitoring usage, and configuring platform behavior.

## Accessing the portal

Admin access is role-based — only accounts with administrator privileges can see the dashboard. If you need admin access, contact your institution's campusGenAI contact or IT department.

Once you have access, check with your campusGenAI contact or IT admin for the link to your portal. The URL varies depending on the deployment. 

## User management

### Viewing and managing users

The Users section shows all accounts in your deployment:

- View a list of all registered users with their role, groups they are in, remaining balance, total storage used, and account creation date
- Assign or remove roles for a user
- Edit a user's balance
- Reset a user's password

### Access control

Use the access controls to:

- Set which users or groups can access the platform
- Manage group-based permissions if your deployment supports them
- Enforce usage policies by disabling accounts that violate them

### Model access per user

You can control which AI models are available to specific users or groups. To configure:

1. Go to **Admin → Users** and select a user or group
2. Open the **Model Access** settings
3. Enable or disable specific models
4. Save changes — they take effect on the user's next login

## Usage analytics

### Overview dashboard

The main analytics view shows platform-wide activity:

- Total active users (daily, weekly, monthly)
- Messages and conversations over time
- Token usage by model
- Most active users or departments

### Per-user and per-model reports

Drill into usage data to understand patterns:

- **Per-user breakdowns** — see which users are most active, and which haven't logged in
- **Model distribution** — see which models are being used and in what volume
- **Peak usage times** — useful for capacity planning
- **Cost allocation** — if your deployment tracks costs, view breakdowns by department or group

Use these reports to understand adoption, identify power users who might mentor colleagues, and find departments that haven't engaged yet.

## Platform configuration

### Available models

Enable or disable models for your entire deployment:

1. Go to **Admin → Models**
2. Toggle models on or off
3. Set a default model for new users

Changes take effect immediately. Users currently in a conversation are not affected until they start a new one.

### Announcements

Some deployments support sending platform-wide announcements that appear in the interface. Use this to communicate about outages, new models, or policy changes.

### Platform settings

Depending on your deployment type, you may be able to configure:

- SSO settings and authentication policies
- Session timeout duration
- Default conversation settings
- Data retention policies

Contact the campusGenAI team at campusgenai@umass.edu for changes that require backend configuration.

## Best practices

- Review usage analytics monthly to understand adoption across your institution or organization
- Communicate model availability changes to users before making them — unexpected changes to available models cause confusion
- Monitor for unusual usage spikes that might indicate misuse or unexpected cost
- Set clear internal policies about what data is appropriate to use with the platform before rollout

---

## Need help?

- **Email:** campusgenai@umass.edu
- **Learning path:** [8-step getting started guide](https://umasscds.github.io/campusgenai-site/learn)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
