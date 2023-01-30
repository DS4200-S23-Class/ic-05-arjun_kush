
let count = 0;

// button function
function buttonClicked() {
	console.log("button was clicked!");
	

	let buttonDiv = document.getElementById("button-div");

	count = count + 1

	buttonDiv.innerHTML = "Number of times button clicked: " + count;
}