
const voidEnding = document.querySelector('#ending-void');
const mpfEnding = document.querySelector('#ending-MPF');
const travelerEnding = document.querySelector('#ending-traveler');
const goodEnding = document.querySelector('#ending-good');

const endingHandler = async function (event) {
  event.preventDefault();

  const userID = document.querySelector('.slide').dataset.user_id;
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


    if (data.void >= 2)
    {
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

document.
  querySelector('.newEnding').
  addEventListener('click', endingHandler);