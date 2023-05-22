/* Lesson 2 */
// by hyrum bullock 2023/4/29
/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var username = "hyrum"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = username;

// Step 3: declare and instantiate a variable to hold the current year
var year = 2023

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

var myPhotoSrc = "images/childhoodPhoto.jpg"

document.getElementById("photo").src = myPhotoSrc;

var myPhoto = document.getElementById("photo")

myPhoto.style.height = '300px';
myPhoto.style.width = '240px';


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var favFood = ["pizza", " KD mac and cheese", " rice"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = favFood;

// Step 3: declare and instantiate a variable to hold another favorite food
var favFoodExtra = " meat"

// Step 4: add the variable holding another favorite food to the favorite food array
favFood.push(favFoodExtra)

// Step 5: repeat Step 2
document.querySelector('#food').textContent = favFood;

// Step 6: remove the first element in the favorite foods array
favFood.shift()

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFood;

// Step 8: remove the last element in the favorite foods array
favFood.splice(favFood.length-1)

// Step 7: repeat Step 2
document.querySelector('#food').textContent = favFood;



