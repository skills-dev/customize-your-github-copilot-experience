## Step 4: Setting Up Custom Chat Modes

You are running out of ideas so you want to create a specialized chat mode for planning future homework assignments.

### 📖 Theory: Custom Chat Modes

Custom chat modes allow you to define how chat operates, which tools it can use, and how it interacts with the codebase. Chat modes are specialized configurations that change Copilot Chat's behavior for specific workflows or tasks.

Unlike instructions and prompts, chat modes fundamentally alter how the chat interface behaves, including which tools are available, the response style, and the focus of the conversation.

Learn more about chat modes:

- [VS Code chat modes documentation](https://code.visualstudio.com/docs/copilot/copilot-customization#_chat-modes-experimental)

### ⌨️ Activity: Configure Assignment Planning Chat Mode

1. Create a new file called `.github/chatmodes/homework-brainstorming.chatmode.md`
1. Add frontmatter with description and specify which tools the chat mode can use
1. Define the behavior and response style for the chat mode focused on assignment planning

### ⌨️ Activity: Test the Chat Mode

1. Open Copilot Chat in VS Code
1. Type `@homework-brainstorming` to activate your custom chat mode
1. Ask it to help you plan your next assignment based on what's already in the repository
1. Observe how the chat mode operates differently from regular Copilot Chat

<details>
<summary>Having trouble? 🤷</summary><br/>

- Chat mode files should be in the `.github/chatmodes/` directory
- Use frontmatter to define the description and available tools
- The chat mode should focus on ideation and brainstorming, not detailed implementation
- Test the mode by using `@homework-brainstorming` in Copilot Chat
- The mode should have a specific personality and response style

</details>
