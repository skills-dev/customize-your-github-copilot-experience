## Step 1: Setting Up Copilot Instructions

You're an IT teacher at Mergington High School who frequently creates homework assignments, coding exercises, and project templates for your students. You need to establish consistent coding standards for your students' homework assignments and ensure Copilot follows your teaching patterns.

### 📖 Theory: Repository Custom Instructions

Repository custom instructions allow you to provide Copilot with context about your project standards. By creating a `.github/copilot-instructions.md` file, you can ensure that Copilot's suggestions consistently follow your teaching conventions and help generate assignments that meet your pedagogical goals.

When you add custom instructions to your repository, GitHub Copilot will automatically apply these guidelines whenever generating code or suggestions within that repository. This ensures consistency across all work done in the project.

> [!TIP]
> Custom instructions work best when they're specific and actionable. Instead of saying "write good code," try "use descriptive variable names and include comments explaining the purpose of each function."

**Learn more:**

- [Adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot)
- [Awesome Copilot Examples](https://github.com/github/awesome-copilot)

### ⌨️ Activity: Setup Development Environment

1. Start the codespace by clicking the green "Code" button and selecting "Create codespace on main"
1. Wait for the codespace to fully load and verify that GitHub Copilot extensions are available
1. Browse through the repository structure to familiarize yourself with the existing code files

<details>
<summary>Having trouble with the codespace? 🤷</summary>

If your codespace doesn't start properly:

- Try refreshing the page and clicking "Create codespace" again
- Check that you have GitHub Copilot access enabled in your account settings
- Ensure you're signed in to GitHub with the correct account

</details>

### ⌨️ Activity: Create Repository Custom Instructions

1. Create a new file named `.github/copilot-instructions.md` in your repository
1. Add general guidelines and coding standards that reflect your teaching philosophy
1. Include instructions for creating educational content with clear structure and student-friendly code
1. Test the instructions by asking Copilot about one of the existing files in the repository

> [!NOTE]
> Your custom instructions should include guidance on code style, commenting standards, and educational best practices for student assignments.

<details>
<summary>Need help with custom instructions content? 🤷</summary>

Your `.github/copilot-instructions.md` file might include:

- Coding style preferences (indentation, naming conventions)
- Requirements for comments and documentation
- Educational context (this is for student learning)
- Specific patterns you want followed consistently

</details>
