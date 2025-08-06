## Step 4: Creating Custom Chat Modes

Now that you have instructions, prompts, and templates working together, you want to take customization one step further. When brainstorming new assignments, you'd like a specialized chat experience that focuses purely on ideation rather than implementation.

### 📖 Theory: Custom Chat Modes

Custom chat modes (`*.chatmode.md`) fundamentally change how Copilot behaves, creating specialized conversation experiences with specific tools and response formats, even unique personalities! They are selected from a dropdown list in the Copilot Chat interface.

Visual Studio Code will look for `*.chatmode.md` files in `.github/chatmodes/` directory by [default](vscode://settings/chat.modeFilesLocations).

> [!TIP]
> Learn more about Chat Modes:
>
> - [VS Code Docs: Custom Chat Modes](https://code.visualstudio.com/docs/copilot/chat/chat-modes#_custom-chat-modes)
> - [VS Code Docs: Copilot Customization Guide](https://code.visualstudio.com/docs/copilot/copilot-customization)


### ⌨️ Activity: Create an Assignment Brainstorming Chat Mode

Now let's create a specialized chat mode for brainstorming assignment ideas.

1. Create a new file called `.github/chatmodes/assignment-brainstorming.chatmode.md`

1. Add the following content to create a focused brainstorming experience:

   ```markdown
   ---
   description: 💡 Assignment brainstorming assistant
   tools: ["codebase", "search"]
   ---

   # 💡 Assignment Brainstorming Assistant

   **BRAINSTORM MODE ACTIVATED** 🚀

   I'm your assignment brainstorming partner for Mergington High School! I analyze your existing curriculum and suggest creative next assignments that build on what your students have already learned.

   ## My Response Style

   Every response follows this format:

   🔍 QUICK SCAN: [Brief analysis of existing assignments]
   💡 IDEA BURST: [3-5 rapid-fire suggestions]
   🎯 NEXT QUESTION: [What I need to know to help more]

   ## Rules

   - ⚡ Keep responses short
   - 🎯 Always end with a specific question
   - 💡 Focus on concepts, not details
   - 🚫 Never write assignment specs
   - 📊 Base ideas on existing curriculum gaps
   ```

### ⌨️ Activity: Test the Brainstorming Chat Mode

1. Open Copilot Chat in VS Code.

1. Select your custom chat mode from the chat mode dropdown list.

   <img width="379" height="218" alt="copilot chat mode: assignment brainstorming mode selected" src="https://github.com/user-attachments/assets/4effffa7-b8ef-4830-8050-9c777f9f0189" />

1. Test the chat mode with questions a teacher might ask. Notice the different response format!

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > What assignment topics are missing from my current curriculum?
   > ```

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > Suggest 3 advanced Python assignments for my students.
   > ```

   > ![Static Badge](https://img.shields.io/badge/-Prompt-text?style=social&logo=github%20copilot)
   >
   > ```prompt
   > What would be a good follow-up assignment after the data analysis assignment?
   > ```

1. Try asking follow-up questions to see how the chat mode maintains its personality throughout the conversation.

1. Commit and push your changes for the new chat mode file: `.github/chatmodes/assignment-brainstorming.chatmode.md`

1. Wait for Mona to give you a final review!

<details>
<summary>Having trouble? 🤷</summary><br/>

- Make sure the chat mode file is in `.github/chatmodes/` directory with the `.chatmode.md` extension.
- Chat modes are selected from the dropdown list at the top of the chat interface, not with `@` mentions.
- If the chat mode doesn't appear in the dropdown, restart VS Code or reload the window.
- The `tools` array in frontmatter controls which capabilities the chat mode can access.
- Chat modes maintain their personality throughout the entire conversation thread.

</details>
