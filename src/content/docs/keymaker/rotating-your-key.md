---
title: Rotating or Replacing Your Key
description: How to swap a KeyMaker API key for a new one — get the new key, update it everywhere it's configured, verify it works, and retire the old one.
---

Rotating your key means replacing the key you're using now with a new one and retiring the old one. Do this periodically as good hygiene, and **immediately** if you think your key has been exposed — committed to a repository, pasted into a shared document, or captured in a log or screenshot.

The process has three parts: regenerate your key in the portal, update it everywhere the old one was saved, then verify the new one works.

:::caution[If you suspect your key was exposed]
Treat it as compromised. Anyone with your key can use models billed to your sponsor's funding. Get a new key and retire the old one right away, then update your tools — don't wait for a scheduled rotation.
:::

:::note[Your KeyMaker URL doesn't change]
Rotating a key replaces the key only — your deployment's base URL stays the same, so leave it as it already is in your configuration. If you need to check it, it's in the **API Endpoint** box of the KeyMaker portal, on the same screen as your key. The examples below show it as `YOUR_KEYMAKER_URL`.
:::

## 1. Regenerate your key

Your key lives in the **KeyMaker portal in campusGenAI**:

1. Click your **profile picture** in the top corner.
2. Select **KeyMaker**.
3. Find your API key — it's shown masked (for example, `sk-...8yeg`) — and click **Regenerate Key** below it.

Regenerating issues a **new** key and retires the old one, so your previous key stops working immediately. Copy the new key somewhere safe for the next few steps.

:::caution[Update your tools right after regenerating]
The moment you regenerate, any tool still holding the old key will start failing. Have a few minutes to update your configuration (Step 2) before you regenerate, so you're not caught mid-task with a dead key.
:::

## 2. Update the key everywhere it's configured

A rotated key only works once you've updated it **everywhere you saved the old one**. Any tool still holding the old key will start failing with authentication errors. Update each place you set it up:

### Claude Code

Your key is stored in `~/.claude/settings.json` as `ANTHROPIC_AUTH_TOKEN`.

1. Open the file in your text editor:

   ```bash
   nano ~/.claude/settings.json
   ```

2. Replace the old key value with your new key, leaving `ANTHROPIC_BASE_URL` exactly as it already is:

   ```json
   {
     "env": {
       "ANTHROPIC_AUTH_TOKEN": "YOUR_NEW_KEY_HERE",
       "ANTHROPIC_BASE_URL": "YOUR_KEYMAKER_URL"
     }
   }
   ```

3. Save the file. In `nano`, that's `Ctrl + O` then `Enter`, and exit with `Ctrl + X`.

The next time you start `claude`, it picks up the new key. See [Claude Code Setup](/keymaker/claude-code/) if you need the full configuration.

### Codex and Python (the `KEYMAKER_API_KEY` environment variable)

Codex and the Python SDK both read your key from the `KEYMAKER_API_KEY` environment variable. Update it in one place and both pick up the change.

**macOS / Linux:**

Your key was added to your shell startup file (`~/.zshrc`, or `~/.bashrc` on bash) as an `export` line. **Edit that existing line** rather than appending a new one — appending a second `export KEYMAKER_API_KEY=...` leaves the old value in the file and makes the result depend on ordering.

1. Open your shell startup file:

   ```bash
   nano ~/.zshrc
   ```

2. Find the line that begins with `export KEYMAKER_API_KEY=` and replace the value with your new key:

   ```bash
   export KEYMAKER_API_KEY="YOUR_NEW_KEY_HERE"
   ```

3. Save, then reload the file so the change takes effect in your current terminal:

   ```bash
   source ~/.zshrc
   ```

   :::note
   These commands are for the **zsh** shell (the default on macOS). If you use **bash**, replace `~/.zshrc` with `~/.bashrc` in both commands.
   :::

4. Confirm the new value is loaded:

   ```bash
   echo $KEYMAKER_API_KEY
   ```

**Windows (PowerShell):**

Re-run the same command you used during setup — setting the variable again overwrites the old value:

```powershell
[Environment]::SetEnvironmentVariable("KEYMAKER_API_KEY", "YOUR_NEW_KEY_HERE", "User")
```

Restart PowerShell, then verify:

```powershell
echo $env:KEYMAKER_API_KEY
```

:::note
Codex itself needs no changes — it references `KEYMAKER_API_KEY` through the `env_key` setting in `~/.codex/config.toml`, so updating the variable is enough. Restart any running `codex` session to pick up the new value.
:::

### Anywhere else you used the key

If you saved the key outside these tools, update it there too:

- **Hardcoded keys in scripts or notebooks** — replace the value, or better, switch to reading from `KEYMAKER_API_KEY` so future rotations are a one-line change. See [Python API Access](/keymaker/python/).
- **A secrets manager or `.env` file** used by an application or pipeline.
- **Other machines or servers** where you configured the same key.

## 3. Verify the new key works

Test the new key directly before relying on it. This lists the models your account can use and only succeeds if the key is valid:

```bash
curl YOUR_KEYMAKER_URL/v1/models \
  -H "Authorization: Bearer $KEYMAKER_API_KEY"
```

For Claude Code, just start `claude` and send a prompt; for Python, run a small request as shown on the [Python API Access](/keymaker/python/) page. If any tool still returns an authentication error, it's likely still holding the old key — recheck that tool's configuration.

## 4. Confirm the old key is retired

Regenerating in the portal replaces your old key automatically — it can no longer be used or bill against your sponsor's funding. There's no separate revoke step.

If your new key was issued another way (for example, a platform admin or sponsor set it up for you rather than you clicking **Regenerate Key**), confirm with them that the old key has been deactivated — especially if you're rotating because it may have been exposed.

## Troubleshooting

**A tool still fails after rotating**
It's almost always still using the old key. Recheck that specific config: `~/.claude/settings.json` for Claude Code, or `echo $KEYMAKER_API_KEY` for Codex and Python.

**`echo $KEYMAKER_API_KEY` still shows the old value**
You edited the file but didn't reload it, or there's a duplicate `export KEYMAKER_API_KEY=` line further down that wins. Open the file, remove any duplicate lines, save, then run `source ~/.zshrc` (or `~/.bashrc`), or open a fresh terminal.

**The new key is rejected too**
Re-copy it from the KeyMaker portal — check for stray spaces or line breaks — and confirm your sponsor's funding is active and your access hasn't been removed.

## Next steps

- [Usage and Best Practices](/keymaker/usage/) — monitoring usage, cost awareness, and security best practices

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
