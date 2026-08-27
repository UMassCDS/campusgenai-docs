---
title: OpenAI Codex Setup
description: Configure the OpenAI Codex CLI to use campusGenAI models through KeyMaker, using a base-URL override and your API key.
---

[OpenAI Codex CLI](https://github.com/openai/codex) is OpenAI's command-line coding agent. Because KeyMaker is OpenAI-compatible, you can point Codex at KeyMaker and run it against campusGenAI's models — billed to your sponsor's funding — instead of a personal OpenAI account.

:::note[Which KeyMaker URL do I use?]
The examples below show the **UMass Amherst** URL, `https://thekeymaker.umass.edu`. If you were onboarded to the **Demo** deployment, use `https://keymaker.demo.campusgenai.org` everywhere it appears instead. Not sure which deployment you're on? Ask your sponsor or your institution's platform admin.
:::

## Prerequisites

- Terminal access (macOS, Linux, or Windows PowerShell)
- A valid KeyMaker API key from your sponsor — see [Getting Started](/keymaker/getting-started/)

You can check whether Codex is already installed:

```bash
codex --version
```

If you see a version number, skip to [Save your API key](#save-your-api-key).

## Install Codex CLI

**macOS or Linux:**

```bash
curl -fsSL https://chatgpt.com/codex/install.sh | sh
```

When prompted **Start Codex now?**, press `y`.

**Windows (PowerShell):**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://chatgpt.com/codex/install.ps1 | iex"
```

Then verify the installation on either platform:

```bash
codex --version
```

If you see a version number, the installation was successful.

## Save your API key

Store your KeyMaker key as an environment variable rather than putting it directly in a config file.

:::tip[Already set up Claude Code?]
If you configured [Claude Code](/keymaker/claude-code/) first, your key is already saved in `~/.claude/settings.json` as the `ANTHROPIC_AUTH_TOKEN` value. You can copy it from there:

```bash
cat ~/.claude/settings.json
```

It's the same KeyMaker key — only the variable name differs (Codex uses `KEYMAKER_API_KEY`).
:::

**macOS / Linux:**

```bash
echo 'export KEYMAKER_API_KEY="YOUR_KEY_HERE"' >> ~/.zshrc && source ~/.zshrc
```

:::note
This command is for the **zsh** shell (the default on macOS). If you use **bash**, replace `~/.zshrc` with `~/.bashrc`.
:::

Confirm it was saved:

```bash
echo $KEYMAKER_API_KEY
```

**Windows (PowerShell):**

```powershell
[Environment]::SetEnvironmentVariable("KEYMAKER_API_KEY", "YOUR_KEY_HERE", "User")
```

Restart PowerShell, then verify:

```powershell
echo $env:KEYMAKER_API_KEY
```

:::caution[Treat your key like a password]
Anyone with your key can use models billed to your funding source. Never share it or commit it to a repository. See [security best practices](/keymaker/usage/#security-best-practices).
:::

## See available models

List the models your KeyMaker account can use:

```bash
curl https://thekeymaker.umass.edu/v1/models \
  -H "Authorization: Bearer $KEYMAKER_API_KEY"
```

On the **Demo** deployment, use `https://keymaker.demo.campusgenai.org/v1/models` instead.

Make note of the model name you want to use (for example, `gpt5`).

## Configure Codex

1. Create the Codex configuration directory:

   ```bash
   mkdir -p ~/.codex
   ```

2. Open (or create) the configuration file:

   ```bash
   nano ~/.codex/config.toml
   ```

3. Add the following configuration, then save. Replace `gpt5` with any model from your available list if your team uses a different one:

   ```toml
   model_provider = "keymaker"
   model = "gpt5"
   model_reasoning_effort = "high"

   [model_providers.keymaker]
   name = "Keymaker"
   base_url = "https://thekeymaker.umass.edu/v1"
   env_key = "KEYMAKER_API_KEY"
   wire_api = "responses"
   ```

   On the **Demo** deployment, use `base_url = "https://keymaker.demo.campusgenai.org/v1"` instead.

   In `nano`, save with `Ctrl + O` then `Enter`, and exit with `Ctrl + X`. (The same shortcuts work on macOS, Linux, and Windows via WSL/Git Bash.)

4. Confirm the file was saved:

   ```bash
   cat ~/.codex/config.toml
   ```

## Verify the setup

Start Codex:

```bash
codex
```

Then enter a prompt to confirm it's routing through KeyMaker:

```
Say hello and tell me which model provider I am using.
```

If Codex responds successfully, your configuration is working — all Codex requests now route through KeyMaker, using the models, permissions, and usage controls of the KeyMaker platform.

## For existing Codex users

If you've previously logged into Codex with a ChatGPT or OpenAI account, log out so Codex uses the KeyMaker provider:

```bash
codex logout
```

If Codex still uses your old configuration after that, remove the config directory and reinstall:

```bash
rm -rf ~/.codex
```

Then reinstall Codex and repeat the setup from [Install Codex CLI](#install-codex-cli).

:::note
Most new users can skip this section. It's only needed if Codex keeps using a previous OpenAI configuration after you update `config.toml`.
:::

## Troubleshooting

**Authentication errors**
Confirm your key is available with `echo $KEYMAKER_API_KEY`, then test it directly:

```bash
curl https://thekeymaker.umass.edu/v1/models \
  -H "Authorization: Bearer $KEYMAKER_API_KEY"
```

On the **Demo** deployment, use `https://keymaker.demo.campusgenai.org/v1/models` instead.

If that fails, verify the key is correct, hasn't expired or been revoked, and re-copy it from the KeyMaker portal if needed.

**Model not found**
List the models available to your account (the `curl` command above) and update the `model` value in `~/.codex/config.toml` to match.

**Codex still uses OpenAI**
Run `codex logout`, restart your terminal, and try again. If it persists, `rm -rf ~/.codex`, reinstall Codex, and repeat the setup.

**Configuration file not found**
Create the directory and file manually: `mkdir -p ~/.codex` then `nano ~/.codex/config.toml`.

:::note
Available models and provider settings may change over time. If something stops working, re-check the [Model Comparison](/models/model-comparison/) page and your `config.toml` before reaching out.
:::

## Next steps

- [Usage and Best Practices](/keymaker/usage/) — monitoring usage, cost awareness, and security

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
