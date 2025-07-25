// Assignment Page JavaScript

class AssignmentPage {
  constructor() {
    this.config = null;
    this.assignmentId = null;
    this.assignment = null;
    this.init();
  }

  async init() {
    try {
      this.assignmentId = this.getAssignmentIdFromUrl();
      if (!this.assignmentId) {
        throw new Error("No assignment ID provided");
      }

      await this.loadConfig();
      this.assignment = this.findAssignment(this.assignmentId);

      if (!this.assignment) {
        throw new Error("Assignment not found");
      }

      await this.loadAndRenderAssignment();
    } catch (error) {
      console.error("Failed to load assignment:", error);
      this.showError(`Failed to load assignment: ${error.message}`);
    }
  }

  getAssignmentIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  async loadConfig() {
    const response = await fetch("../../config.json");
    if (!response.ok) {
      throw new Error("Failed to load configuration");
    }
    this.config = await response.json();
  }

  findAssignment(id) {
    return this.config.assignments.find((assignment) => assignment.id === id);
  }

  async loadAndRenderAssignment() {
    // Update page title
    document.getElementById("assignment-title").textContent = this.assignment.title;
    document.title = `${this.assignment.title} - ${this.config.course.school}`;

    // Render download links
    this.renderDownloadLinks();

    // Load and render README content
    await this.loadReadmeContent();
  }

  renderDownloadLinks() {
    const { attachments = [] } = this.assignment;

    if (attachments.length === 0) {
      return;
    }

    const downloadsSection = document.getElementById("downloads-section");
    const downloadLinks = document.getElementById("download-links");

    const links = attachments
      .map((attachment) => {
        const icon = this.getFileIcon(attachment.type);
        return `
                <a href="../../${this.assignment.path}/${attachment.file}" 
                   download 
                   class="btn btn-download">
                   ${icon} Download ${attachment.name}
                </a>
            `;
      })
      .join(" ");

    downloadLinks.innerHTML = links;
    downloadsSection.style.display = "block";
  }

  getFileIcon(type) {
    const icons = {
      python: "🐍",
      javascript: "📜",
      html: "🌐",
      css: "🎨",
      default: "📄",
    };
    return icons[type] || icons.default;
  }

  async loadReadmeContent() {
    try {
      const readmePath = `../../${this.assignment.path}/README.md`;
      const response = await fetch(readmePath);

      if (!response.ok) {
        throw new Error(`Failed to load README from ${readmePath}`);
      }

      const markdownContent = await response.text();
      const htmlContent = marked.parse(markdownContent);

      document.getElementById("assignment-content").innerHTML = htmlContent;
    } catch (error) {
      console.error("Failed to load README:", error);
      this.showError("Failed to load assignment content");
    }
  }

  showError(message) {
    const contentDiv = document.getElementById("assignment-content");
    contentDiv.innerHTML = `<div class="error">${message}</div>`;
  }
}

// Initialize the assignment page when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new AssignmentPage();
});
