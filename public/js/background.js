const background = document.querySelector('#background-image');
const headerSec = document.querySelector('.hero-sec');
const mainSec = document.querySelector('.main-body');

// Set the initial background image when the player starts the game
background.setAttribute('src', 'https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg');

$(window).on('load', function() {
    // Animate loader off screen
    function complete() {
        $(".loader").fadeOut( 500, "linear");
        headerSec.style.display = 'block';
        mainSec.style.display = 'block';
    }
    setTimeout(complete, 3000)
});

// Switch/case to compare which question the player is on and set the background image source based on their location in the story
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
    case 14: //Detroit 2038
        background.setAttribute('src', 'https://images.pexels.com/photos/169677/pexels-photo-169677.jpeg');
        break;
    case 15: //Eden Club
        background.setAttribute('src', 'https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg');
        break;
    case 16: //Cyberlife Warehouse
        background.setAttribute('src', 'https://images.pexels.com/photos/15692270/pexels-photo-15692270/free-photo-of-an-empty-warehouse.jpeg');
        break;
    case 17: //Cyberlife Tower
        background.setAttribute('src', 'https://images.pexels.com/photos/833460/pexels-photo-833460.jpeg');
        break;
    case 18: //Village Hidden in the Leaves
        background.setAttribute('src', 'https://images.pexels.com/photos/17626602/pexels-photo-17626602/free-photo-of-village-in-the-valley.jpeg');
        break;
    case 19: //Hokage Mansion
        background.setAttribute('src', 'https://images.pexels.com/photos/3155265/pexels-photo-3155265.jpeg');
        break;
    case 20: //Ichiraku Ramen
        background.setAttribute('src', 'https://images.pexels.com/photos/1979828/pexels-photo-1979828.jpeg');
        break;
    case 21: //Hokage Rock
        background.setAttribute('src', 'https://images.pexels.com/photos/17706482/pexels-photo-17706482/free-photo-of-writings-on-gate-to-buddhist-shrine.jpeg');
        break;
    case 22: //Danville, Tri-State
        background.setAttribute('src', 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg');
        break;
    case 23: //Googolplex Mall
        background.setAttribute('src', 'https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg');
        break;
    case 24: //Doofenschmirtz Evil Incorporated
        background.setAttribute('src', 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg');
        break;
    case 25: //Danville Arena
        background.setAttribute('src', 'https://images.pexels.com/photos/2177814/pexels-photo-2177814.jpeg');
        break;
};