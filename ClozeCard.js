var fs = require("fs");
var inquirer = require("inquirer")


function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.partialCard = function(){
		 this.partialText = this.text.replace(this.cloze, "...");
		 console.log(this.partialText)
		 	return this.partialText


	}
}


		

// var newCard  = new ClozeCard("DNA stands for deoxyribonucleic acid ", "deoxyribonucleic acid");
// 	var partialText = newCard.partial();

// // 



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



fs.readFile("cloze.json", "UTF8", function(err, data){
	if(err) {
		console.log(err);
	}



	var clCards = []
	var cardArr = JSON.parse(data);

	
		// for(x = 0; x < cardArr.cloze.length; x++){
			
		// 	var card  = new ClozeCard(cardArr.cloze[x])
		// 	clCards.push(card);
			
		// }
	var count = 0;
	var i = 0;


// for(var k=0; k <cardArr.basic.length; k++){

		
	


	function createCard(){

		

		if(count < cardArr.cloze.length){
			// console.log(cardArr.cloze); 
			// console.log('I:' + i)
			console.log(cardArr.cloze[i])
			
				 var newCard = new ClozeCard(cardArr.cloze[i].text, cardArr.cloze[i].cloze);
				 var partial = newCard.partialCard();
				console.log(partial)
			 
			console.log('=====================')

				


			// console.log(typeof cardArr.cloze[i].partialCard)
			// cardArr.cloze[i].partialCard();
		
		
			
			inquirer.prompt([
			 	

				{
					name: "question",
					message: partial,
					type: "input"
				}	
			
		]).then(function(answer){


				if(answer.question == cardArr.cloze[i].cloze){
					console.log("You are correct");
					console.log("----------------------------")
				}
				else{
					console.log("That's incorrect");
					console.log("The correct answer is " + cardArr.cloze[i].cloze)
					console.log("----------------------------")

				}

				count++

				i++

				createCard();

		});
	
// }

	
	
}

	}
	createCard();

});












