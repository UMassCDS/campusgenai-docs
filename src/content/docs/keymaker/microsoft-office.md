---
title: Microsoft Office Setup
description: Connect the Claude add-in for Word, Excel, and PowerPoint to campusGenAI models through KeyMaker.
---

The [Claude add-in](https://claude.com/docs/office-agents/overview) puts Claude in a side panel inside Word, Excel, and PowerPoint, where it can read and edit the open document. Connect it to KeyMaker and your usage bills to your sponsor's funding. You don't need a Claude account.

## What you need

- **A Microsoft 365 desktop app** (Word, Excel, or PowerPoint) signed in with your university account.
- **Your KeyMaker gateway URL.** In campusGenAI, open KeyMaker (the **key icon** in the left side menu) and copy the value in the **API Endpoint** box. If you belong to more than one team, select the team's card first.
- **Your personal KeyMaker API key.** It's on the same KeyMaker screen. The add-in asks for it in a field labeled **Token**, but it's the same key. If you don't have one, see [Getting Started](/keymaker/getting-started/).

:::caution[Treat your key like a password]
Anyone with your key can use models billed to your sponsor's funding. Never share it or paste it into documents, email, or chat. See [security best practices](/keymaker/usage/#security-best-practices).
:::

The screenshots show PowerPoint for Mac. The steps are the same in Word and Excel.

## 1. Open Claude

In Word, Excel, or PowerPoint, look for the **Claude** button at the right end of the **Home** ribbon. If it's there, click it and skip to [step 2](#2-choose-the-gateway-option).

If there's no Claude button, add it:

1. On the **Home** tab, click **Add-ins**. A panel opens with a search box and a list of popular add-ins.

   ![The Add-ins button on the PowerPoint Home ribbon, with the add-ins panel open](/keymaker/office/01-add-ins-menu.png)

2. In the **Search Add-ins** box, type `claude`.
3. Find **Claude for Microsoft 365** (the orange Claude icon) and click **Add**. Accept the terms if prompted.

   ![Search results for "claude" with Claude for Microsoft 365 highlighted](/keymaker/office/02-search-claude.png)

4. When the **Claude** button appears on the Home ribbon, click it.

If you can't find or install the add-in, your institution may manage add-ins centrally. See [Troubleshooting](#troubleshooting).

## 2. Choose the gateway option

On the Claude welcome screen, click **Cloud provider or gateway**.

![The Claude button on the ribbon and the Claude welcome screen, with Cloud provider or gateway highlighted](/keymaker/office/03-claude-button-and-pane.png)

:::caution
Don't click **Log in** or **Sign up**. Those connect to a personal Claude.ai account, not to KeyMaker.
:::

## 3. Enter your KeyMaker details

On the **Connect another way** screen:

1. Make sure the **Gateway** tab is selected (not Vertex, Bedrock, or Azure).
2. In **Gateway URL**, paste your KeyMaker gateway URL exactly as shown in KeyMaker, with no trailing slash or extra path.
3. In **Token**, paste your KeyMaker API key.
4. Click **Continue**.

<img src="/keymaker/office/05-connect-gateway.png" alt="The Connect another way screen with the Gateway tab, Gateway URL, Token, and Continue highlighted" width="360" />

Once the connection is accepted, the Claude panel opens and you can start chatting about your open document, workbook, or presentation. If you see an error, see [Troubleshooting](#troubleshooting).

## Use Claude in other Office apps

Word, Excel, and PowerPoint each connect separately. If Claude doesn't appear in another app, add it from that app's **Add-ins** menu as in [step 1](#1-open-claude), then repeat steps 2 and 3 with the same gateway URL and API key. You'll also need to connect on each computer you use.

You can also install it from Microsoft Marketplace, which lists a separate entry for each app. Click **Get it now** on the one you need.

![Microsoft Marketplace entries for Claude in Excel, PowerPoint, Word, and Outlook](/keymaker/office/06-marketplace-listings.png)

## Reopen Claude later

Click the **Claude** button on the Home ribbon. If it isn't there, click **Add-ins** and select Claude under **My Add-ins**.

<img src="/keymaker/office/07-my-add-ins.png" alt="The Claude button on the ribbon, and Claude under My Add-ins in the add-ins panel" width="480" />

## Good to know

- **Where your data goes:** your prompts and the document content Claude reads go to campusGenAI through KeyMaker, not to Anthropic.
- **Cost:** Claude reads your document to answer, so large files use more tokens. Watch your **API Budget** in KeyMaker.
- **Not available through KeyMaker:** working across apps in one conversation, dictation, and adding your own connectors.
- **Outlook:** Claude for Outlook is a separate add-in that your institution's Microsoft 365 administrator must approve. Ask your IT team whether it's available.

## Change your key

The add-in keeps the old key after you [rotate it](/keymaker/rotating-your-key/). In each app, open the account menu in the Claude panel, select **Logout**, and connect again with the new key.

## Remove the add-in

Click **Add-ins**, then **More Add-ins**. In the **Office Add-ins** window, open the **My Add-ins** tab, click the menu next to **Claude for Microsoft 365**, and choose **Remove**. (**Add-in details** shows information about the add-in.)

<img src="/keymaker/office/08-remove-add-in.png" alt="The My Add-ins tab with the menu for Claude for Microsoft 365 open, showing Add-in details and Remove" width="400" />

## Troubleshooting

**Connection fails after clicking Continue**
Check that the Gateway URL matches the **API Endpoint** value in KeyMaker exactly, with no extra spaces, trailing slash, or path such as `/v1`. If you're off campus, you may also need the VPN.

**API key rejected**
Copy your key from KeyMaker again in full. If you recently rotated it, log out of the add-in and reconnect with the new one. If it still fails, your key may have expired or been revoked. Check with your sponsor that your access is active.

**Claude button missing after installing**
Close and reopen the Office app, then check **Add-ins** → **My Add-ins**.

**Add-in not found or can't be installed**
Your institution may manage add-ins centrally. Check the **Admin Managed** tab in the Office Add-ins window (**Add-ins** → **More Add-ins**), or contact your IT team.

**"No models available"**
Enter a Claude model name from **Available Models** in KeyMaker. The add-in works with Claude models only.

For other errors, see Anthropic's [troubleshooting guide](https://claude.com/docs/office-agents/third-party-platforms#troubleshooting).

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
