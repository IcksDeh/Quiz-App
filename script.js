let currentQuestion = 0; 

function init(){
    showNumberAllQuestions();
    showQuestion();
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

// function markAnswer(selection){
//     let markChosenAnswer = document.getElementById('answer_'+selection);

    
// }