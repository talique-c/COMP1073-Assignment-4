/*-- VARIABLES --*/
var dogButton = document.getElementById('dogFetchButton');
var catButton = document.getElementById('catFetchButton');
var dogUserNumber = document.getElementById('dogUserNumber');
var catUserNumber = document.getElementById('catUserNumber');
let errorMsg1 = document.getElementById('errorMsg1');
let errorMsg2 = document.getElementById('errorMsg2');
let imgContainer = document.querySelector('.img-container');

/* Dog API documentation: https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t */
/* Cat API documentation: https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t*/

/*-- FUNCTIONS --*/
// When dog button clicked
dogButton.onclick = function () {
    // Sets the URL
    let url = 'https://api.thedogapi.com/v1/images/search?limit=10';
    // Use the URL to fetch the data
    fetch(url)
        // Returns a promise, which is used to get the response
        .then(response => {
            // If there's something wrong with the response throw an error and show message
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            // If the response is fine, return the JSON object
            return response.json();
        })
        // Shows the result
        .then(result => {
            // Clears everything
            imgContainer.innerHTML = '';
            errorMsg1.textContent = '';
            // If the value entered is greater than 10, show an error
            if (dogUserNumber.value > 10) {
                errorMsg1.textContent = 'Please enter a valid number: 1 - 10';
            } else {
                // Iterate through the user vale inputted and output an image, until the value is reached
                for (let i = 0; i < dogUserNumber.value; i++) {
                    // Creates an image and sets the src to the image URL from the API
                    var dogImage = document.createElement('img');
                    dogImage.src = result[i].url;
                    // Sets attributes - class (for styling) and alt (for accessibility)
                    dogImage.setAttribute('alt', 'Random dog picture');
                    dogImage.setAttribute('class', 'dog-image');
                    // Sets some constraints to limit image sizing
                    dogImage.style.maxWidth = '650px';
                    dogImage.style.maxWidth = '650px';
                    // Appends images to the main image container
                    imgContainer.appendChild(dogImage)
                }
            }
        })
        // Catches any errors and displays them for the user
        .catch(error => errorMsg1.textContent = ` There was an error getting your image: ${error}`);
};

// When cat button clicked
catButton.onclick = function () {
    // Sets the URL
    let url = 'https://api.thecatapi.com/v1/images/search?limit=10';
    // Use the URL to fetch the data
    fetch(url)
        // Returns a promise, which is used to get the response
        .then(response => {
            // If there's something wrong with the response throw an error and show message
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            // If the response is fine, return the JSON object
            return response.json();
        })
        // Shows the result
        .then(result => {
            // Clears everything
            imgContainer.innerHTML = '';
            errorMsg2.textContent = '';
            // If the value entered is greater than 10, show an error
            if (catUserNumber.value > 10) {
                errorMsg2.textContent = 'Please enter a valid number: 1 - 10';
            } else {
                // Iterate through the user vale inputted and output an image, until the value is reached
                for (let i = 0; i < catUserNumber.value; i++) {
                    // Creates an image and sets the src to the image URL from the API
                    var catImage = document.createElement('img');
                    catImage.src = result[i].url;
                    // Sets attributes - class (for styling) and alt (for accessibility)
                    catImage.setAttribute('alt', 'Random cat picture');
                    catImage.setAttribute('class', 'cat-image');
                    // Sets some constraints to limit image sizing
                    catImage.style.maxWidth = '650px';
                    catImage.style.maxWidth = '650px';
                    // Appends images to the main image container
                    imgContainer.appendChild(catImage)
                }
            }
        })
        // Catches any errors and displays them for the user
        .catch(error => errorMsg2.textContent = ` There was an error getting your image: ${error}`);
};
