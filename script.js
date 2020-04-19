$(document).ready(function () {
  //Define a QuizItem object to store the question and the correct answer
  var questionNumber = 0;

  var quizItem = {
    id: "",
    question: "",
    answerOne: {
      answerText: "",
      correct: false,
    },
    answerTwo: {
      answerText: "",
      correct: false,
    },
    answerThree: {
      answerText: "",
      correct: false,
    },
    answerFour: {
      answerText: "",
      correct: false,
    },
  };

  //Define quiz
  var quiz = {
    quizItem: [],
    score: 0,
    highscore: 0,

    //Initialize function is used to load 10 questions into the quiz
    initialize: function () {
      //populate quiz wuth 1st question
      quiz.quizItem.push({
        id: "1",
        question:
          "Who did Patrick Roy Goalie for in 2001 and win the Stanley Cup",
        answerOne: { answerText: "Los Angeles Kings", correct: false },
        answerTwo: { answerText: "Colorado Avalanche", correct: true },
        answerThree: { answerText: "Pittsburgh Penguins", correct: false },
        answerFour: { answerText: "New York Rangers", correct: false },
      });

      // //populate quiz wuth 2nd question
      quiz.quizItem.push({
        id: "2",
        question: "Which NFL Team won the 1st two Superbowls?",
        answerOne: { answerText: "Chicago Bears", correct: false },
        answerTwo: { answerText: "New York Jets", correct: false },
        answerThree: { answerText: "Minnesota Vikings", correct: false },
        answerFour: { answerText: "Greenbay Packers", correct: true },
      });

      // //populate quiz wuth 3rd question
      quiz.quizItem.push({
        id: "3",
        question:
          "What MLB Baseball team loast in the World Series to St Louis in 7 games in 1982?",
        answerOne: { answerText: "New Your Yankees", correct: false },
        answerTwo: { answerText: "Boston Red Sox", correct: false },
        answerThree: { answerText: "Milwaukee Brewers", correct: true },
        answerFour: { answerText: "Atlanta Braves", correct: false },
      });

      // //populate quiz wuth 4th question
      quiz.quizItem.push({
        id: "4",
        question: "How many Super Bowl wins do the Greenbay Packers have?",
        answerOne: { answerText: "1", correct: false },
        answerTwo: { answerText: "2", correct: false },
        answerThree: { answerText: "3", correct: false },
        answerFour: { answerText: "4", correct: true },
      });

      // //populate quiz wuth 5th question
      quiz.quizItem.push({
        id: "5",
        question: "What team did Joe Montana play most of his career with?",
        answerOne: { answerText: "San Francisco 49ers", correct: true },
        answerTwo: { answerText: "Chicago Bears", correct: false },
        answerThree: { answerText: "Miami Dolphins", correct: false },
        answerFour: { answerText: "New York Jets", correct: false },
      });

      // //populate quiz wuth 6th question
      quiz.quizItem.push({
        id: "6",
        question: "Who wore the retired number 21 for the Colorado Avalanche?",
        answerOne: { answerText: "Adam Foote", correct: false },
        answerTwo: { answerText: "Patrick Roy", correct: false },
        answerThree: { answerText: "Peter Forsberg", correct: true },
        answerFour: { answerText: "Joe Sakic", correct: false },
      });

      //populate quiz wuth 7th question
      quiz.quizItem.push({
        id: "7",
        question:
          "How many strike in bowling to you have to roll in a row for a Turkey?",
        answerOne: { answerText: "2", correct: false },
        answerTwo: { answerText: "3", correct: true },
        answerThree: { answerText: "4", correct: false },
        answerFour: { answerText: "10", correct: false },
      });

      //populate quiz wuth 8th question
      quiz.quizItem.push({
        id: "8",
        question: "How many teams are there in Major League Baseball?",
        answerOne: { answerText: "24", correct: false },
        answerTwo: { answerText: "26", correct: false },
        answerThree: { answerText: "28", correct: false },
        answerFour: { answerText: "30", correct: true },
      });

      //populate quiz wuth 9th question
      quiz.quizItem.push({
        id: "9",
        question: "Who is the worst Football Team in the NFL?",
        answerOne: { answerText: "Chicago Bears", correct: true },
        answerTwo: { answerText: "Dallas Cowboys", correct: false },
        answerThree: { answerText: "Minnesota Vikings", correct: false },
        answerFour: { answerText: "Oakland Raiders", correct: false },
      });

      //populate quiz wuth 10th question
      quiz.quizItem.push({
        id: "10",
        question: "Which team won the World Series in 2019?",
        answerOne: { answerText: "New York Yahkees", correct: false },
        answerTwo: { answerText: "San Francisco Giants", correct: false },
        answerThree: { answerText: "Arizona Diamondbacks", correct: false },
        answerFour: { answerText: "Washington Nationals", correct: true },
      });
    },
  };

  function answerOneEventHandler() {
    if (quiz.quizItem[questionNumber].answerOne.correct) {
      console.log(true);
      $("#right-wrong-display").text("Correct");
    } else {
      console.log(false);
    }
    questionNumber++;
    if (questionNumber < quiz.quizItem.length) {
      //delay so the user can see if they answer correctly
      setTimeout(function () {
        $("#right-wrong-display").text("");
        displayQuestion(questionNumber);
      }, 150);
    } else {
      gameOver();
    }
  }

  function answerTwoEventHandler() {
    if (quiz.quizItem[questionNumber].answerTwo.correct) {
      console.log(true);
      $("#right-wrong-display").text("Correct");
    } else {
      console.log(false);
      $("#right-wrong-display").text("Wrong");
    }
    questionNumber++;
    if (questionNumber < quiz.quizItem.length) {
      //delay so the user can see if they answer correctly
      setTimeout(function () {
        $("#right-wrong-display").text("");
        displayQuestion(questionNumber);
      }, 150);
    } else {
      gameOver();
    }
  }

  function answerThreeEventHandler() {
    if (quiz.quizItem[questionNumber].answerThree.correct) {
      console.log(true);
      $("#right-wrong-display").text("Correct");
    } else {
      console.log(false);
      $("#right-wrong-display").text("Wrong");
    }
    questionNumber++;
    if (questionNumber < quiz.quizItem.length) {
      //delay so the user can see if they answer correctly
      setTimeout(function () {
        $("#right-wrong-display").text("");
        displayQuestion(questionNumber);
      }, 150);
    } else {
      gameOver();
    }
  }

  function answerFourEventHandler() {
    if (quiz.quizItem[questionNumber].answerFour.correct) {
      console.log(true);
      $("#right-wrong-display").text("Correct");
    } else {
      console.log(false);
      $("#right-wrong-display").text("Wrong");
    }
    questionNumber++;
    if (questionNumber < quiz.quizItem.length) {
      //delay so the user can see if they answer correctly
      setTimeout(function () {
        $("#right-wrong-display").text("");
        displayQuestion(questionNumber);
      }, 150);
    } else {
      gameOver();
    }
  }

  function displayQuestion(i) {
    // clean up question display
    $("#quiz-question").remove();
    $("#answer-display").empty();

    //Display the questions on the page
    var question = $("<h5>");
    question.addClass("card-body");
    question.attr("id", "quiz-question");
    question.text(quiz.quizItem[i].question);
    $("#question-display").append(question);

    //Prep to display answers
    var answerOne = $("<button>");
    var answerTwo = $("<button>");
    var answerThree = $("<button>");
    var answerFour = $("<button>");

    answerOne.addClass("btn-block btn-primary");
    answerTwo.addClass("btn-block btn-primary");
    answerThree.addClass("btn-block btn-primary");
    answerFour.addClass("btn-block btn-primary");

    answerOne.attr("id", "answer-1");
    answerTwo.attr("id", "answer-2");
    answerThree.attr("id", "answer-3");
    answerFour.attr("id", "answer-4");

    answerOne.text(quiz.quizItem[i].answerOne.answerText);
    answerTwo.text(quiz.quizItem[i].answerTwo.answerText);
    answerThree.text(quiz.quizItem[i].answerThree.answerText);
    answerFour.text(quiz.quizItem[i].answerFour.answerText);

    $("#answer-display").append(answerOne);
    $("#answer-display").append(answerTwo);
    $("#answer-display").append(answerThree);
    $("#answer-display").append(answerFour);

    //Define on-click event handlers for the newly appended answers
    $("#answer-1").on("click", answerOneEventHandler);
    $("#answer-2").on("click", answerTwoEventHandler);
    $("#answer-3").on("click", answerThreeEventHandler);
    $("#answer-4").on("click", answerFourEventHandler);
  }

  //Initialize the quiz with loading the questions and setting buttons to hidden
  function initialize() {
    console.log("I am here");
    var intro = $("<h5>");
    intro.addClass("card-body text-center");
    intro.attr("id", "quiz-intro");
    intro.text(
      "Try to answer the following Sports-related questions within the time-limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    );
    $("#question-display").append(intro);

    //Display Start button
    var btnStart = $("<button>");
    btnStart.addClass("btn btn-primary");
    btnStart.attr("id", "btn-start");
    btnStart.attr("type", "button");
    btnStart.text("Start Quiz");
    $("#btn-start-display").append(btnStart);
    $("#btn-start").on("click", function () {
      $("#quiz-intro").remove();
      $("#btn-start").remove();

      //load the first questions
      displayQuestion(questionNumber);
    });

    quiz.initialize();
  }

  function gameOver() {
    $("#quiz-question").text("Game Over");
    $("#answer-1").hide();
    $("#answer-2").hide();
    $("#answer-3").hide();
    $("#answer-4").hide();
    console.log("Game Over");
  }

  initialize();
});
