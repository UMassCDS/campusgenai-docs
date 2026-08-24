---
title: How Prompts Are Processed
description: The path a prompt takes through campusGenAI — and where moderation, content filtering, and provider safety policies apply.
---

When you send a prompt in campusGenAI, it goes through the steps below. We're sharing this to help you understand where moderation or filtering might take place.

![Flow diagram of prompt processing in campusGenAI: the user submits a prompt, campusGenAI auto-moderation is currently disabled, the prompt is routed to Azure AI Foundry (default safety thresholds) or AWS Bedrock (guardrails off), tool-enabled models add a system prompt for web search and image generation, the provider evaluates the model's output, and campusGenAI displays the response.](/prompt-processing-flow.png)

## 1. Prompt submission

- Your message is captured by the campusGenAI platform.
- Built-in moderation is currently **disabled**, so your text is not filtered **at this stage**. Once the auto-moderation feature is re-enabled, we will update the filter information accordingly.

## 2. Model routing and safety layers

Once sent, your prompt goes through both the cloud platform's baseline safety checks **and** the safety policies of the specific model provider. Depending on the model or agent you choose, your prompt is forwarded to one of the following providers.

:::note[Your data is not used for training]
Though prompts are sent to one of the following model providers, your data is not used to train any of the models accessible from this platform, as stated in the following policies: [Azure OpenAI](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy?tabs=azure-portal), [Azure Foundry](https://www.microsoft.com/en-us/security/blog/2025/03/04/securing-generative-ai-models-on-azure-ai-foundry/), and [AWS Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html).
:::

:::tip
Read the description in the platform's model dropdown menu to see which cloud platform (Azure or AWS) a model is being accessed through.
:::

### Azure AI Foundry

1. campusGenAI sends your prompt to a model hosted through Azure AI Foundry.
2. It is first processed by Azure's built-in content filtering systems. Azure evaluates both the input prompt and the model's output against defined safety categories and severity thresholds. (Microsoft, [*Azure OpenAI Content Filtering*](https://learn.microsoft.com/azure/ai-services/openai/concepts/content-filter))
3. Currently, guardrails are configured using the default safety thresholds. Azure provides the ability to adjust these thresholds to be more or less restrictive. (Microsoft, [*Default Guardrail policies for Azure OpenAI*](https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/default-safety-policies))
4. Content that exceeds those thresholds may be blocked before it is returned, producing a 400 error:

   ![A content moderation error reading: Something went wrong. Here's the specific error message we encountered: An error occurred while processing the request: 400 The response was filtered due to the prompt triggering Azure OpenAI's content management policy. Please modify your prompt and retry.](/content-filter-error.png)

5. After platform-level filtering, the request is routed to the selected model (e.g., GPT models, Grok, DeepSeek models), which also operates under its own published usage and safety policies, and may refuse to generate responses that violate those policies. (For example, [*OpenAI Usage Policies*](https://openai.com/policies/usage-policies/)).

### AWS Bedrock

1. campusGenAI sends your prompt to a model hosted through Amazon Bedrock, which happens within the AWS service boundary where requests are authenticated, encrypted in transit, and processed within the AWS system before being routed to the selected foundation model.
2. Amazon Bedrock Guardrails provide additional controls that can evaluate both input prompts and model outputs against defined policies, such as content categories, denied topics, and others. (AWS, [*Amazon Bedrock Guardrails*](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html)). Currently, the Bedrock Guardrails are not configured.
3. The selected model provider (e.g., Anthropic Claude, Mistral, Llama) operates under its own published safety and acceptable use policies. (For example, [*Anthropic Usage Policy*](https://www.anthropic.com/legal/usage-policy)).

### Tools

Tools or plugins may include their own instructions. These instructions are added as a **system prompt** and sent to the AI model along with the user's request. In the platform's model selection menu, models marked with **web search, image generation, and document generation icons (🔍🖼️📄)** include an additional system prompt that instructs the AI how to use these tools.

The current system prompt:

```text
You are an AI assistant that supports four main tasks: chatting, web search,
file generation and image generation.

If the user is chatting or asking questions, respond naturally using your
language model capabilities.

If the user explicitly asks to search the internet (e.g., search online,
look it up on the web), use the web search tool to find accurate and
up-to-date information.

If the user requests an image or illustration, use the image_gen_oai tool.

If the user explicitly requests a file to be saved or generated, use the
document-generator. Ask for clarification if the description is vague.

Be helpful, concise, and friendly. Always follow the user's intent.

Note that today's date and time: {{current_datetime}}
```

#### Web search

Web search–enabled models and agents (🔍) do not all use the same search provider. Which one is used depends on the **model**, not on the cloud platform hosting it:

| Model | Search provider | Results governed by |
| --- | --- | --- |
| OpenAI (GPT) models | Bing | Microsoft's [Bing search terms of use](https://www.microsoft.com/en-us/bing/apis/grounding-legal), including Bing's own SafeSearch filtering |
| All other models | Google Search API | Google's [SafeSearch settings and search policies](https://safety.google/intl/en_ca/products/search/) |

In either case, the search query generated by the model is sent to the search provider and handled under that provider's terms. Results are returned to the model, which uses them to compose its response.

#### Image generation

- If using an image generation–enabled model or agent (🖼️), image requests are sent to OpenAI's GPT-Image-2 model, provided through Azure AI Foundry, when the model is prompted to generate an image.
- Image generation follows Azure's default safety thresholds.

#### Document generation

- If using a document generation–enabled model or agent (📄), file requests are handled by the `document-generator` MCP server when the model is prompted to save or generate a file.
- This MCP server runs inside your institution's campusGenAI environment. Document content is not sent to an external service, so no third-party content policies apply at this step.
- The model output used to build the document has already passed through the provider safety layers described above.

## 3. Model response

- The model returns a response.
- Azure and AWS Bedrock apply the same safety layers to outgoing responses.
- campusGenAI displays the result to you (and would apply moderation here as well, if it were enabled).

## Common questions

### Why might my prompt be rejected?

Even though campusGenAI's auto-moderation feature is off, Azure and Bedrock may still block prompts that violate their safety policies.

### Can I request unfiltered output?

Not currently. We rely on the platform providers' built-in safety measures as part of our compliance obligations.

---

## Need help?

- **Get help:** [Contact us](/get-help/)
- **About campusGenAI:** [Main site](https://campusgenai.org)

Your interface may look slightly different depending on your institution's deployment.
