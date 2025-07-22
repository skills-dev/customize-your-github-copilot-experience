---
mode: agent
---

Your goal is to generate a new homework assignment for the Mergington High School students.

Follow these steps to create a new assignment:

1. If not already provided by the user, ask what the assignment will be about.
1. Create a new directory in the `assignments` folder with a unique name based on the assignment topic.
1. Create a new file in the directory named `README.md` with the structure from the [assignment-template.md](../../templates/assignment-template.md) file
1. Fill Out the Assignment Details
1. (optional) Add starter code or attachments. 
    If the assignment needs starter code or files, add them to the same assignment folder.
1. Update the assignments list in [config.json](../../website/config.json) website configuration file to include the new assignment. For the dueDate field, use the current date plus 7 days unless specified otherwise.
