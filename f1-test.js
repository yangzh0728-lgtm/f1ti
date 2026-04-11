const quizForm = document.getElementById("f1-quiz-form");
const submitButton = document.getElementById("submit-quiz");
const resetButton = document.getElementById("reset-quiz");
const progressText = document.getElementById("quiz-progress");
const progressBar = document.getElementById("quiz-progress-bar");
const resultSection = document.getElementById("f1-result");
const resultHeadline = document.getElementById("result-headline");
const resultSummary = document.getElementById("result-summary");
const resultDetail = document.getElementById("result-detail");
const resultTraits = document.getElementById("result-traits");
const resultPodium = document.getElementById("result-podium");
const resultAvatar = document.getElementById("result-avatar");
const resultDriverName = document.getElementById("result-driver-name");
const resultDriverTeam = document.getElementById("result-driver-team");
const resultDriverNumber = document.getElementById("result-driver-number");
const resultMatchPercent = document.getElementById("result-match-percent");

const { calculateF1Result, f1Questions } = window.F1Quiz;

function renderQuestions() {
  quizForm.innerHTML = f1Questions
    .map(
      (question, questionIndex) => `
        <fieldset class="f1-question">
          <legend>
            <span>${String(questionIndex + 1).padStart(2, "0")}</span>
            ${question.title}
          </legend>
          <div class="f1-options">
            ${question.options
              .map(
                (option) => `
                  <label class="f1-option">
                    <input type="radio" name="${question.id}" value="${option.id}" />
                    <span>${option.choice ? `<b>${option.choice}</b>` : ""}${option.label}</span>
                  </label>
                `
              )
              .join("")}
          </div>
        </fieldset>
      `
    )
    .join("");
}

function getSelectedAnswers() {
  return f1Questions.map((question) => {
    const checked = quizForm.querySelector(`input[name="${question.id}"]:checked`);
    return checked ? checked.value : null;
  });
}

function updateProgress() {
  const answeredCount = getSelectedAnswers().filter(Boolean).length;
  const percent = Math.round((answeredCount / f1Questions.length) * 100);

  progressText.textContent = `${answeredCount} / ${f1Questions.length}`;
  progressBar.style.width = `${percent}%`;
  submitButton.disabled = answeredCount !== f1Questions.length;
}

function renderResult(result) {
  const accent = result.driver.color;

  resultSection.style.setProperty("--driver-color", accent);
  resultAvatar.src = result.driver.avatar;
  resultAvatar.alt = `${result.driver.name} 卡通头像`;
  resultDriverName.textContent = result.driver.nickname;
  resultDriverTeam.textContent = `${result.driver.name} · ${result.driver.team}`;
  resultDriverNumber.textContent = `比赛号码 #${result.driver.number}`;
  resultMatchPercent.textContent = `匹配度 ${result.percent}%`;
  resultHeadline.textContent = `${result.driver.nickname}（${result.driver.name}）`;
  resultSummary.textContent = result.driver.summary;
  resultDetail.textContent = result.driver.detail;
  resultTraits.innerHTML = result.driver.traits.map((trait) => `<span>${trait}</span>`).join("");
  resultPodium.innerHTML = result.matches
    .map(
      (match, index) => `
        <article class="f1-podium-item">
          <span class="f1-rank">P${index + 1}</span>
          <div>
            <strong>${match.driver.nickname}</strong>
            <small>#${match.driver.number} · ${match.driver.name} · ${match.driver.team}</small>
            <small>匹配度 ${match.percent}% · ${match.score} pts</small>
          </div>
        </article>
      `
    )
    .join("");

  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function submitQuiz() {
  const answers = getSelectedAnswers();
  if (answers.some((answer) => !answer)) {
    updateProgress();
    return;
  }

  renderResult(calculateF1Result(answers));
}

function resetQuiz() {
  quizForm.reset();
  resultSection.hidden = true;
  updateProgress();
  document.getElementById("f1-quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

renderQuestions();
updateProgress();

quizForm.addEventListener("change", updateProgress);
submitButton.addEventListener("click", submitQuiz);
resetButton.addEventListener("click", resetQuiz);
