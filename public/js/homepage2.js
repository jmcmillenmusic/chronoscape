const questionContainer = document.querySelector("#question-container");
const nextQuestionContainer = document.querySelector("#question2-container");
const locationContainer = document.querySelector("#location-container");

const parentAnswer = document.querySelectorAll('.parentAnswer');

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




const nextQuestionHandler = async function (event) {
  event.preventDefault();

  const answer =  event.target.getAttribute("data-answer_id");
  const url = `/api/answer/${answer}`;
  console.log(answer)

  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  // console.log(blogId, text);
  if (answer) {

    const res = await fetch(url, settings);
    const data = await res.json();


    questionContainer.style.display = 'none';
    

    // console.log(data.location.locationData);

    const pTitle = document.createElement('p');
    const pData = document.createElement('p');
    const newNextBtn = document.createElement('button');
    
    newNextBtn.innerHTML = 'Continue';
    newNextBtn.addEventListener('click', showNewQuestions)

    pTitle.innerHTML = data.location.locationTitle;
    pData.innerHTML = data.location.locationData;

    locationContainer.appendChild(pTitle);
    locationContainer.appendChild(pData);
    locationContainer.appendChild(newNextBtn);

    locationContainer.style.display = 'block';

    const newQuestion = data.ChildAnswers[1].question.question;
    const p = document.createElement('p');
    p.innerHTML = newQuestion;
    nextQuestionContainer.appendChild(p);

    for (let i = 0; i < data.ChildAnswers.length; i++) {
      const newChoice = data.ChildAnswers[i].answerChoice;

      const ul = document.createElement('ul');
      const li = document.createElement('li');
      const button = document.createElement('button')

      button.innerHTML = newChoice;
      
      
      li.appendChild(button);
      ul.appendChild(li);


      nextQuestionContainer.appendChild(ul);
      
      console.log(newChoice);
    }

    console.log(data);
  }
}

const showNewQuestions = async function (event) {
  locationContainer.style.display = 'none';
  nextQuestionContainer.style.display = 'block';
}

const nextBtn = document.querySelectorAll('.next');

for(let i = 0; i < nextBtn.length; i++){
  nextBtn[i].addEventListener('click', nextQuestionHandler);
}


// Start by displaying the first question
// displayQuestion(questionData.answers[0].location);