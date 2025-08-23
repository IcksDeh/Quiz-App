let currentQuestion = 0; 


function init(){
    showNumberAllQuestions();
    showQuestion();
    showNumberCurrentQuestion();
}

function showNumberAllQuestions(){
    let numberAllQuestions = document.getElementById('nummber_all_questions');
    numberAllQuestions.innerHTML = questions.length;
}

function showQuestion(){
    let question = questions[currentQuestion].question;
    let showQuestion = document.getElementById('show_question');
    showQuestion.innerHTML = question;

    showAnswers();
    showNumberCurrentQuestion();
}

function showAnswers(){
    let answerOne = document.getElementById('answer_1');
    let answerTwo = document.getElementById('answer_2');
    let answerThree = document.getElementById('answer_3');
    let answerFour = document.getElementById('answer_4');

    answerOne.innerHTML = questions[currentQuestion].answer_1;
    answerTwo.innerHTML = questions[currentQuestion].answer_2;
    answerThree.innerHTML = questions[currentQuestion].answer_3;
    answerFour.innerHTML = questions[currentQuestion].answer_4;
}

function markAnswer(selection){
    let markChosenAnswer = document.getElementById('answer_'+selection);
    let rightAnswer = document.getElementById('answer_'+ questions[currentQuestion].right_answer);
    if(selection == questions[currentQuestion].right_answer){
        markChosenAnswer.parentNode.classList.add('bg-success');
    }
    else {
        markChosenAnswer.parentNode.classList.add('bg-danger');
        rightAnswer.parentNode.classList.add('bg-success');
    }
    let nextButton = document.getElementById('next_button');
    nextButton.disabled = false;
}

function nextQuestion(){
    currentQuestion += 1;
    showQuestion();
    
    let nextButton = document.getElementById('next_button');
    nextButton.disabled = true;

    resetCardColor();
}

function showNumberCurrentQuestion(){
    let numberCurrentQuestion = document.getElementById('number_current_question');
    numberCurrentQuestion.innerHTML = currentQuestion + 1;
}

function resetCardColor(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


