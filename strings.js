let testString = "";

//Implement the logic in the reversal function that reverses
//the order of the characters in the string,
//and outputs the result in the DOM, below the text input.
function reversal(testString) {
	//Use the split() method to return a new array. " " is used as the delimiter
	let stringSplit = testString.split(" "); //["teenage", "mutant", "ninja", "turtles"]
	//Use the reverse() method to reverse the new created array
	let stringReverse = stringSplit.reverse(); // ["turtles", "ninja", "mutant", "teenage"]
	//Use the join() method to join all elements of the array into a string
	let stringJoin = stringReverse.join(" "); // "turles ninja mutant teenage"
	//Inserts the text into the DOM as a paragraph element
	document.getElementById("container-1").innerHTML = `Reverse: ${stringJoin}`
}

//Implement the logic in the alphabits function
//that return the characters in alphabetical order,
//and outputs the result in the DOM, below the text input.
function alphabits() {
	//Use the split() method to return a new array. " " is used as the delimiter
	let stringSplit = testString.split(" "); //["teenage", "mutant", "ninja", "turtles"]
	//Use the sort() method to arrange each word in alphabetical order
	let stringSort = stringSplit.sort(); //["mutant", "ninja", "teenage", "turtles"]
	//Use the join() method to join all elements of the array into a string
	let stringJoin = stringSort.join(" "); // "ninja mutant teenage turles"
	document.getElementById("container-2").innerHTML = `Sort: ${stringJoin}`
}

//Implement the logic in the palindrome function that determine
//whether the string is a palindrome. If it is, display the text
//"Your string is a palidrome" in the DOM, below the text input.
function palindrome() {
	let stringSplit = testString.split(" ");
	let stringReverse = stringSplit.reverse();
	let stringJoin = stringReverse.join(" ");
	if (stringJoin === testString) {
		document.getElementById("container-3").innerHTML = `"${stringJoin}" is a palindrome`
	} else {
		document.getElementById("container-3").innerHTML = `"${stringJoin}" is not a palindrome`
	}
}

//When the user presses the enter key in the text input,
//or clicks the button, set the value of the testString variable
//to the value of the input.
let inputBar = document.getElementById("user-input");
let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
	//The text input should only accept letters. No numbers.
	if (isNaN(inputBar.value)) {
  	testString = inputBar.value;
  	inputBar.value = "";
  	//makes the input bar go back into focus to allow for immediate input of new string
  	inputBar.focus();
  	reversal(testString);
		alphabits(testString);
		palindrome(testString);
  } else {
      alert("Invalid characters");
      inputBar.focus();
      return false;
  }
})

document.addEventListener("keyup", function() {
	if (event.keyCode === 13) {
		//The text input should only accept letters. No numbers.
		if (isNaN(inputBar.value)) {
    	testString = inputBar.value;
    	inputBar.value = "";
    	//makes the input bar go back into focus to allow for immediate input of new string
    	inputBar.focus();
    	document.getElementById("container-0").innerHTML = `Original phrase: ${testString}`
	  	reversal(testString);
			alphabits(testString);
			palindrome(testString);
    } else {
	      alert("Invalid characters");
	      inputBar.focus();
	      return false;
    }
  }
})