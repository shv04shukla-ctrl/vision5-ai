// ===== Vision5 AI - Progress Tracker =====

// Load stats from localStorage
function loadStats() {
    const stats = JSON.parse(localStorage.getItem("vision5_stats") || "{}");

    // Update numbers
    document.getElementById("chats-count").textContent = stats.chats || 0;
    document.getElementById("notes-count").textContent = stats.notes || 0;
    document.getElementById("quizzes-count").textContent = stats.quizzes || 0;
    document.getElementById("questions-count").textContent = stats.questions || 0;

    // Update progress bars (scale 0–100%)
    updateBar("chat-bar", stats.chats);
    updateBar("note-bar", stats.notes);
    updateBar("quiz-bar", stats.quizzes);
    updateBar("question-bar", stats.questions);
}

// Progress bar update
function updateBar(id, value) {
    const max = 100; // You can set goal as 100 interactions
    const percent = Math.min((value || 0) / max * 100, 100);
    document.getElementById(id).style.width = percent + "%";
}

// Reset button
document.getElementById("reset-stats").addEventListener("click", () => {
    localStorage.removeItem("vision5_stats");
    loadStats();
    alert("✅ Progress has been reset!");
});

// Load data when page opens
loadStats();
