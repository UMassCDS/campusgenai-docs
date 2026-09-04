---
title: Claude Code Setup
description: Configure Claude Code, Anthropic's CLI coding agent, to use campusGenAI models through KeyMaker.
---

[Claude Code](https://www.anthropic.com/claude-code) is Anthropic's command-line coding agent. This page walks you through pointing it at KeyMaker so it runs on campusGenAI's models, billed to your sponsor's funding.

:::note[Find your KeyMaker URL]
Each institution's deployment has its own KeyMaker URL. Find yours in the **KeyMaker portal in campusGenAI** (profile picture → **KeyMaker**), in the **API Endpoint** box. Use that value everywhere these instructions show `YOUR_KEYMAKER_URL`.
:::

## Prerequisites

- Terminal access (macOS or Linux)
- A valid KeyMaker API key from your sponsor — see [Getting Started](/keymaker/getting-started/)

## Installation

1. Open a new terminal.

2. Install Claude Code:

   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```

3. Add Claude Code to your path:

   ```bash
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
   ```

   :::note
   This command is for the **zsh** shell (the default on macOS). If you use **bash**, replace `~/.zshrc` with `~/.bashrc`.
   :::

4. Go to your home directory and locate (or create) the `~/.claude` folder:

   ```bash
   mkdir -p ~/.claude
   ```

5. Create a new file called `settings.json` inside `~/.claude`.

6. Open `settings.json` in your preferred text editor and add the configuration below. Replace `YOUR_KEY_HERE` with your actual KeyMaker API key, and `YOUR_KEYMAKER_URL` with the **API Endpoint** value from your KeyMaker portal:

   ```json
   {
     "env": {
       "ANTHROPIC_AUTH_TOKEN": "YOUR_KEY_HERE",
       "ANTHROPIC_BASE_URL": "YOUR_KEYMAKER_URL"
     }
   }
   ```

   :::tip[Already set up Codex?]
   If you configured [Codex](/keymaker/codex/) first, your key is already saved as the `KEYMAKER_API_KEY` environment variable. You can print it to copy into `ANTHROPIC_AUTH_TOKEN`:

   ```bash
   echo $KEYMAKER_API_KEY
   ```

   It's the same KeyMaker key — only the variable name differs (Claude Code uses `ANTHROPIC_AUTH_TOKEN`).
   :::

7. Save the file.

8. Start Claude Code by typing `claude` in the terminal:

   ```bash
   claude
   ```

:::caution[Keep your key private]
Your `settings.json` now contains your API key. Don't commit it to a repository or share it. See [security best practices](/keymaker/usage/#security-best-practices).
:::

## Troubleshooting

**`claude: command not found`**
The install directory isn't on your path. Re-run step 3, then close and reopen your terminal. Confirm the binary exists with `ls ~/.local/bin/claude`. If you use bash rather than zsh, make sure you edited `~/.bashrc`.

**Invalid key / authentication errors**
- Confirm you copied the full key from the KeyMaker portal with no extra spaces or line breaks.
- Make sure the key is set as `ANTHROPIC_AUTH_TOKEN` (not `ANTHROPIC_API_KEY`) in `settings.json`.
- Check that your sponsor's funding is active and your access hasn't been removed.

**Connection or base URL errors**
- Verify `ANTHROPIC_BASE_URL` matches the **API Endpoint** value in your KeyMaker portal exactly, with no trailing slash.
- Confirm your `settings.json` is valid JSON — a missing comma or brace will prevent it from loading. Paste it into a JSON validator if unsure.
- If you're off-campus, make sure you can reach institutional services (some require a VPN).

## Next steps

- [Usage and Best Practices](/keymaker/usage/) — monitoring usage, cost awareness, and security

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
