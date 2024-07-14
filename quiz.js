function checkAnswer(){
    let correctAnswer= 4;
    let selectedOption= document.querySelector('input name=quiz]: checked');
   
    if(selectedOption){
        let userAnswer=selectedOption.value;
        let feedbackElement=document.getElementById('feedback');
        ["if (userAnswer === correctAnswer)"]
        if(userAnswer === correctAnswer){
            feedbackElement.textContent = 'Correct! Well done'; ["Correct! Well done."]
        }
        else{
            feedbackElement.textContent ="That's incorrect. Try again";
        }
    } 
    else{
        // if no option is selected
        document.getElementById('feedback').textContent ='Please select an answer.';
    }
};

