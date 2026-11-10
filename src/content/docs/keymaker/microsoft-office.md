---
title: Microsoft Office Setup
description: Connect the Claude add-in for Excel, Word, PowerPoint, and Outlook to campusGenAI models through KeyMaker.
---

Anthropic's [Claude for Microsoft 365](https://claude.com/docs/office-agents/overview) add-in puts Claude in a side panel inside Excel, Word, PowerPoint, and Outlook. It can read and edit the open workbook, document, or deck. You can connect it to KeyMaker instead of a Claude account. Your usage then bills to your sponsor's funding, and you don't need a Claude subscription.

:::note[Find your KeyMaker URL]
Each institution's deployment has its own KeyMaker URL. Find yours in the **KeyMaker portal in campusGenAI** (the **key icon** in the left side menu), in the **API Endpoint** box. If you belong to more than one team, select the team's card first: each team has its own key. Use that value everywhere these instructions show `YOUR_KEYMAKER_URL`.
:::

## Prerequisites

- Microsoft 365 desktop apps on Windows or Mac, or Office on the web. Perpetual-license Office 2016 and 2019, iPad, and Android aren't supported.
- A valid KeyMaker API key from your sponsor. See [Getting Started](/keymaker/getting-started/).

## Install the add-in

You install it once, and it's available in Excel, Word, and PowerPoint.

1. Go to the [Claude for Microsoft 365 listing on Microsoft AppSource](https://marketplace.microsoft.com/en-us/product/office/WA200010725?tab=Overview).
2. Select **Get it now** and sign in with your Microsoft account if prompted.
3. Open Excel, Word, or PowerPoint and find the add-in:
   - **Windows:** **Home** tab → **Add-ins**
   - **Mac:** **Tools** menu → **Add-ins**
4. Select **Claude** to open its side panel.

:::tip[Can't install it?]
Some institutions block users from installing add-ins from the Office Store. If **Get it now** fails or the add-in never appears, ask your institution's IT team to enable it, or to deploy it for you through the Microsoft 365 admin center.
:::

## Connect the add-in to KeyMaker

1. In the Claude side panel, on the sign-in screen, select **Cloud provider or gateway**. Don't select **Log in**, which signs in with a Claude account.
2. Choose **Gateway** as your connection.
3. Fill in the two fields:
   - **Gateway URL:** the **API Endpoint** value from your KeyMaker portal (`YOUR_KEYMAKER_URL`). Paste it exactly as shown. Don't add `/v1` or `/v1/messages`.
   - **API token:** your KeyMaker API key.
4. Select **Connect**. The add-in sends a test request to KeyMaker, then opens the main chat panel.
5. If you're asked to pick a model, choose a Claude model from the list. The list can include other providers' models, but the add-in only works with Claude models. Check **Available Models** in your KeyMaker portal to see which ones your key can use.

Your key and connection details are saved in the add-in on that computer. They aren't synced to other devices or sent to Anthropic. Repeat these steps on each computer you use.

:::caution[Keep your key private]
Anyone with your key can use models billed to your funding source. Only enter it on a computer you control. See [security best practices](/keymaker/usage/#security-best-practices).
:::

## What to expect

Your prompts and the document content Claude reads go to campusGenAI through KeyMaker, not to Anthropic. Anthropic still serves the add-in's interface itself.

The core features work: chatting about your document, and reading and editing cells, formulas, slides, and text. Some features from Anthropic's documentation aren't available when you connect through a gateway like KeyMaker:

- Working across apps, where one conversation spans Excel and PowerPoint
- Dictation
- The connector directory, for adding your own connectors
- Web search and code execution, depending on how your institution's KeyMaker routes requests

Large documents can use a lot of tokens, because Claude reads the content to answer questions. Keep an eye on your **API Budget** in the KeyMaker portal. See [Usage and Best Practices](/keymaker/usage/).

## Outlook

Claude for Outlook installs separately and needs one-time approval from your institution's Microsoft 365 administrator before it can read mail and calendar data. If your institution hasn't approved it, the Outlook add-in won't connect, even with a valid KeyMaker key. Ask your IT team whether it's available.

## Update or rotate your key

The add-in doesn't pick up a new key on its own. After you [rotate your key](/keymaker/rotating-your-key/):

1. Open the account menu in the Claude side panel and select **Logout**.
2. Connect again following [Connect the add-in to KeyMaker](#connect-the-add-in-to-keymaker), using the new key.

Do this in each app and on each computer where you connected.

## Troubleshooting

**401 Unauthorized or "Invalid token"**
- Confirm you copied the full key from the KeyMaker portal with no extra spaces or line breaks.
- Check that your sponsor's funding is active and your access hasn't been removed.
- If you recently rotated your key, log out of the add-in and connect again with the new one.

**404 Not found**
The Gateway URL has extra path segments. Use the **API Endpoint** value exactly as the KeyMaker portal shows it, without `/v1` or `/v1/messages` at the end.

**"Connection refused" or network error**
- Check that the Gateway URL matches the **API Endpoint** value exactly.
- If you're off-campus, make sure you can reach institutional services (some require a VPN).

**"No models available"**
Copy a Claude model name from **Available Models** in your KeyMaker portal and enter it manually when prompted.

**The add-in doesn't appear in the ribbon**
Close and reopen the Office app. If you installed it recently, or IT deployed it for you, it can take a while to show up. If it still doesn't appear, your institution may block Office Store add-ins (see [Install the add-in](#install-the-add-in)).

For anything else, see Anthropic's [troubleshooting guide for third-party platforms](https://claude.com/docs/office-agents/third-party-platforms#troubleshooting).

## Next steps

- [Usage and Best Practices](/keymaker/usage/): monitoring usage, cost awareness, and security

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
