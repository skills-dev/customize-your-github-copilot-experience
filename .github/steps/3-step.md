## Step 3: Building Reusable Prompts

Now that you've established instructions for assignments, you want to streamline creating new assignments.

Creating assignments is a repetetive task and involves multiple steps.

- Creating the assignment
- Updating the website configuration to load the new assignment

It's a perfect scenario to have a reusable prompt just for this!

### 📖 Theory: Prompt Files

Prompt files (`*.prompt.md`) are reusable prompts most useful for common tasks in your project.

Prompt files can be selected with slash commands (`/`) in Copilot Chat, making complex workflows as simple as selecting from a menu.

You can reference other workspace files, prompt files, or instructions files by using Markdown links. Use relative paths to reference these files, and ensure that the paths are correct based on the location of the prompt file.

Visual Studio Code by default will look for `*.prompt.md` files in `.github/prompts/` directory but that is configurable with [VS Code Settings](vscode://settings/chat.promptFilesLocations).

> [!TIP]
> Use prompt files to define repeatable tasks and workflows.
>
> When writing prompts focus on **WHAT** needs to be done. You can reference instructions for the **HOW**.
>
> See more in [VS Code Docs: Prompt Files](https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-files-experimental)


### ⌨️ Activity: Create Assignment Prompt

Now let's create a reusable prompt that automates the entire assignment creation process. This is perfect for a prompt file because creating assignments involves multiple repetitive steps that follow the same pattern every time - exactly the kind of workflow that benefits from automation.

1. Create a new file called `.github/prompts/new-assignment.prompt.md`

1. Add the following content to create a comprehensive assignment generation prompt:

   ```markdown
   ---
   mode: agent
   description: Create a new programming homework assignment
   ---

   # Create New Programming Assignment

   Your goal is to generate a new homework assignment for the Mergington High School students.

   ## Step 1: Gather Assignment Information

   If not already provided by the user, ask what the assignment will be about.

   ## Step 2: Create Assignment Structure

   1. Create a new directory in the `assignments` folder with a unique name based on the assignment topic
   1. Create a new file in the directory named `README.md` with the structure from the [assignment-template.md](../../templates/assignment-template.md) file
   1. Fill out the assignment details in the README file
   1. (Optional) Add starter code or attachments if the assignment needs them - add these files to the same assignment folder

   ## Step 3: Update Website Configuration

   Update the assignments list in [config.json](../../config.json) website configuration file to include the new assignment. For the dueDate field, use the current date plus 7 days unless specified otherwise.
   ```

### ⌨️ Activity: Test the Assignment Prompt

1. Open Copilot Chat in VS Code and ensure you're in Agent mode.

1. Run your prompt by typing `/new-assignment` in the chat input. You can either:

   - Type just `/new-assignment` and Copilot will ask you what the assignment should be about
   - Or include the topic directly: `/new-assignment Building REST APIs with FastAPI framework`

   <details>
   <summary>💡 Assignment Topic Ideas</summary>

   ```text
   Python Text Processing - working with strings, file I/O, and text manipulation
   ```

   ```text
   Data Structures in Python - lists, dictionaries, sets, and tuples
   ```

   ```text
   Python Data Visualization - using matplotlib or plotly for charts and graphs
   ```

   ```text
   Building REST APIs with FastAPI framework
   ```

   ```text
   Statistics with Python - data analysis and statistical calculations using pandas and numpy
   ```

   </details>

1. Verify the new assignment appears correctly on the website preview.

   <details>
   <summary>Your assignment is missing? Check these items 🔍</summary>

   - Refresh the page
   - A new directory was created in `assignments/`
   - The `config.json` file was updated with the new assignment

   </details>

1. Review the generated assignment content to ensure it matches your established conventions.

1. Commit and push your changes:

   - The new prompt file: `.github/prompts/new-assignment.prompt.md`
   - The generated assignment directory and files
   - Updated `config.json` configuration

1. Wait for Mona to prepare the next step!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure the prompt file is in `.github/prompts/` directory with the `.prompt.md` extension

</details>
