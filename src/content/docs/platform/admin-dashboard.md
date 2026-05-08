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

The **Users** section shows all accounts in your deployment:

- View a list of all registered users with their role, groups they are in, remaining balance, total storage used, and account creation date
- Assign or remove roles for a user
- Edit a user's balance
- Reset a user's password

### Define roles

The **Roles** section allows you to create a role and define that role's **permissions** and **grants**.

- **Permissions** control what users with this role can do inside the main application — such as creating or sharing agents and prompts, using bookmarks, accessing the agent center, and other features.
- **Grants** control what users with this role can see and do inside the admin portal. Enabling a grant gives all members of this role access to the corresponding section or action.

### Manage groups

Create a group and manage it's permissions and members.

- Manage members of a group
- Set global permissions for a group, such as allowed models, agent sharing permissions, storage limits, and balance settings.

### Model access per user

You can control which AI models are available to specific users or groups. 

To configure a group's model access:

1. Go to **Groups** and create or select a group — you can add multiple users to the group, or just one
2. If you're editing an exisiting group, click **Edit Settings** (the gear icon) under Actions.
3. Under Global Permissions, click **Allowed Models**
4. Enable or disable specific models
5. Save changes

## Usage analytics

### Overview dashboard

The main analytics view shows platform-wide activity:

- Total active users (daily, weekly, monthly)
- Messages and conversations over time
- Token usage by model
- Most active users or departments

## Platform configuration

### Available models

Enable, disable, and reorder models for your entire deployment:

1. Go to **Configuration → ModelSpecs**
2. Disable models as needed
3. Set a default model for users
4. Drag and drop models into the order you'd like

### Announcements

Some deployments support sending platform-wide announcements that appear in the interface upon login. Use this to communicate about outages, new models, or policy changes. To edit this:
1. Go to Configuration **Configuration → Terms of Service**
2. Edit the text using markdown formatting
3. Click **Preview** to preview what it will look like
4. Save changes

### Platform settings

Depending on your deployment type, you may be able to configure:

- SSO settings and authentication policies
- Session timeout duration
- Default conversation settings
- Data retention policies

Contact the campusGenAI team for changes that require backend configuration.

## Best practices

- Review usage analytics monthly to understand adoption across your institution or organization
- Communicate model availability changes to users before making them — unexpected changes to available models cause confusion
- Monitor for unusual usage spikes that might indicate misuse or unexpected cost
- Set clear internal policies about what data is appropriate to use with the platform before rollout

---

## Need help?

- **Get help:** [Contact us](/campusgenai-docs/get-help/)
- **About campusGenAI:** [Main site](https://umasscds.github.io/campusgenai-site/)

Your interface may look slightly different depending on your institution's deployment.
