const background = document.querySelector('#background-image');
const headerSec = document.querySelector('.hero-sec');
const mainSec = document.querySelector('.main-body');

// Set the initial background image when the player starts the game
background.setAttribute('src', 'https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg');

// Switch/case to compare which question the player is on and set the background image source based on their location in the story
$(window).on('load', function() {
    // Animate loader off screen
    function complete() {
        $(".loader").fadeOut( 500, "linear");
        headerSec.style.display = 'block';
        mainSec.style.display = 'block';
    }
    setTimeout(complete, 3000)
});

// 

switch (questions.id) {
    case 2: //Berlin
        background.setAttribute('src', 'https://images.pexels.com/photos/11477798/pexels-photo-11477798.jpeg');
        break;
    case 3: //Eisenwald Prison
        background.setAttribute('src', 'https://images.pexels.com/photos/1309902/pexels-photo-1309902.jpeg');
        break;
    case 4: //Volkshalle
        background.setAttribute('src', 'https://images.pexels.com/photos/15787089/pexels-photo-15787089/free-photo-of-exterior-of-a-run-down-house.jpeg');
        break;
    case 5: //Reich Chancellory
        background.setAttribute('src', 'https://images.pexels.com/photos/161756/bunker-air-raid-shelter-world-war-bombing-161756.jpeg');
        break;
    case 6: //Future City
        background.setAttribute('src', 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg');
        break;
    case 7: //Lizzie's Bar
        background.setAttribute('src', 'https://images.pexels.com/photos/261043/pexels-photo-261043.jpeg');
        break;
    case 8: //Afterlife Club
        background.setAttribute('src', 'https://images.pexels.com/photos/219095/pexels-photo-219095.jpeg');
        break;
    case 9: //Arasaka Tower
        background.setAttribute('src', 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg');
        break;
    case 10: //Gotham
        background.setAttribute('src', 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg');
        break;
    case 11: //Arkham Asylum
        background.setAttribute('src', 'https://images.pexels.com/photos/5377053/pexels-photo-5377053.jpeg');
        break;
    case 12: //Bat Cave
        background.setAttribute('src', 'https://images.pexels.com/photos/10740593/pexels-photo-10740593.jpeg');
        break;
    case 13: //Gotham Prison
        background.setAttribute('src', 'https://images.pexels.com/photos/6064891/pexels-photo-6064891.jpeg');
        break;
}