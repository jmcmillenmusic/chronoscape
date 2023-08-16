
const voidEnding = document.querySelector('#ending-void');
const mpfEnding = document.querySelector('#ending-MPF');
const travelerEnding = document.querySelector('#ending-traveler');
const goodEnding = document.querySelector('#ending-good');
const endingSetup =  document.querySelector('.slide');


const endingHandler = async function (event) {
  event.preventDefault();

  const userID = endingSetup.dataset.user_id;
  const userURL = `/api/users/${userID}`;

  const getSettings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };

  if (userID) {
    // fetch our data if there's an actual answerID
    const res = await fetch(userURL, getSettings);
    const data = await res.json();


    endingSetup.style.display = 'none'

    if (data.void >= 2){
      voidEnding.style.display = 'block';
    } else if (data.mpf >= 2) {
      mpfEnding.style.display = 'block';
    } else if (data.traveler >= 2) {
      travelerEnding.style.display = 'block';
    } else if (data.mpf == data.void == data.traveler) {
      goodEnding.style.display = 'block';
    }

  }
}

const restartStory = async function (event) {
  event.preventDefault()
  document.location.replace('/')
}

document.
  querySelector('.newEnding').
  addEventListener('click', endingHandler);

const contBtn = document.querySelectorAll('.continue');

for (let i = 0; i < contBtn.length; i++) {
  contBtn[i].addEventListener('click', restartStory)
  
}