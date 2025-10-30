const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// When Send button is clicked
sendButton.addEventListener("click", sendMessage);

// When Enter key is pressed
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage("user", message);
  userInput.value = "";

  // Show typing dots
  const typingDiv = document.createElement("div");
  typingDiv.className = "bot-message";
  typingDiv.innerHTML = `<span class="dot"></span><span class="dot"></span><span class="dot"></span>`;
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    // Send to backend
    const response = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    typingDiv.remove();

    appendMessage("bot", data.reply);
  } catch (error) {
    typingDiv.remove();
    appendMessage("bot", "⚠️ Could not connect to server.");
  }
}

// Function to show messages
function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  messageDiv.textContent = (sender === "user" ? "You: " : "AI: ") + text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}
// after receiving reply from server
appendMessage("bot", data.reply);

// increment chat count
function incrementProgress(type) {
  const stats = JSON.parse(localStorage.getItem("vision5_stats") || "{}");
  stats[type] = (stats[type] || 0) + 1;
  localStorage.setItem("vision5_stats", JSON.stringify(stats));
}
incrementProgress("chats");
// Quiz Generator Feature
const quizBtn = document.querySelector("#generateQuiz");
const quizOutput = document.querySelector("#quizOutput");

if (quizBtn && quizOutput) {
  quizBtn.addEventListener("click", async () => {
    quizOutput.innerHTML = "⏳ Generating quiz...";
    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Generate 5 multiple choice questions for class 10 and 11 science with answers" })
      });

      const data = await response.json();
      quizOutput.innerHTML = data.reply.replace(/\n/g, "<br>");
    } catch (error) {
      quizOutput.innerHTML = "⚠️ Error generating quiz.";
    }
  });
}
