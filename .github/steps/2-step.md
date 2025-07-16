## Step 2: Creating Custom Instructions

Now that you have repository-wide instructions set up, you want different types of files to follow specific patterns and conventions based on their purpose and location in your project.

### 📖 Theory: Directory-Specific Custom Instructions

Custom instructions allow you to provide specific guidance to Copilot for different file types or directories. By creating instruction files in `.github/instructions/`, you can define rules that apply to different parts of your project. This enables more granular control over how Copilot behaves.

Each instruction file can target specific patterns using the `applyTo` property in the frontmatter. For example, you might have different instructions for Python files versus JavaScript files, or different rules for test files versus production code.

> [!IMPORTANT]
> Directory-specific instructions take precedence over repository-wide instructions, allowing you to create specialized behavior for different parts of your codebase.

**Learn more:**

- [Custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions)
- [Awesome Copilot Examples](https://github.com/github/awesome-copilot)

### ⌨️ Activity: Create Directory-Specific Instructions

1. Create a new directory `.github/instructions/` if it doesn't already exist
1. Create a file named `python-homework.instructions.md` in the instructions directory
1. Add frontmatter to specify which files this applies to (e.g., Python files in homework directories)
1. Include specific guidelines for generating educational Python code
1. Test your instructions by asking Copilot to help with a Python file

> [!TIP]
> Use the `applyTo` property in your frontmatter to target specific file patterns like `homework/**/*.py` for Python homework files.

<details>
<summary>Need help with instruction file format? 🤷</summary>

Your instruction file should start with frontmatter like:

```yaml
---
applyTo: "homework/**/*.py"
---
```

Then include specific guidelines for how code should be generated for those files.

</details>
