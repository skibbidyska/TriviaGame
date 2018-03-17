var questionSet = [{
    question: "What is Spiderman's real name?",
    options: ["Bob Barker", "Paul Simon", "Peter Parker", "Billie Jo"],
    answer: 2,
},
{
    question: "What is Wonder Womans's real name?",
    options: ["Sue Blue", "Princess Wonder", "Diana Prince", "Laura Prince"],
    answer: 2,
},
{
    question: "What is Batman's real name?",
    options: ["Linda Collete", "Bill Ray", "Tom Hellman", "Bruce Wayne"],
    answer: 3,
},
{
    question: "What is Black Panthers's real name?",
    options: ["T'Challa", "T'Chana", "T'Hacka", "T'Cha"],
    answer: 0,
},
{
    question: "What is Superman's real name?",
    options: ["Clark Kent", "Clark Bent", "Will Smith", "Bobby Brown"],
    answer: 0,
},
{
    question: "What is Steels's real name?",
    options: ["John Steel", "Larry Iron Wells", "John Henry Irons", "John Williams"],
    answer: 2,
}];

var currentQuestion = 0;
var wins = 0;
var losses = 0;
var clicks = 0;
var time = 0;
var interval = 0;
var userChoice;


$('#start').on('click', function () {
    $(this).hide();
    startGame();
});



function startGame() {
    $("#answer").empty();
    $("#wins").html("<h4>" + wins + "</h4>");
    $("#losses").html("<h4>" + losses + "</h4>");
    $("#question").empty();
    $("#options").empty();
    $("#next").show();
    nextQuestion();
}

function nextQuestion() {
    $("#question").html("<h3>" + questionSet[currentQuestion].question + "</h3>")
    for (var i = 0; i < 4; i++) {
        var option = $("<button>");
        option.text(questionSet[currentQuestion].options[i]);
        option.attr({ "data-index": i });
        option.addClass("optionChoice m-3 btn btn-primary");
        $("#options").append(option);
    }
    countdown();
    $('.optionChoice').on('click', function () {
        clicks++;
        userChoice = $(this).data("index");
        clearInterval(time);
        answerOption();

    });
}

function countdown() {
    interval = 12;
    $("#timer").html("<h3>" + interval + "</h3>");
    time = setInterval(showCount, 1000);
}

function showCount() {
    interval--;
    $("#timer").html("<h3>" + interval + "</h3>");
    if (interval === 0) {
        clearInterval(time);
        answerOption();
    }
}

function answerOption(){
    $("#question").empty();
    $("#options").empty();
    if(questionSet[currentQuestion].answer === userChoice){
        console.log("correct");
        wins++;
        $("#wins").html("<h3>" + wins + "</h3>");

    }
    else if(questionSet[currentQuestion].answer != userChoice){
        console.log("incorrect");
        losses++;
        $("#losses").html("<h3>" + losses + "</h3>");
    }
    if(clicks === questionSet.length){
        setTimeout(resetGame, 4000);
        console.log("restart game")
    }
    else{
        currentQuestion++;
        nextQuestion();
        console.log("nextquestion")
        
    }
}

function resetGame(){
    clicks = 0;
    currentQuestion = 0;
    wins = 0;
    losses = 0;
    $("#wins").empty();
    $("#losses").empty();
    $("#timer").empty();
    $("#start").show();
}