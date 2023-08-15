const buttonElement = document.querySelector('.next-button-first-slide');
const title = document.getElementById('title');
const description = document.getElementById('description');
const parentAnswerContainer = document.querySelector("#parentAnswer-container");

let clickCount = 0;

buttonElement.addEventListener('click', function () {
    clickCount++;

    if (clickCount == 1) {
        title.textContent = 'You grab your special MPF gadget from your locker, and head to the teleportation room.';

        description.textContent = "You have been given several time periods, and locations to check out. \n\n These locations are experiencing fluctuating anomalies that have been caused by the traveler. \nYour MPF Gadget is a Mk.1. \nMk.1 MPF Gadgets are accurate, but cause anomalies within the specific time period, if you're there for too long. To circumvent this, the gadget will automatically open a portal and force you back to the main hub when 5 minutes have been reached within a specific universe. Since you are experienced, 5 minutes is more than enough time to get the necessary information needed to find the traveler. Now it's only a matter of where to look..."
    }
    else if (clickCount == 2)
    {
        parentAnswerContainer.style.display = 'block';
        title.textContent = '';
        description.textContent = "";
        buttonElement.style.display = 'none';
    }
});