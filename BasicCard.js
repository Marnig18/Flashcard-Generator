var fs = require("fs");
var inquirer = require("inquirer")



function BasicCard (front, back){
	this.front = front;
	this.back = back;
}



fs.readFile("basic.json", "UTF8", function(err, data){
	if(err) {
		console.log(err);
	}

	var cardArr = JSON.parse(data);
	var count =0;
	var i = 0;

// for(var k=0; k <cardArr.basic.length; k++){

	function createCard(){
	
		if(count<cardArr.basic.length){
			inquirer.prompt([

				{
					name: "question",
					message: cardArr.basic[i].front,
					type: "input"
				}
			]).then(function(answer){

				if(answer.question == cardArr.basic[i].back){
					console.log("You are correct");
					console.log("----------------------------")
				}
				else{
					console.log("That's incorrect");
					console.log("The correct answer is " + cardArr.basic[i].back)
					console.log("----------------------------")
				}

				count++

				i++

				createCard();

		});
	
	}
	
}

createCard();
	
});









	






