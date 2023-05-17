/* Lesson 3 */

//Hyrum Bullock 
//2023/5/9 - 2023/5/15

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
// Step 2: In the function, return the sum of the parameters number1 and number2
function add(num1, num2) {
    //num1 = Number(num1);
    //num2 = Number(num2);
    var sum = num1 + num2;
    return sum;
}

// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    //collects the value from the HTML form control
    var num1 = Number(document.getElementById("addend1").value);
    var num2 = Number(document.getElementById("addend2").value);
    var sum = add(num1, num2);

    //sumStr = sum.toString();
    // Step 4: Assign the return value to an HTML form element with an ID of sum
    document.getElementById("sum").value = sum;
}




// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(num1, num2) {
    var diff = num1 - num2;
    return diff;
}

const subtractNumbers = function(){
    //collects the value from the HTML form control
    var num1 = Number(document.getElementById("minuend").value);
    var num2 = Number(document.getElementById("subtrahend").value);
    var diff = subtract(num1, num2);

    document.getElementById("difference").value = diff;
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

let multiply = function(num1, num2) {
    var product = num1 * num2;
    return product;
}

let multiplyNumbers = function(){
    //collects the value from the HTML form control
    var num1 = Number(document.getElementById("factor1").value);
    var num2 = Number(document.getElementById("factor2").value);
    var product = multiply (num1, num2);

    document.getElementById("product").value = product;
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

function divide(num1, num2) {
    var product = num1 / num2;
    return product;
}

function divideNumbers(){
    //collects the value from the HTML form control
    var num1 = Number(document.getElementById("dividend").value);
    var num2 = Number(document.getElementById("divisor").value);
    var quotient = divide(num1, num2);

    document.getElementById("quotient").value = quotient;
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
var date = new Date;
// Step 2: Declare a variable to hold the current year
var year = "";
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = date.getFullYear()

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.getElementById("year").textContent = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let nums = []
var arrayNum = 0
while (nums.length <= 24){
    arrayNum += 1
    nums.push(arrayNum)
}
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.getElementById("array").textContent = nums;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let oddNums = nums.filter((num) => num % 2 === 1);
document.getElementById("odds").textContent = oddNums;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evenNums = nums.filter((num) => num % 2 === 0);
document.getElementById("evens").textContent = evenNums;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfNums = nums.reduce(add);
document.getElementById("sumOfArray").textContent = sumOfNums;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let numsTimesTwo = nums.map((num) => num * 2);
document.getElementById("multiplied").textContent = numsTimesTwo;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = numsTimesTwo.reduce(add)
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;