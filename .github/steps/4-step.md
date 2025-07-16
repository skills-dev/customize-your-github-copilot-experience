## Step 4: Setting Up Custom Chat Modes

Excellent work! You now have comprehensive customization set up. For the final step, you want to create a specialized chat mode for planning educational assignments that brings together all your customizations.

### 📖 Theory: Custom Chat Modes for Specialized Workflows

Custom chat modes allow you to define how chat operates, which tools it can use, and how it interacts with the codebase. By creating a custom chat mode, you can establish specialized workflows that combine your instructions, prompts, and specific tools for particular tasks.

Chat modes provide a way to create focused, context-aware conversations with Copilot that understand your specific domain and requirements. This is particularly powerful for educational content creation where you need consistent, pedagogically sound outputs.

> [!WARNING]
> Custom chat modes are experimental features in VS Code and may require specific extension versions to work properly.

**Learn more:**

- [Chat modes in VS Code](https://code.visualstudio.com/docs/copilot/copilot-customization#_chat-modes-experimental)

### ⌨️ Activity: Configure Assignment Planning Chat Mode

1. Create a new directory `.github/chatmodes/` if it doesn't already exist
1. Create a file named `assignment-planner.chatmode.md` in the chatmodes directory
1. Configure the chat mode to focus on educational assignment planning
1. Include references to your custom instructions and prompt templates
1. Test the chat mode by using it to plan a comprehensive homework assignment

> [!TIP]
> Your chat mode should integrate all the customizations you've created: repository instructions, directory-specific instructions, and reusable prompts.

<details>
<summary>Need help with chat mode configuration? 🤷</summary>

Your chat mode file should define:

- The purpose and scope of the chat mode
- Which tools and capabilities should be available
- How it should reference your existing customizations
- Specific behaviors for educational content planning

</details>
