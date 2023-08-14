const questionContainer = document.querySelector("#question-container");

// Sample data (replace this with your actual data)
const questionData = { /* ... your question data here ... */ };

// Display a question and its answers
function displayQuestion(question) {
  const answersHTML = question.answers
    .map((answer) => `<button data-answer-id="${answer.id}">${answer.answerChoice}</button>`)
    .join("");

  questionContainer.innerHTML = `
    <h2>Question: ${question.question}</h2>
    <ul>${answersHTML}</ul>
  `;

  const answerButtons = questionContainer.querySelectorAll("button");
  answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const answerId = parseInt(button.getAttribute("data-answer-id"));
      const selectedAnswer = question.answers.find((answer) => answer.id === answerId);
      
      if (selectedAnswer.ChildAnswers.length > 0) {
        // Display child question if available
        displayQuestion(selectedAnswer.ChildAnswers[0].location);
      } else {
        // Handle final state or next steps
        console.log("Reached a leaf answer or no child questions.");
      }
    });
  });
}

// Start by displaying the first question
displayQuestion(questionData.answers[0].location);