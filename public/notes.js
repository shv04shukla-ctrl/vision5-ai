// === SMART NOTES FEATURE ===

// Get elements
const noteInput = document.getElementById("noteInput");
const saveNoteBtn = document.getElementById("saveNoteBtn");
const notesList = document.getElementById("notesList");

// Load saved notes on page load
document.addEventListener("DOMContentLoaded", loadNotes);

// Save note button click
saveNoteBtn.addEventListener("click", saveNote);

// Save note to localStorage
function saveNote() {
    const text = noteInput.value.trim();
    if (text === "") {
        alert("Please write something before saving!");
        return;
    }

    const notes = JSON.parse(localStorage.getItem("vision5_notes") || "[]");
    notes.push({ text, time: new Date().toLocaleString() });
    localStorage.setItem("vision5_notes", JSON.stringify(notes));

    noteInput.value = "";
    loadNotes();
}

// Display saved notes
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("vision5_notes") || "[]");
    notesList.innerHTML = "";

    if (notes.length === 0) {
        notesList.innerHTML = "<p>No notes saved yet.</p>";
        return;
    }

    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.classList.add("note-item");
        li.innerHTML = `
      <div>
        <strong>${note.time}</strong><br>${note.text}
      </div>
      <button class="delete-btn" onclick="deleteNote(${index})">🗑️</button>
    `;
        notesList.appendChild(li);
    });
}

// Delete a note
function deleteNote(index) {
    const notes = JSON.parse(localStorage.getItem("vision5_notes") || "[]");
    notes.splice(index, 1);
    localStorage.setItem("vision5_notes", JSON.stringify(notes));
    loadNotes();
}
