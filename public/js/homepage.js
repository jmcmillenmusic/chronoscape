
const cardContainer = document.getElementById("cardContainer");
let currentCardIndex = 0;

function displayCard(card) {
    cardContainer.innerHTML = `
        <div class="card w-50 text-center">
            <div class="card-body">
                <h5 class="card-title">${card.description}</h5>
                <p class="btn">${card.answerChoice1}</p>
                <p class="btn">${card.answerChoice2}</p>
                <p class="btn">${card.answerChoice3}</p>
                <a id="nextCardButton" class="btn btn-primary">Next Card</a>
            </div>
        </div>
    `;


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


// Initial card display
fetchAndDisplayNextCard();

