function getSelectedCheckboxValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(cb => cb.value);
}

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let score = 0;
  let resultHTML = "";
  const passThreshold = 4;

  // Q1
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "b") {
    score++;
    resultHTML += "<p class='correct'>Q1: Correct!</p>";
  } else {
    resultHTML += "<p class='wrong'>Q1: Incorrect. Answer: Progressive Web Application</p>";
  }

  // Q2
  const q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "b") {
    score++;
    resultHTML += "<p class='correct'>Q2: Correct!</p>";
  } else {
    resultHTML += "<p class='wrong'>Q2: Incorrect. Answer: Manifest file</p>";
  }

  // Q3
  const q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "b") {
    score++;
    resultHTML += "<p class='correct'>Q3: Correct!</p>";
  } else {
    resultHTML += "<p class='wrong'>Q3: Incorrect. Answer: manifest.json</p>";
  }

  // Q4
  const q4 = document.querySelector('input[name="q4"]').value.trim().toLowerCase();
  if (q4 === "service worker" || q4 === "serviceworker") {
    score++;
    resultHTML += "<p class='correct'>Q4: Correct!</p>";
  } else {
    resultHTML += "<p class='wrong'>Q4: Incorrect. Answer: service worker</p>";
  }

  // Q5
  const q5 = getSelectedCheckboxValues("q5").sort();
  const correctQ5 = ["a", "c", "d"];
  if (JSON.stringify(q5) === JSON.stringify(correctQ5)) {
    score++;
    resultHTML += "<p class='correct'>Q5: Correct!</p>";
  } else {
    resultHTML += "<p class='wrong'>Q5: Incorrect. Answers: Offline access, Home screen installation, Push notifications</p>";
  }

  resultHTML += `<h3>Total Score: ${score}/5</h3>`;
  resultHTML += `<h3>${score >= passThreshold ? "✅ You passed!" : "❌ You did not pass. Try again!"}</h3>`;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "block";
});

function resetQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("result").style.display = "none";
}