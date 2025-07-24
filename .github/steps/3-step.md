## Step 3: Building Reusable Prompts

Now that you've established instructions for assignments, you want to streamline creating new assignments.

Creating assignments is a repetetive task and involves multiple steps.
- Creating the assignment
- Updating the website configuration to load the new assignment

It's a perfect scenario to have a reusable prompt just for this!



### 📖 Theory: Prompt Files

Prompt files (`.prompt.md`) are reusable prompts most useful for common tasks in your project.

Prompt files can take advantage of instruction files to reuse common guidelines and have task-specific instructions included in the prompt.

Prompt files can be selected with slash commands (`/`) in Copilot Chat, making complex workflows as simple as selecting from a menu.

> [!TIP] Prompts - focus on "WHAT"
> Prompt files describe the task to be performed (what should be done).
>
> Optionally, you can include task-specific guidelines about how the task should be performed, or you can reference custom instructions in the prompt file.
>
> See more in [VS Code Docs: Prompt Files](https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-files-experimental)

Visual Studio Code by default will look for `*.prompt.md` files in `.github/prompts/` directory but that is configurable with [VS Code Settings](vscode://settings/chat.promptFilesLocations).


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
