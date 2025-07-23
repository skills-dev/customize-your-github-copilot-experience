## Step 3: Building Reusable Prompts

Creating homework assignments is something you do quite often, so you want to have a reusable prompt to make the process faster and more consistent.

### 📖 Theory: Prompt Files

Prompt files in VS Code allow you to save reusable prompts in Markdown files (`*.prompt.md`) that can be accessed in Copilot Chat. While instructions explain how tasks should be done, prompts describe "what should be done." Prompt files can take advantage of instruction files to reuse common guidelines and have task-specific instructions included in the prompt.

These prompt files appear in Copilot Chat's prompt suggestions, making it easy to run complex, multi-step workflows with a single command.

Learn more about prompt files:

- [VS Code prompt files documentation](https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-files-experimental)
- [GitHub Awesome Copilot repository](https://github.com/github/awesome-copilot)

### ⌨️ Activity: Create Homework Assignment Prompt

1. Create a new file called `.github/prompts/new-assignment.prompt.md`
1. Add frontmatter with `mode: agent` to make it an agentic prompt
1. Build a prompt that guides Copilot through creating new homework assignments step by step

### ⌨️ Activity: Generate an Assignment Using the Prompt

1. Open Copilot Chat in VS Code
1. Look for your prompt in the prompt suggestions (it should appear as "new-assignment")
1. Use the prompt to generate a new assignment on a topic of your choice
1. Observe how the prompt leverages your existing instructions and follows the established patterns

<details>
<summary>Having trouble? 🤷</summary><br/>

- Prompt files should be in the `.github/prompts/` directory
- Use `---` frontmatter at the top with `mode: agent` for agentic prompts
- The prompt should reference your templates and instruction files
- Include steps for creating the directory, README.md file, and updating the website configuration
- Test the prompt by running it through Copilot Chat

</details>
