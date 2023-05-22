/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
var myInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Hyrum J Bullock";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = ["images/childhoodPhoto.jpg", "meAsChild"]
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favFood = ["mac&cheese", "pizza", "sprite"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["building with lego", "3D modeling", "coding"];
// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
var location1 = {
    place: "",
    length: ""
};

myInfo.placesLived.push(location1);

// Step 8: For each property, add appropriate values as strings
location1.place = "67 Brisbane Dr, Kitchener, Canada "
location1.length = ":2004-2016"

// Step 9: Add additional objects with the same properties for each place you've lived
var location2 = {
    place: "3510 95th Pl SE, Everett, WA ",
    length: ":2016-2022"
};
var location3 = {
    place: "336 W 3rd S, Rexburg, ID ",
    length: ":2022-2023"
};
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = myInfo.photo[0];
var myPhoto = document.getElementById("photo")
myPhoto.style.height = '300px';
myPhoto.style.width = '240px';

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = myInfo.photo[1];

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

function createListElement(item, id){
    var listElem = document.createElement("LI");
    var txt = document.createTextNode(item);
    listElem.appendChild(txt);
    document.getElementById(id).appendChild(listElem);

}

myInfo.favFood.forEach(function(food, id){
    createListElement(food, "favorite-foods")
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myInfo.hobbies.forEach(function(hobby, id){
    createListElement(hobby, "hobbies")
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived

function listProperties(duration, place, id){
    var dtElem = document.createElement("DT");
    var ddElem = document.createElement("DD");

    var placeTxt = document.createTextNode(place);
    var durTxt = document.createTextNode(duration);

    dtElem.appendChild(placeTxt);
    document.getElementById(id).appendChild(dtElem);

    dtElem.appendChild(durTxt);
    document.getElementById(id).appendChild(ddElem);

}

var id = "places-lived"
listProperties(location1.length, location1.place, id)

listProperties(location2.length, location2.place, id)

listProperties(location3.length, location3.place, id)

