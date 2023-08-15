const parentAnswerContainer = document.querySelector("#parentAnswer-container");
const childAnswerContainer = document.querySelector("#childAnswer-container");
const locationContainer = document.querySelector("#parentLocation-container");
const childLocationContainer = document.querySelector("#childLocation-container");
import { setBgImg } from './background.js';

// const parentAnswer = document.querySelectorAll('.parentAnswer');
const nextBtn = document.querySelectorAll('.next');

// Add event listener for all parent buttons

// Sample data (replace this with your actual data)
const questionData = { /* ... your question data here ... */ };

// const card = document.querySelector('.card__inner');

// card.addEventListener('click', function () {
//     card.classList.toggle('is-flipped');
// });

// const card2 = document.querySelector('.card__inner2');

// card2.addEventListener('click', function () {
//     card2.classList.toggle('is-flipped');
// });

// const card3 = document.querySelector('.card__inner3');

// card3.addEventListener('click', function () {
//     card3.classList.toggle('is-flipped');
// });

// Display a question and its answers
// function displayQuestion(question) {
//   const answersHTML = question.answers
//     .map((answer) => `<button data-answer-id="${answer.id}">${answer.answerChoice}</button>`)
//     .join("");

//     parentQuestionContainer.innerHTML = `
//     <h2>Question: ${question.question}</h2>
//     <ul>${answersHTML}</ul>
//   `;

//   const answerButtons = parentQuestionContainer.querySelectorAll("button");
//   answerButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const answerId = parseInt(button.getAttribute("data-answer-id"));
//       const selectedAnswer = question.answers.find((answer) => answer.id === answerId);

//       if (selectedAnswer.ChildAnswers.length > 0) {
//         // Display child question if available
//         displayQuestion(selectedAnswer.ChildAnswers[0].location);
//       } else {
//         // Handle final state or next steps
//         console.log("Reached a leaf answer or no child questions.");
//       }
//     });
//   });
// }

const nextQuestionHandler = async function (event) {
  event.preventDefault();

  const answerID = event.target.getAttribute("data-answer_id");
  const url = `/api/answer/${answerID}`;
  console.log(answerID)

  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  if (answerID) {
    // fetch our data if there's an actual answerID
    const res = await fetch(url, settings);
    const data = await res.json();

    // Hide the main container
    parentAnswerContainer.style.display = 'none';


    // console.log(data.location.locationData);

    // Create new elements to append to the parentLocation-Container
    const pTitle = document.createElement('p');
    const pData = document.createElement('p');
    const newNextBtn = document.createElement('button');

    // Get location data and set them to the new elements
    pTitle.innerHTML = data.location.locationTitle;
    pData.innerHTML = data.location.locationData;

    // Sets the innerHTML to Continue, and adds eventListener.
    newNextBtn.innerHTML = 'Continue';
    newNextBtn.addEventListener('click', showNewQuestions);

    // Append the title, data and continue button to the locationContainer 
    locationContainer.appendChild(pTitle);
    locationContainer.appendChild(pData);
    locationContainer.appendChild(newNextBtn);

    locationContainer.style.display = 'block';

    // Adds the question to the hidden childAnswer-container.
    // This is outside the for loop so it doesn't get added 3 times.
    const newQuestion = data.ChildAnswers[1].question.question;
    const p = document.createElement('p');

    p.innerHTML = newQuestion;
    p.classList.add('main-question');

    childAnswerContainer.appendChild(p);

    // Create ul and li for the for loop.
    // This is outside the for loop so it doesn't get added 3 times.
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.style.display = 'inline-block'

    // Adds all answers to the hidden childAnswer-container.
    // Loops through the child answers and creates a button for each one
    for (let i = 0; i < data.ChildAnswers.length; i++) {

      // set a const to the childAnswer's text
      const childAnswer = data.ChildAnswers[i].answerChoice;

      // creates new buttons elements that will be appended to the childAnswer-container
      const button = document.createElement('button')

      // Set button's innerHTML to a div containing the card styling.
      button.innerHTML = `
      <div class="next card__face card__face--front"  data-answer_id=${data.ChildAnswers[i].id}>
        ${childAnswer}
      </div>`;
      button.classList.add('card');
      ul.classList.add('answerChoices')
      button.addEventListener('click', endRouteHandler);

      // Append button to list element
      li.appendChild(button);
      // Append list element to an unordered list
      ul.appendChild(li);
      // Append unordered list to the childContainer
      childAnswerContainer.appendChild(ul);

      console.log(childAnswer);
    }
    setBgImg(answerID);
    console.log(data);
  }
}

const endRouteHandler = async function (event) {
  const answerID = event.target.getAttribute("data-answer_id");
  const url = `/api/answer/${answerID}`;
  console.log(answerID)

  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  if (answerID) {
    // fetch our data if there's an actual answerID
    const res = await fetch(url, settings);
    const data = await res.json();

    console.log(data);

    // Create three new elements to append into the new LocationContainer

    const pTitle = document.createElement('p');
    const pData = document.createElement('p');
    const contBtn = document.createElement('button');

    pTitle.innerHTML = data.location.locationTitle;
    pData.innerHTML = data.location.locationData;

    contBtn.innerHTML = 'Continue';
    
    contBtn.addEventListener('click', function () {
      if (document.URL.includes("/route2")) {
        document.location.replace('/route3');
      }
      else if (document.URL.includes("/route3")) {
        document.location.replace('/endRoute');
      } else {
        document.location.replace('/route2');
      }
    });
    childLocationContainer.appendChild(pTitle);
    childLocationContainer.appendChild(pData);
    childLocationContainer.appendChild(contBtn);
  }

  childAnswerContainer.style.display = 'none';
  childLocationContainer.style.display = 'block';
  setBgImg(answerID);
}

// Simply hides the parent Location container and shows the child answers
const showNewQuestions = async function (event) {
  locationContainer.style.display = 'none';
  childAnswerContainer.style.display = 'block';
}

for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener('click', nextQuestionHandler);
}

// Start by displaying the first question
// displayQuestion(questionData.answers[0].location);