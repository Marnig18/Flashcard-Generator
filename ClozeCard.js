var fs = require("fs");
var inquirer = require("inquirer")


function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;

}

ClozeCard.prototype.partial = function(){
	var partialText = this.text.replace(this.cloze, "...");
	console.log(partialText);
		
	}


var newCard  = new ClozeCard("DNA stands for deoxyribonucleic acid ", "deoxyribonucleic acid");
	newCard.partial();

// 



// fs.readFile("cloze.json", "UTF8", function(err, data){
// 	if(err) {
// 		console.log(err);
// 	}

// 	var cardArr = JSON.parse(data);
// 	var count = 0;
// 	var i = 0

// // for(var k=0; k <cardArr.basic.length; k++){

// 	function createCard(){
// 		if(count<cardArr.cloze.length){
// 			inquirer.prompt([

// 			{
// 				name: "question",
// 				message: cardArr.cloze[i].text,
// 				type: "input"
// 			}	
// 		]).then(function(answer){

				


// 				if(answer.question == cardArr.cloze[i].cloze){
// 					console.log("You are correct");
// 					console.log("----------------------------")
// 				}
// 				else{
// 					console.log("That's incorrect");
// 					console.log("The correct answer is " + cardArr.cloze[i].cloze)
// 					console.log("----------------------------")

// 				}

// 				count++

// 				i++

// 				createCard();

// 		});
	
// 	}
// // }
// }

// createCard();
	
// });



// fs.readFile("cloze.json", "UTF8", function(err, data){
// 	if(err) {
// 		console.log(err);
// 	}

// 	var cardArr = JSON.parse(data);
// 	var count = 0;
// 	var i = 0;

// // for(var k=0; k <cardArr.basic.length; k++){


// 	function createCard(){

// 		if(count<cardArr.cloze.length){

// 			for(var x=0; x< cardArr.cloze.length; x++){
// 				cardArr.cloze[x].partial();
// 			}
			
		
	
// 			inquirer.prompt([

// 			{
// 				name: "question",
// 				message: partialText,
// 				type: "input"
// 			}	
// 		]).then(function(answer){

				


// 				if(answer.question == cardArr.cloze[i].cloze){
// 					console.log("You are correct");
// 					console.log("----------------------------")
// 				}
// 				else{
// 					console.log("That's incorrect");
// 					console.log("The correct answer is " + cardArr.cloze[i].cloze)
// 					console.log("----------------------------")

// 				}

// 				count++

// 				i++

// 				createCard();

// 		});
	
// 	}
// // }
// }

// createCard();
	
// });










