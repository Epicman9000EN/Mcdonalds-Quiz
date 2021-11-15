function Submit() {
	var Score = 0
	var Nuggets = document.getElementById("nuggets").value;
	var Cheeseburger = document.getElementById("Sauce").value;
	
	var Yes = document.querySelector("#Yes").checked;
	console.log(Yes)
	var No = document.querySelector("#No").checked;
	console.log(No)
	var Maybe = document.querySelector("#Maybe").checked;
	console.log(Maybe)
	var Sometimes = document.querySelector("#Sometimes").checked;
	console.log(Sometimes)
	
	var Cheese = document.querySelector("#Cheese").checked;
	console.log(Cheese)
	var Pickles = document.querySelector("#Pickles").checked;
	console.log(Pickles)
	var Lettuce = document.querySelector("#Lettuce").checked;
	console.log(Lettuce)
	var Onions = document.querySelector("#Onions").checked;
	console.log(Onions)
	
	if (Yes == true)  {
		Score += 1;
	}
	if (Nuggets == 20) {
		Score += 1;
	}
	console.log(Cheeseburger)
	if (Cheeseburger.includes("ketchup") == true && Cheeseburger.includes("mustard") == true) {
		Score += 1;
	}
	if (Lettuce == true && Cheese == false && Pickles == false && Onions == false) {
		Score += 1;
	}
	console.log(Score)
	document.getElementsByClassName("Nuggets")[0].innerHTML = "Correct Answer is 20"
	document.getElementsByClassName("Cheeseburger")[0].innerHTML = "Correct Answer is Ketchup and Mustard"
	document.getElementsByClassName("Chicken")[0].innerHTML = "Correct Answer is Yes"
	document.getElementsByClassName("Quarter")[0].innerHTML = "Correct Answer is Lettuce"
	document.getElementsByClassName("score")[0].innerHTML = "Your Score: " + Score + "/4"
}