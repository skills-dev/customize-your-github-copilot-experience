// Mergington High School - Computer Science Portal JavaScript

class AssignmentPortal {
  constructor() {
    this.config = null;
    this.init();
  }

  async init() {
    try {
      await this.loadConfig();
      this.renderCourseInfo();
      this.renderAssignments();
    } catch (error) {
      console.error("Failed to initialize portal:", error);
      this.showError("Failed to load course information");
    }
  }

  async loadConfig() {
    const response = await fetch("config.json");
    if (!response.ok) {
      throw new Error("Failed to load configuration");
    }
    this.config = await response.json();
  }

  renderCourseInfo() {
    const { course } = this.config;
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("course-info").textContent = `${course.teacher} - ${course.school}`;
    document.getElementById("course-description").textContent = course.description;
    document.title = `${course.school} - ${course.title}`;
  }

  renderAssignments() {
    const assignmentsList = document.getElementById("assignments-list");
    const { assignments } = this.config;

    if (!assignments || assignments.length === 0) {
      assignmentsList.innerHTML = '<div class="loading">No assignments available</div>';
      return;
    }

    const assignmentCards = assignments
      .map((assignment) => this.createAssignmentCard(assignment))
      .join("");

    assignmentsList.innerHTML = assignmentCards;
  }

  createAssignmentCard(assignment) {
    const dueDate = assignment.dueDate
      ? new Date(assignment.dueDate).toLocaleDateString()
      : "No due date";
    const attachments = assignment.attachments || [];

    const downloadButtons = attachments
      .map(
        (attachment) =>
          `<a href="${assignment.path}/${attachment.file}" 
               download 
               class="btn btn-download">
               📁 ${attachment.name}
            </a>`
      )
      .join("");

    return `
            <div class="assignment-card">
                <h3>${assignment.title}</h3>
                <p>${assignment.description}</p>
                <div class="assignment-meta">
                    <span class="due-date">Due: ${dueDate}</span>
                    <span class="status ${assignment.status}">${assignment.status}</span>
                </div>
                <div class="assignment-actions">
                    <a href="assignment.html?id=${assignment.id}" class="btn btn-primary">
                        View Assignment
                    </a>
                    ${downloadButtons}
                </div>
            </div>
        `;
  }

  showError(message) {
    const assignmentsList = document.getElementById("assignments-list");
    assignmentsList.innerHTML = `<div class="error">${message}</div>`;
  }
}

// Initialize the portal when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new AssignmentPortal();
});
