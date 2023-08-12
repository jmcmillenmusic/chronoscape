
const cardContainer = document.getElementById("cardContainer");
let currentCardIndex = 0;

function displayCard(card) {
    cardContainer.innerHTML = `
        <div class="card w-50 text-center">
            <div class="card-body">
                <h5 class="card-title">${card.description}</h5>
                <p class="btn button-1">${card.answerChoice1}</p>
                <p class="btn button-2">${card.answerChoice2}</p>
                <p class="btn button-3">${card.answerChoice3}</p>
                <a id="nextCardButton" class="btn btn-primary">Next Card</a>
            </div>
        </div>
    `;




    var button1 = document.querySelector('.button-1');
    var button2 = document.querySelector('.button-2');
    var button3 = document.querySelector('.button-3');

    //BUTTON LOGIC (ITS GOING TO BE LONG)
    console.log("The card we are currently on is: " + currentCardIndex);

    button1.addEventListener("click", async function() 
    {
        console.log("Button 1 has been clicked!");
        console.log("The card we are currently on is: " + currentCardIndex);

        switch (currentCardIndex) {
            case 1:
                currentCardIndex = 2;
                // displayNextCard(currentCardIndex);
                displayContinueCard(currentCardIndex);
                break;
            case 2:
                currentCardIndex = 5;
                displayNextCard(currentCardIndex);
                break;
            case 5:
                currentCardIndex = 9;
                displayNextCard(currentCardIndex);
                break;    
            case 6:
                currentCardIndex = 8;
                displayNextCard(currentCardIndex);
                break;
            default:
                console.log("Error");
                break;
        };
        });

    button2.addEventListener("click", function() 
    {
    console.log("Button 2 has been clicked!");
    console.log("The card we are currently on is: " + currentCardIndex);

    if (currentCardIndex == 1) 
    {
        currentCardIndex = 3;
        displayNextCard(currentCardIndex);
    }

    else if (currentCardIndex == 2) 
    {
        currentCardIndex = 6;
        displayNextCard(currentCardIndex);
    }
    });

    button3.addEventListener("click", function() 
    {
    console.log("Button 3 has been clicked!");

    if (currentCardIndex == 8) 
        {
            currentCardIndex = 9;
            displayNextCard(currentCardIndex);
        }
    });






    const nextCardButton = document.getElementById("nextCardButton");
    nextCardButton.addEventListener("click", function (event) {
        event.preventDefault();
        fetchAndDisplayNextCard();
    });

    
};



//Did have to use AI for this, I didn't know that you could use async and await when creating functions.
async function fetchAndDisplayNextCard() {
    try {
        const response = await fetch(`/api/cards/${currentCardIndex + 1}`);
        if (response.ok) {
            const cardData = await response.json();
            displayCard(cardData);
            currentCardIndex++;
        } else {
            console.error("Error fetching card data:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching card data:", error);
    }
}

async function displayNextCard(cardIndex) {
    const response = await fetch(`/api/cards/${cardIndex}`);
    const cardData = await response.json();
    displayCard(cardData);
}

async function displayContinueCard(cardIndex) {
    const response = await fetch(`/api/continuecards/${cardIndex}`);
    const cardData = await response.json();
    
    displayCard(cardData);
}

// Initial card display
fetchAndDisplayNextCard();

