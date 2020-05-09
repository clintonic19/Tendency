
function submitAnswer(){
	var total = 5;
	var score = 0;

	//Get user input
	 var q1 = document.forms["quizForm"]["q1"].value;
	 var q2 = document.forms["quizForm"]["q2"].value;
	 var q3 = document.forms["quizForm"]["q3"].value;
	 var q4 = document.forms["quizForm"]["q4"].value;
	 var q5 = document.forms["quizForm"]["q5"].value;

	 //validations
	 for (n = 1; n <= total; n++) {
		if (eval ('q'+n) == null || eval ('q'+n) == '') {
	 	alert('You missed Question '+ n);
	 	return false;
	 }
		
	}

	//correct answers
	var answers =["c", "a", "d", "c", "b"];

	//check answers

	for (n = 1; n <= total; n++)

	if ( eval ('q'+n)== answers[n-1]) {
		score++
	}

	//display results
	var results = document.getElementById('results');
	results.innerHTML = 'You scored <span>'+score+'</span> out of <span>'+total+'</span> Questions </h3>';
	
	alert('You Scored '+score+' out of  '+total+' Questions');

	return false;
}