# Logistics

<!-- Important Context, critical dates, related releases, other special notes, etc. -->

- **Exercise Title:** Customize Your GitHub Copilot Experience
- **Repo URL:** https://github.com/skills/customize-your-github-copilot-experience
- **Experience Level**: Beginner
- **Recommend Grouping**: Take flight with GitHub Copilot

### Relationships to other exercises

- **Previous Exercise:** Getting Started with GitHub Copilot

---

# Outline

## Story Plot

You're an IT teacher (Mr. Johnson) at Mergington High School who frequently creates homework assignments, coding exercises for your students to complete and share them on your static website. You want to customize Copilot to automatically follow your patterns to quickly generate consistent, high-quality homework assignments.

## README

**Title:** Customize Your GitHub Copilot Experience

Learn how to customize GitHub Copilot to work better for your team and projects. This exercise will teach you how to set up custom instructions, prompts, and chat modes to make Copilot more effective for your specific use cases.

### Overview

1. Set up repository-wide custom instructions to ensure consistent code generation
1. Create targeted custom instructions for specific file types and directories
1. Build reusable prompt templates for common tasks like homework assignments
1. Configure custom chat modes for specialized workflows

### What you will build

You'll create a customized Copilot setup with instructions, prompts, and chat modes. By the end, you'll have a system that can automatically generate consistent pieces of code following your project standards.

### Prerequisites

- Basic understanding of GitHub and VS Code
- Completed "Getting Started with GitHub Copilot" exercise

## Step 1 - Setting Up Copilot Instructions

### Story

You, Mr Johnson want to establish general high level standards for AI assistants to follow whenever working on your homework assignment project for the class of Mergington High School

### Theory

Repository custom instructions allow you to provide Copilot with context about your project standards. By creating a `.github/copilot-instructions.md` file, you can ensure that Copilot's suggestions consistently follow your teaching conventions and help generate assignments that meet your pedagogical goals.

### References

- https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot
- https://github.com/github/awesome-copilot

### Activity: Setup Development Environment

1. Start the codespace
1. Explore the website structure and existing assignments

### Activity: Create Repository Copilot Instructions

1. Create Copilot Instructions `.github/copilot-instructions.md`
1. Add general guidelines and coding standards to the instructions file
1. Test the instructions prompting Copilot about a file.

### Transition

<!--
What will be monitored about the user's progress to trigger a GitHub Actions workflow.

The workflow's steps will check the learner's work, such as checking file content, commit history, an active URL, etc. and if all pass, the next learning step will be shared.
-->

- **Actions Trigger:** [`push`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#push)
- **Grading-Check:** Verify `.github/copilot-instructions.md` file exists with [file-exists](https://github.com/skills/exercise-toolkit/tree/main/actions/file-exists) action. Check for a keyphrase with [action-keyphrase-checker](https://github.com/skills/action-keyphrase-checker) action

## Step 2 - Creating Custom Instructions

### Story

You want to make sure all your assignments follow the same pattern and structure so students have a consistent experience.

### Theory

Custom instructions allow you to provide specific guidance to Copilot for different file types or directories. By creating instruction files in `.github/instructions/`, you can define rules that explain "how a task should be done" and apply to different parts of your project. This enables more granular control over how Copilot behaves.

### References

- https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions
- https://github.com/github/awesome-copilot

### Activity: Create Assignment-Specific Instructions

1. Create `.github/instructions/assignments.instructions.md` file with specific `applyTo` glob filters
1. Define rules for assignment markdown structure and formatting standards

### Activity: Test the Instructions

1. Use Copilot Chat on the games-in-python assignment that doesn't follow proper standards
1. Apply the provided prompt to adjust the assignment to match setup standards
1. Observe how the instruction files are used in the prompt response

### Transition

<!--
What will be monitored about the user's progress to trigger a GitHub Actions workflow.

The workflow's steps will check the learner's work, such as checking file content, commit history, an active URL, etc. and if all pass, the next learning step will be shared.
-->

- **Actions Trigger:** [`push`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#push)
- **Grading-Check:** Verify `.github/instructions/assignments.instructions.md` exists and the `applyTo` is setup correctly

## Step 3 - Building Reusable Prompts

### Story

Creating homework assignments is something you do quite often, so you want to have a reusable prompt to make the process faster and more consistent.

### Theory

Prompt files in VS Code allow you to save reusable prompts in Markdown files (`*.prompt.md`) that can be accessed in Copilot Chat. While instructions explain how tasks should be done, prompts describe "what should be done." Prompt files can take advantage of instruction files to reuse common guidelines and have task-specific instructions included in the prompt.

### References

- https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-files-experimental
- https://github.com/github/awesome-copilot

### Activity: Create Homework Assignment Prompt

1. Build a homework assignment prompt file
1. Generate an assignment using the prompt file

### Transition

<!--
What will be monitored about the user's progress to trigger a GitHub Actions workflow.

The workflow's steps will check the learner's work, such as checking file content, commit history, an active URL, etc. and if all pass, the next learning step will be shared.
-->

- **Actions Trigger:** [`push`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#push)
- **Grading-Check:** Verify `.github/prompts/new-assignment.prompt.md` exists and an assignment was created

## Step 4 - Setting Up Custom Chat Modes

### Story

You are running out of ideas so you want to create a specialized chat mode for planning future homework assignments.

### Theory

Creating custom chat modes to define how chat operates, which tools it can use, and how it interacts with the codebase.

### References

- https://code.visualstudio.com/docs/copilot/copilot-customization#_chat-modes-experimental

### Activity: Configure Assignment Planning Chat Mode

1. Configure a custom chat mode for assignment planning
1. Define the tools and behavior for the chat mode

### Activity: Test the Chat Mode

1. Use the chat mode to plan your next assignment
1. Observe how the chat mode operates differently from regular Copilot Chat

### Transition

<!--
What will be monitored about the user's progress to trigger a GitHub Actions workflow.

The workflow's steps will check the learner's work, such as checking file content, commit history, an active URL, etc. and if all pass, the next learning step will be shared.
-->

- **Actions Trigger:** [`push`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#push)
- **Grading-Check:** Verify `.github/chatmodes/homework-brainstorming.chatmode.md` exists

## Review

You've successfully customized GitHub Copilot to work specifically for your teaching needs at Mergington High School. This exercise demonstrated how to tailor Copilot's behavior to match specific project requirements and workflows.

- Set up repository-wide instructions to ensure consistent code generation
- Create targeted custom instructions for specific file types and directories
- Build reusable prompt templates for common tasks like homework assignments
- Configure custom chat modes for specialized workflows

### What's next?

- Integrate MCP with Copilot
- Modernize Legacy Code
