## Step 2: Creating Custom Instructions

You want to make sure all your assignments follow the same pattern and structure so students have a consistent experience.

### 📖 Theory: File-Specific Custom Instructions

Custom instructions allow you to provide specific guidance to Copilot for different file types or directories. By creating instruction files in `.github/instructions/`, you can define rules that explain "how a task should be done" and apply to different parts of your project. This enables more granular control over how Copilot behaves.

Unlike repository-wide instructions, these targeted instructions use `applyTo` patterns to specify which files they affect, allowing you to have different standards for different parts of your codebase.

Learn more about custom instructions:

- [VS Code Copilot customization documentation](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions)
- [GitHub Awesome Copilot repository](https://github.com/github/awesome-copilot)

### ⌨️ Activity: Create Assignment-Specific Instructions

1. Create a new file called `.github/instructions/assignments.instructions.md`
1. Add the `applyTo` pattern to target assignment markdown files: `assignments/**/*.md`
1. Define rules for assignment markdown structure and formatting standards based on your project needs

### ⌨️ Activity: Test the Instructions

1. Navigate to an assignment that doesn't follow proper standards (try `assignments/games-in-python/README.md`)
1. Use Copilot Chat to ask: "Review this assignment and fix it to match the project standards"
1. Observe how Copilot references your instruction files in its response and applies the formatting rules

<details>
<summary>Having trouble? 🤷</summary><br/>

- The `applyTo` pattern should use glob syntax to match files: `assignments/**/*.md`
- Include specific rules about markdown structure, required sections, and formatting standards
- Test with existing assignments to see how the instructions are applied
- The instructions should reference the template structure if you have assignment templates

</details>
