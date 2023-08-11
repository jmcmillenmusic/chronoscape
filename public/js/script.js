require('dotenv').config();

import { createClient } from 'pexels';

const client = createClient(process.env.PEXELS_API_KEY);

bgImage = document.querySelector('.background-image');

client.photos.show({ id: 96381 })
    .then(data => {
        console.log(data);
        // const bgSource = data.src.original;
        // bgImage.src = bgSource;
    })
    .catch(error => {
        console.log(error);
    });

// let pexelsApiUrl = "https://api.pexels.com/v1/"

// fetch(nasaApiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Request to Pexels API failed');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Check if there are any images available in the response
//     if (data.collection.items.length > 0) {
//       // Filter the images to select a larger image (e.g., image with "large" in the description)
//       const filteredImages = data.collection.items.filter(item => item.data[0].description.includes('2003'));
//       if (filteredImages.length > 0) {
//         var imageUrl = filteredImages[0].links[0].href;
//         starPhoto.setAttribute('src', imageUrl);
//       } else {
//         // If no larger image found, fallback to the first image
//         var imageUrl = data.collection.items[0].links[0].href;
//         starPhoto.setAttribute('src', imageUrl);
//       }
//     } else {
//       updateResults(''); // No image found
//     }
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//     // Display an error message to the user or perform other actions
//   });