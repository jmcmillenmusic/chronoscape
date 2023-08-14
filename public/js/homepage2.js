const parentAnswerContainer = document.querySelector("#parentAnswer-container");
const childAnswerContainer = document.querySelector("#childAnswer-container");
const locationContainer = document.querySelector("#parentLocation-container");
const childLocationContainer = document.querySelector("#childLocation-container");

const parentAnswer = document.querySelectorAll('.parentAnswer');
const nextBtn = document.querySelectorAll('.next');

// Add event listener for all parent buttons


// Sample data (replace this with your actual data)
const questionData = { /* ... your question data here ... */ };

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

  const answerID =  event.target.getAttribute("data-answer_id");
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
    newNextBtn.addEventListener('click', showNewQuestions)



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
    childAnswerContainer.appendChild(p);

    // Adds all answers to the hidden childAnswer-container.
    // Loops through the child answers and creates a button for each one
    for (let i = 0; i < data.ChildAnswers.length; i++) {

      // set a const to the childAnswer's text
      const childAnswer = data.ChildAnswers[i].answerChoice;

      // creates the three new elements that will be appended to the childAnswer-container
      const ul = document.createElement('ul');
      const li = document.createElement('li');
      const button = document.createElement('button')

      // Set button's text to the ChildAnswer.
      button.innerHTML = childAnswer;
      button.addEventListener('click', endRouteHandler);
      
      // Append button to list element
      li.appendChild(button);
      // Append list element to an unordered list
      ul.appendChild(li);
      // Append unordered list to the childContainer
      childAnswerContainer.appendChild(ul);
      
      console.log(childAnswer);
    }

    console.log(data);
  }
}

const endRouteHandler = async function (event) {
  childAnswerContainer.style.display = 'none';
  childAnswerContainer.style.display = 'block';
}



// Simply hides the parent Location container and shows the child answers
const showNewQuestions = async function (event) {
  locationContainer.style.display = 'none';
  childAnswerContainer.style.display = 'block';
}






for(let i = 0; i < nextBtn.length; i++){
  nextBtn[i].addEventListener('click', nextQuestionHandler);
}




// Start by displaying the first question
// displayQuestion(questionData.answers[0].location);