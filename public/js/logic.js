/*
Below is kind of just logic testing and me writing down what I think would work. Every card has a unique id that is auto incremented, we have two type of cards.

Card - has a description and 3 answer options
Continue Card - has a title, description, and continue button

Every card and continue card will have a unique id because of our model

id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

I've also assigned a class to each Card answer option of either button-1, button-2, button-3

<p class="btn" button-1>${card.answerChoice1}</p>
<p class="btn" button-2>${card.answerChoice2}</p>
<p class="btn" button-3>${card.answerChoice3}</p>

We can set a variable to a button something like

 var button1 = document.getElementById('button-1');
 var button2 = document.getElementById('button-2');
 var button3 = document.getElementById('button-3');

 And we can also set a variable of what card we are currently looking at, maybe do something like

 currentCard = this.card.id

 From then we can apply our if/switch statement logic... Example...

 if(currentCard == 1) <--We are on the first card
    if(button1.clicked)
        {currentCard == 5} <--We go to the fifth card
    if(button2.clicked)
        (currentCard == 8) <-- We go to the eigth card
    if(button3.clicked)
        (currentCard == 10) <-- we go to the tenth card

*/


var button1 = document.querySelector('.button-1');

button1.addEventListener("click", function() {
    console.log("Button 1 has been clicked!");
  });

