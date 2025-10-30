// ===== Vision5 AI - Question Bank (Class 10 & 11) =====

// Questions Database (real board-type questions)
const questionBank = [
    {
        subject: "biology",
        q: "What is photosynthesis?",
        a: "Photosynthesis is the process by which green plants make food using sunlight, water, and carbon dioxide to produce glucose and oxygen. (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂)"
    },
    {
        subject: "physics",
        q: "State Newton’s First Law of Motion.",
        a: "A body continues in its state of rest or uniform motion unless acted upon by an external unbalanced force."
    },
    {
        subject: "physics",
        q: "What is refraction of light?",
        a: "Refraction is the bending of light as it passes from one medium to another due to a change in speed."
    },
    {
        subject: "physics",
        q: "What is Ohm’s Law?",
        a: "Ohm’s Law states that the current through a conductor is directly proportional to the voltage across it, if temperature remains constant. (V = IR)"
    },
    {
        subject: "physics",
        q: "What is the difference between AC and DC current?",
        a: "AC (Alternating Current) changes direction periodically, while DC (Direct Current) flows only in one direction."
    },
    {
        subject: "chemistry",
        q: "What are isotopes?",
        a: "Isotopes are atoms of the same element having the same number of protons but different numbers of neutrons."
    },
    {
        subject: "biology",
        q: "What is the function of the mitochondria in a cell?",
        a: "Mitochondria are known as the 'powerhouse of the cell' because they produce energy in the form of ATP."
    },
    {
        subject: "physics",
        q: "What are the three states of matter?",
        a: "Solid, Liquid, and Gas."
    },
    {
        subject: "biology",
        q: "What is the human heart’s main function?",
        a: "The heart pumps blood throughout the body, supplying oxygen and nutrients while removing waste."
    },
    {
        subject: "chemistry",
        q: "What is the chemical formula of water?",
        a: "H₂O"
    },
    {
        subject: "maths",
        q: "Solve: x² – 5x + 6 = 0",
        a: "(x – 2)(x – 3) = 0 → x = 2 or 3"
    },
    {
        subject: "maths",
        q: "Find the area of a circle with radius 7 cm.",
        a: "Area = πr² = 22/7 × 7 × 7 = 154 cm²"
    },
    {
        subject: "maths",
        q: "What is the slope of a line parallel to the x-axis?",
        a: "0"
    },
    {
        subject: "maths",
        q: "Convert 3/4 into a percentage.",
        a: "(3/4) × 100 = 75%"
    },
    {
        subject: "english",
        q: "What is a synonym for 'Beautiful'?",
        a: "Attractive / Pretty / Lovely"
    },
    {
        subject: "english",
        q: "What is the difference between a simile and a metaphor?",
        a: "A simile compares using 'like' or 'as' (e.g., as brave as a lion). A metaphor directly compares without 'like/as' (e.g., He is a lion in battle)."
    },
    {
        subject: "english",
        q: "Make a sentence using the word 'Wisdom.'",
        a: "True wisdom comes from experience."
    },
    {
        subject: "social",
        q: "Who is known as the Father of the Indian Constitution?",
        a: "Dr. B. R. Ambedkar"
    },
    {
        subject: "social",
        q: "What is the national animal of India?",
        a: "Bengal Tiger"
    }
];

// ===== DOM Elements =====
const qaList = document.getElementById("qa-list");
const subjectSelect = document.getElementById("subject-select");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const showAllBtn = document.getElementById("show-all");

// ===== Render Questions =====
function renderQuestions(list) {
    qaList.innerHTML = "";
    if (list.length === 0) {
        qaList.innerHTML = "<li>No matching questions found.</li>";
        return;
    }

    list.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("qa-item");
        li.innerHTML = `
      <p><strong>Q:</strong> ${item.q}</p>
      <p><strong>Answer:</strong> ${item.a}</p>
      <span class="subject-tag">${item.subject.toUpperCase()}</span>
    `;
        qaList.appendChild(li);
    });
}

// ===== Filter by Subject =====
subjectSelect.addEventListener("change", () => {
    const subject = subjectSelect.value;
    if (subject === "all") renderQuestions(questionBank);
    else renderQuestions(questionBank.filter(q => q.subject === subject));
});

// ===== Search =====
searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value.toLowerCase();
    const results = questionBank.filter(q => q.q.toLowerCase().includes(keyword));
    renderQuestions(results);
});

// ===== Show All =====
showAllBtn.addEventListener("click", () => {
    renderQuestions(questionBank);
});

// ===== Default load =====
renderQuestions(questionBank);

// Progress tracking
function incrementProgress(type) {
    const stats = JSON.parse(localStorage.getItem("vision5_stats") || "{}");
    stats[type] = (stats[type] || 0) + 1;
    localStorage.setItem("vision5_stats", JSON.stringify(stats));
}
incrementProgress("questions");
