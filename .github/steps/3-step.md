## Step 3: Building Reusable Prompts

Great! You now have custom instructions set up. Next, you want to create template prompts for generating homework assignments quickly and consistently.

### 📖 Theory: Prompt Files for Reusable Templates

Prompt files in VS Code allow you to save reusable prompts in Markdown files (`*.prompt.md`) that can be accessed in Copilot Chat. Prompt files can take advantage of instruction files to reuse common guidelines and have task-specific instructions included in the prompt.

When you create a prompt file, you can define specific parameters, instructions, and context that Copilot will use every time you invoke that prompt. This is particularly useful for repetitive tasks like creating homework assignments with consistent structure and requirements.

> [!NOTE]
> Prompt files are experimental in VS Code but provide powerful templating capabilities for common tasks.

**Learn more:**

- [Prompt files in VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-files-experimental)
- [Awesome Copilot Examples](https://github.com/github/awesome-copilot)

### ⌨️ Activity: Create Homework Assignment Prompt

1. Create a new directory `.github/prompts/` if it doesn't already exist
1. Create a file named `homework-assignment.prompt.md` in the prompts directory
1. Define a prompt template that generates consistent homework assignments with clear instructions, objectives, and grading criteria
1. Include parameters for customizing assignment difficulty, topic, and programming language
1. Test your prompt by using it to generate a sample homework assignment

> [!TIP]
> Your prompt file can reference your custom instructions to ensure generated assignments follow your established coding standards.

<details>
<summary>Need help with prompt file structure? 🤷</summary>

Your prompt file should include:

- Clear instructions for what type of assignment to generate
- Parameters for customization (difficulty, topic, language)
- References to your coding standards and instruction files
- Template structure for consistent output format

</details>
