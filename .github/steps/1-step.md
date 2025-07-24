## Step 1: Setting Up Copilot Instructions

You're Mr. Johnson, an IT teacher at Mergington High School who creates homework assignments and coding exercises for students. You maintain a static website to share these assignments and want to establish general standards for AI assistants to ensure consistent code quality and project structure.

You've heard Copilot Instructions can help with that!

<!-- TODO: Add website screenshot in a details section -->

### 📖 Theory: Repository Custom Instructions

Repository custom instructions let you provide Copilot with repository-specific guidance and preferences that help it understand your project context and standards. By creating a `.github/copilot-instructions.md` file, you can ensure that Copilot's suggestions consistently follow your project conventions and coding standards.

The complete set of instructions will be automatically added to all requests that you submit to Copilot Chat in your repository.

> [!TIP] Writing Effective Instructions
> Your instructions should be short, self-contained statements that provide Copilot with relevant information. Consider including:
>
> - An overview of the project's purpose and goals
> - The folder structure and important directories
> - Coding standards and conventions (naming, formatting, best practices)
> - Specific tools, libraries, or frameworks used in the project
>
> See [GitHub Docs: Add repository instructions](https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot) for more information.

### ⌨️ Activity: Explore the Educational Website Project

To work with custom instructions, let's first set up our development environment and explore the project structure.

1. Right-click the below button to open the **Create Codespace** page in a new tab. Use the default configuration.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

1. Confirm the **Repository** field is your copy of the exercise, not the original, then click the green **Create Codespace** button.

   - ✅ Your copy: `/{{full_repo_name}}`
   - ❌ Original: `/skills/customize-your-github-copilot-experience`

1. Wait a moment for Visual Studio Code to load in your browser.

1. Explore the project structure:

   - Browse the `website/` folder to see the static website structure
   - Look at the `assignments/` folder to understand the existing assignment formats

1. Right-click on `website/index.html` and select **Show Preview** to see the website in action. Keep this preview tab open as we'll be making edits to the website throughout the exercise and you can see the updates live.

### ⌨️ Activity: Create Repository Copilot Instructions

1. Create a new file called `.github/copilot-instructions.md`
1. Add general guidelines and coding standards to the instructions file that describe this project
1. Test the instructions by asking Copilot Chat about a file and observe how it uses your instructions

<details>
<summary>Having trouble? 🤷</summary><br/>

- The `.github/copilot-instructions.md` file should be at the root of the `.github` folder
- Include information about the project structure, educational standards, and any coding conventions
- You can reference the existing content structure to understand what guidelines would be helpful

</details>
