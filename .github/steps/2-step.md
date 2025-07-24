## Step 2: Creating Custom Instructions

You want to make sure all your assignments follow the same pattern and structure so students have a consistent experience.

### 📖 Theory: File-Specific Custom Instructions

Custom instructions allow you to provide specific guidance to Copilot for different file types or directories. By creating instruction files in `.github/instructions/`, you can define rules that explain "how a task should be done" and apply to different parts of your project. This enables more granular control over how Copilot behaves.

Unlike repository-wide instructions, these targeted instructions use `applyTo` patterns to specify which files they affect, allowing you to have different standards for different parts of your codebase.

Learn more about custom instructions:

- [VS Code Copilot customization documentation](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions)
- [GitHub Awesome Copilot repository](https://github.com/github/awesome-copilot)

### ⌨️ Activity: Create Assignment-Specific Instructions

Now let's create targeted instructions specifically for assignment files to ensure they follow consistent structure and formatting.

1. Create a new file called `.github/instructions/assignments.instructions.md`

1. Add the following content to define assignment formatting standards:

   ```markdown
   ---
   applyTo: "assignments/**/*.md"
   ---

   # Assignment Markdown Structure Guidelines

   All assignment markdown files should follow these guidelines:

   ## 1. Template Usage

   - Assignment markdown files must follow the structure in `templates/assignment-template.md`.
   - The assignment must be created as a `README.md` file
   - Do not remove or skip required sections from the template.

   ## 2. Section Guidance

   - **Title**: Replace `[Assignment Title]` with a short, descriptive name (e.g., `Python Basics`, `Loops and Conditionals`, `Functions and Modules`).
   - **Objective**: Write 1-2 sentences summarizing what the student will learn or accomplish. Focus on the main skills or concepts.
   - **Tasks**: For each task:
     - Use a specific, action-oriented task name
     - In the Description, clearly state what the student must do.
     - In Requirements, use bullet points to list the expected outcomes or features. Be specific and measurable
     - Provide example input/output in code blocks if helpful.

   Do not include extra sections unless explicitly specified.
   ```

1. Save the file.

### ⌨️ Activity: Test the Assignment Instructions

1. Open the file `assignments/games-in-python/README.md` in VS Code to see an example assignment.

1. With the assignment file open, ask Copilot Chat in `Agent` mode to update the assignment:

   ```text
   Update this assignment file to follow the project standards and template structure
   ```

1. Observe how Copilot references your instruction files in its response - you should see the `.github/instructions/assignments.instructions.md` file listed in the references section.

<!-- TODO: Add screenshot -->
1. Apply the suggested changes that Copilot provides to update the assignment structure.

1. Commit and push your changes of the instruction files and the updated assignment to the `main` branch.

1. Wait for Mona to prepare the next step!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure you commited both files to `main` branch:
  - `.github/instructions/assignments.instructions.md`
  - `assignments/games-in-python/README.md`

</details>
