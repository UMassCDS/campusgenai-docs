---
title: Claude Code Setup
description: Configure Claude Code, Anthropic's CLI coding agent, to use campusGenAI models through KeyMaker.
---

[Claude Code](https://www.anthropic.com/claude-code) is Anthropic's command-line coding agent. This page walks you through pointing it at KeyMaker so it runs on campusGenAI's models, billed to your sponsor's funding.

:::note[Find your KeyMaker URL]
Each institution's deployment has its own KeyMaker URL. Find yours in the **KeyMaker portal in campusGenAI** (the **key icon** in the left side menu), in the **API Endpoint** box. If you belong to more than one team, select the team's card first: each team has its own key. Use that value everywhere these instructions show `YOUR_KEYMAKER_URL`.
:::

## Prerequisites

- Terminal access (macOS, Linux, or Windows PowerShell)
- A valid KeyMaker API key from your sponsor — see [Getting Started](/keymaker/getting-started/)

You don't need a Claude subscription or an Anthropic account. KeyMaker takes their place.

## Install Claude Code

**macOS or Linux:**

1. Open a new terminal and install Claude Code:

   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```

2. Add Claude Code to your path:

   ```bash
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
   ```

   :::note
   This command is for the **zsh** shell (the default on macOS). If you use **bash**, replace `~/.zshrc` with `~/.bashrc`.
   :::

**Windows (PowerShell):**

1. Open **PowerShell**. (Your prompt should start with `PS C:\`. If it starts with just `C:\`, you're in Command Prompt. Type `powershell` and press `Enter` to switch.)

2. Install Claude Code:

   ```powershell
   irm https://claude.ai/install.ps1 | iex
   ```

   The installer shows no progress while it downloads. Wait for the prompt to return.

3. Close PowerShell and open a new window so it picks up the updated path.

:::tip[Install Git for Windows]
[Git for Windows](https://git-scm.com/downloads/win) is recommended. Without it, Claude Code still works but runs commands through PowerShell instead of Bash.
:::

**Then, on any platform**, confirm the installation:

```bash
claude --version
```

If you see a version number followed by `(Claude Code)`, the installation was successful. For other install methods (Homebrew, WinGet, Linux package managers), see [Anthropic's Claude Code quickstart](https://code.claude.com/docs/en/quickstart).

## Connect Claude Code to KeyMaker

Claude Code reads its configuration from a `settings.json` file in a `.claude` folder in your home directory:

- **macOS / Linux:** `~/.claude/settings.json`
- **Windows:** `%USERPROFILE%\.claude\settings.json` (for example, `C:\Users\yourname\.claude\settings.json`)

1. Create the folder and open the file in a text editor.

   **macOS / Linux:**

   ```bash
   mkdir -p ~/.claude && nano ~/.claude/settings.json
   ```

   **Windows (PowerShell):**

   ```powershell
   New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude"
   notepad "$env:USERPROFILE\.claude\settings.json"
   ```

   If Notepad asks whether to create a new file, choose **Yes**.

2. Add the configuration below. Replace `YOUR_KEY_HERE` with your actual KeyMaker API key, and `YOUR_KEYMAKER_URL` with the **API Endpoint** value from your KeyMaker portal:

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

   **macOS / Linux:**

   ```bash
   echo $KEYMAKER_API_KEY
   ```

   **Windows (PowerShell):**

   ```powershell
   echo $env:KEYMAKER_API_KEY
   ```

   It's the same KeyMaker key. Only the variable name differs (Claude Code uses `ANTHROPIC_AUTH_TOKEN`).
   :::

3. Save the file. In `nano`, press `Ctrl + O` then `Enter`, and exit with `Ctrl + X`. In Notepad, press `Ctrl + S`.

4. Start Claude Code by typing `claude` in the terminal:

   ```bash
   claude
   ```

   Claude Code shouldn't ask you to log in. If it shows a login screen, it isn't reading your `settings.json`. See [Troubleshooting](#troubleshooting).

:::caution[Keep your key private]
Your `settings.json` now contains your API key. Don't commit it to a repository or share it. See [security best practices](/keymaker/usage/#security-best-practices).
:::

## Troubleshooting

**`claude: command not found` (macOS / Linux)**
The install directory isn't on your path. Re-run the path step, then close and reopen your terminal. Confirm the binary exists with `ls ~/.local/bin/claude`. If you use bash rather than zsh, make sure you edited `~/.bashrc`.

**`'claude' is not recognized` (Windows)**
Close PowerShell and open a new window. If that doesn't fix it, the install directory isn't on your path. Follow Anthropic's [Fix your PATH](https://code.claude.com/docs/en/troubleshoot-install#command-not-found-claude-after-installation) instructions.

**`'irm' is not recognized` or `The token '&&' is not a valid statement separator` (Windows)**
You're in the wrong shell. `irm` only works in PowerShell, not Command Prompt. Open PowerShell and run the install command again.

**Claude Code asks you to log in**
- Confirm the file is named exactly `settings.json` and is inside the `.claude` folder in your home directory. On Windows, make sure Notepad didn't save it as `settings.json.txt`. In File Explorer, turn on **View → Show → File name extensions** to check.
- Confirm the file is valid JSON (see below).

**Invalid key / authentication errors**
- Confirm you copied the full key from the KeyMaker portal with no extra spaces or line breaks.
- Make sure the key is set as `ANTHROPIC_AUTH_TOKEN` (not `ANTHROPIC_API_KEY`) in `settings.json`.
- Check that your sponsor's funding is active and your access hasn't been removed.

**Connection or base URL errors**
- Verify `ANTHROPIC_BASE_URL` matches the **API Endpoint** value in your KeyMaker portal exactly, with no trailing slash.
- Confirm your `settings.json` is valid JSON. A missing comma or brace will prevent it from loading. Paste it into a JSON validator if unsure.
- If you're off-campus, make sure you can reach institutional services (some require a VPN).

## Next steps

- [Usage and Best Practices](/keymaker/usage/): monitoring usage, cost awareness, and security

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
