const parentAnswerContainer = document.querySelector("#parentAnswer-container");
const childAnswerContainer = document.querySelector("#childAnswer-container");
const locationContainer = document.querySelector("#parentLocation-container");
const childLocationContainer = document.querySelector("#childLocation-container");
import { setBgImg } from './background.js';

const nextBtn = document.querySelectorAll('.next');


const nextQuestionHandler = async function (event) {
  event.preventDefault();

  const answerID = event.target.getAttribute("data-answer_id");
  const url = `/api/answer/${answerID}`;

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



    // Create new elements to append to the parentLocation-Container
    const pTitle = document.createElement('p');
    const pData = document.createElement('p');
    const newNextBtn = document.createElement('button');

    // Get location data and set them to the new elements
    pTitle.innerHTML = data.location.locationTitle;
    pTitle.classList.add('titleLocation')
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
      const childID = data.ChildAnswers[i].id;
      const childImg = data.ChildAnswers[i].imgLink;

      // creates new buttons elements that will be appended to the childAnswer-container
      const button = document.createElement('button')

      // Set button's innerHTML to a div containing the card styling.
      button.innerHTML = `
      <div class="content-container">
        <p>${childAnswer}</p>
        <div class="darken-cards next card__face card__face--front">
          <img class="cardImg" src="${childImg}"  data-answer_id=${childID}></img>
        </div>
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

    }
    setBgImg(answerID);
  }
}


let MPF = 0;
let Void = 0;
let Traveler = 0;

const endRouteHandler = async function (event) {
  const answerID = event.target.getAttribute("data-answer_id");
  const answerUrl = `/api/answer/${answerID}`;
 

  const getSettings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };


  if (answerID) {
    // fetch our data if there's an actual answerID
    const res = await fetch(answerUrl, getSettings);
    const data = await res.json();

    // Create three new elements to append into the new LocationContainer

    const pTitle = document.createElement('p');
    const pData = document.createElement('p');
    const contBtn = document.createElement('button');

    pTitle.innerHTML = data.location.locationTitle;
    pTitle.classList.add('titleLocation')
    pData.innerHTML = data.location.locationData;

    contBtn.innerHTML = 'Continue';

    const userID = document.querySelector('.slide').dataset.user_id;

    switch (data.route) {
      case 'MPF':
        MPF++;
        break;
      case 'Void':
        Void++;
        break;
      case 'Traveler':
        Traveler++;
        break;
      default:
        console.log('Error')
        break;
    }

    contBtn.addEventListener('click', async function () {

      const response = await fetch(`/api/users/${userID}`, {
        method: 'PUT',
        body: JSON.stringify({ MPF, Void, Traveler }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      if (response.ok) {
        if (document.URL.includes("/route2")) {
          document.location.replace('/route3');

        } else if (document.URL.includes("/route3")) {
          document.location.replace('/endRoute');
        }
        else {
          document.location.replace('/route2');
        }
      } else {
        alert('Failed to update scores')
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
