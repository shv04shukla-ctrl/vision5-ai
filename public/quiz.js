// === QUIZ GENERATOR FEATURE ===

// Quiz data (Class 10 & 11 Board Questions)
const quizData = [
    {
        q: "1️⃣ What is the chemical formula of water?",
        options: ["H2O", "CO2", "O2", "H2"],
        answer: "H2O"
    },
    {
        q: "2️⃣ Who is known as the Father of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        answer: "Dr. B. R. Ambedkar"
    },
    {
        q: "3️⃣ What is Ohm’s Law?",
        options: ["V = IR", "E = mc²", "F = ma", "P = IV"],
        answer: "V = IR"
    },
    {
        q: "4️⃣ What is photosynthesis?",
        options: [
            "Conversion of light energy into chemical energy by plants",
            "Respiration in animals",
            "Evaporation of water",
            "Melting of ice"
        ],
        answer: "Conversion of light energy into chemical energy by plants"
    },
    {
        q: "5️⃣ What is the national animal of India?",
        options: ["Elephant", "Bengal Tiger", "Lion", "Peacock"],
        answer: "Bengal Tiger"
    }
];

// Select elements
const quizBtn = document.getElementById("generateQuiz");
const quizOutput = document.getElementById("quizOutput");

// Generate quiz when button clicked
quizBtn.addEventListener("click", generateQuiz);

function generateQuiz() {
    quizOutput.innerHTML = "⏳ Generating quiz...";

    setTimeout(() => {
        quizOutput.innerHTML = "";

        quizData.forEach((item, index) => {
            const div = document.createElement("div");
            div.classList.add("quiz-question");
            div.innerHTML = `
        <p><strong>${item.q}</strong></p>
        ${item.options.map(opt => `
          <label>
            <input type="radio" name="q${index}" value="${opt}">
            ${opt}
          </label><br>
        `).join("")}
      `;
            quizOutput.appendChild(div);
        });

        const submitBtn = document.createElement("button");
        submitBtn.textContent = "✅ Submit Answers";
        submitBtn.classList.add("submit-btn");
        submitBtn.onclick = checkAnswers;
        quizOutput.appendChild(submitBtn);

    }, 800);
}

// Check answers
function checkAnswers() {
    let score = 0;

    quizData.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === item.answer) score++;
    });

    quizOutput.innerHTML += `
    <div class="quiz-result">
      <h3>🎉 Your Score: ${score}/${quizData.length}</h3>
      <p>${score === quizData.length ? "Excellent! 🌟" : "Keep Practicing! 💪"}</p>
    </div>
  `;

    incrementProgress("quizzes");
}

// === PROGRESS TRACKER COUNTER ===
function incrementProgress(type) {
    const stats = JSON.parse(localStorage.getItem("vision5_stats") || "{}");
    stats[type] = (stats[type] || 0) + 1;
    localStorage.setItem("vision5_stats", JSON.stringify(stats));
}
