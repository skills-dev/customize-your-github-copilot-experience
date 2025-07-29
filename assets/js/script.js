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
      this.renderNextDueAssignment();
      this.renderAllAssignments();
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

  getAssignmentStatus(assignment) {
    if (!assignment.dueDate) return 'active'; // No due date means always active
    
    const currentDate = new Date();
    const assignmentDueDate = new Date(assignment.dueDate);
    
    // Set both dates to start of day for accurate comparison
    currentDate.setHours(0, 0, 0, 0);
    assignmentDueDate.setHours(0, 0, 0, 0);
    
    return assignmentDueDate >= currentDate ? 'active' : 'overdue';
  }

  renderCourseInfo() {
    const { course } = this.config;
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("course-info").textContent = course.school;
    document.getElementById("course-description").textContent = course.description;
    document.title = `${course.school} - ${course.title}`;
  }

  renderNextDueAssignment() {
    const { assignments } = this.config;
    const nextDueContainer = document.getElementById("next-due-assignment");
    
    // Find the next assignment due (active assignments only)
    const activeAssignments = assignments.filter(a => this.getAssignmentStatus(a) === 'active' && a.dueDate);
    if (activeAssignments.length === 0) {
      nextDueContainer.innerHTML = '<div class="loading">No upcoming assignments</div>';
      return;
    }

    const currentDate = new Date();
    const sortedAssignments = activeAssignments.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    });

    // Find the next due assignment (either due today or in the future)
    let nextAssignment = sortedAssignments.find(a => {
      const dueDate = new Date(a.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      dueDate.setHours(0, 0, 0, 0);
      return dueDate >= today;
    });

    // If no future assignments, show the most recently due
    if (!nextAssignment) {
      nextAssignment = sortedAssignments[sortedAssignments.length - 1];
    }

    nextDueContainer.innerHTML = this.createNextDueCard(nextAssignment);
  }

  createNextDueCard(assignment) {
    const dueDate = new Date(assignment.dueDate);
    const currentDate = new Date();
    const timeDiff = dueDate - currentDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    let urgencyClass = 'low';
    let urgencyText = `${daysDiff} days remaining`;
    
    if (daysDiff < 0) {
      urgencyClass = 'high';
      urgencyText = `${Math.abs(daysDiff)} days overdue`;
    } else if (daysDiff === 0) {
      urgencyClass = 'high';
      urgencyText = 'Due today!';
    } else if (daysDiff <= 3) {
      urgencyClass = 'high';
      urgencyText = `${daysDiff} days remaining`;
    } else if (daysDiff <= 7) {
      urgencyClass = 'medium';
      urgencyText = `${daysDiff} days remaining`;
    }

    const formattedDate = dueDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return `
      <h3>${assignment.title}</h3>
      <p>${assignment.description}</p>
      <div class="next-due-meta">
        <div class="next-due-date">📅 Due: ${formattedDate}</div>
        <div class="next-due-urgency ${urgencyClass}">⏰ ${urgencyText}</div>
      </div>
      <div class="next-due-actions">
        <a href="assets/pages/assignment.html?id=${assignment.id}" class="btn btn-next-due">
          Start Assignment →
        </a>
      </div>
    `;
  }

  renderAllAssignments() {
    const assignmentsList = document.getElementById("assignments-list");
    const { assignments } = this.config;

    if (!assignments || assignments.length === 0) {
      assignmentsList.innerHTML = '<div class="loading">No assignments available</div>';
      return;
    }

    // Sort assignments by due date: latest due date first
    const sortedAssignments = [...assignments].sort((a, b) => {
      // If one has no due date, put it at the end
      if (!a.dueDate && !b.dueDate) return 0;
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;

      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      
      return dateB - dateA;
    });

    const assignmentRows = sortedAssignments
      .map((assignment) => this.createAssignmentRow(assignment))
      .join("");

    assignmentsList.innerHTML = assignmentRows;
  }

  createAssignmentRow(assignment) {
    const dueDate = assignment.dueDate
      ? new Date(assignment.dueDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric'
        })
      : "No due date";

    const dynamicStatus = this.getAssignmentStatus(assignment);

    return `
      <div class="assignment-row">
        <div class="assignment-info">
          <h3>${assignment.title}</h3>
          <p>${assignment.description}</p>
          <div class="assignment-quick-meta">
            <span class="due-date">📅 ${dueDate}</span>
            <span class="status ${dynamicStatus}">${dynamicStatus}</span>
          </div>
        </div>
        <div class="assignment-actions-compact">
          <a href="assets/pages/assignment.html?id=${assignment.id}" class="btn btn-primary">
            View Details
          </a>
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
