---
title: Python API Access
description: Call campusGenAI models from Python through KeyMaker using the OpenAI-compatible SDK and your API key.
---

KeyMaker is OpenAI-compatible, so you can call campusGenAI's models from Python with the official [`openai`](https://pypi.org/project/openai/) SDK — just point it at the KeyMaker base URL and authenticate with your API key. This is the foundation for research pipelines, batch processing, and custom applications.

:::note[Which KeyMaker URL do I use?]
The examples below show the **UMass Amherst** URL, `https://thekeymaker.umass.edu`. If you were onboarded to the **Demo** deployment, use `https://keymaker.demo.campusgenai.org` everywhere it appears instead. Not sure which deployment you're on? Ask your sponsor or your institution's platform admin.
:::

## Prerequisites

- Python 3.8 or newer (`python --version`)
- A valid KeyMaker API key from your sponsor — see [Getting Started](/keymaker/getting-started/)

## Install the SDK

```bash
pip install openai
```

KeyMaker is compatible with the OpenAI SDK because the underlying proxy ([LiteLLM](https://docs.litellm.ai/docs/proxy/user_keys)) speaks the OpenAI API format. No campusGenAI-specific package is required.

## Save your API key

Store your KeyMaker key as an environment variable rather than hardcoding it into your scripts or notebooks — that keeps it out of files you might share or commit.

**macOS / Linux:**

```bash
echo 'export KEYMAKER_API_KEY="YOUR_KEY_HERE"' >> ~/.zshrc && source ~/.zshrc
```

:::note
This command is for the **zsh** shell (the default on macOS). If you use **bash**, replace `~/.zshrc` with `~/.bashrc`.
:::

**Windows (PowerShell):**

```powershell
[Environment]::SetEnvironmentVariable("KEYMAKER_API_KEY", "YOUR_KEY_HERE", "User")
```

Restart your terminal afterward so the variable is available to Python.

:::caution[Treat your key like a password]
Anyone with your key can use models billed to your funding source. Never share it or commit it to a repository. See [security best practices](/keymaker/usage/#security-best-practices).
:::

## Create the client

Point the OpenAI client at the KeyMaker base URL and read your key from the environment:

```python
import os
import openai

client = openai.OpenAI(
    api_key=os.environ["KEYMAKER_API_KEY"],
    base_url="https://thekeymaker.umass.edu/v1",
)
```

On the **Demo** deployment, use `https://keymaker.demo.campusgenai.org/v1` instead.

:::tip[Working in a notebook?]
If your environment doesn't expose `KEYMAKER_API_KEY`, you can pass the key directly to `api_key=` instead — but delete it before saving or sharing the notebook so your key isn't stored in the file.
:::

## See available models

List the models your KeyMaker account can use:

```python
models = client.models.list()
print("Available models:")
for model in models.data:
    print(f"- {model.id}")
```

Make note of the model name you want to use (for example, `claude-opus-4-8`). See the [Model Comparison](/models/model-comparison/) page for what each model is best at.

## Send your first request

```python
response = client.chat.completions.create(
    model="claude-opus-4-8",
    messages=[
        {"role": "user", "content": "This is a test request, write a short poem."},
    ],
    max_tokens=50,
)

print(response.choices[0].message.content)
```

If you see the model's reply printed, your setup is working — all requests now route through KeyMaker, using the models, permissions, and usage controls of the KeyMaker platform.

## Inspect token usage

Every response carries a `usage` object showing how many tokens the request consumed — useful for tracking cost against your funding source:

```python
print(response.usage)
# CompletionUsage(completion_tokens=50, prompt_tokens=17, total_tokens=67, ...)
```

## Integrate into your application

For real use, create the client once and wrap requests in a function you can call throughout your code. Reading the key from the environment means the same function works in a script, a notebook, or a deployed service without changes.

```python
import os
import openai

client = openai.OpenAI(
    api_key=os.environ["KEYMAKER_API_KEY"],
    base_url="https://thekeymaker.umass.edu/v1",
)

def ask(prompt, model="claude-opus-4-8"):
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content

# Reuse it across your application
for topic in ["photosynthesis", "tariffs", "tectonic plates"]:
    print(ask(f"Explain {topic} in one sentence."))
```

On the **Demo** deployment, use `https://keymaker.demo.campusgenai.org/v1` instead.

This is the same call you made above, factored so the client is configured in one place and reused — the pattern behind batch processing and research pipelines.

## Troubleshooting

**Authentication errors**
Confirm your key is available to Python:

```python
import os
print(os.environ.get("KEYMAKER_API_KEY"))
```

If it prints `None`, the variable isn't set in this environment — re-run the [Save your API key](#save-your-api-key) step and restart your terminal (or your notebook kernel). If the key is present but still rejected, verify it's correct, hasn't expired or been revoked, and re-copy it from the KeyMaker portal if needed.

**Model not found**
List the models available to your account (the snippet above) and update the `model` value to match exactly.

**Connection or base-URL errors**
Confirm `base_url` is exactly your deployment's URL — `https://thekeymaker.umass.edu/v1` for UMass Amherst, or `https://keymaker.demo.campusgenai.org/v1` for Demo — including the `/v1` suffix.

:::note
Available models and provider settings may change over time. If something stops working, re-check the [Model Comparison](/models/model-comparison/) page and your client configuration before reaching out.
:::

## Next steps

- [Usage and Best Practices](/keymaker/usage/) — monitoring usage, cost awareness, and security

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
