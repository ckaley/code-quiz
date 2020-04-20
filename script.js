$(document).ready(function () {
  //Define Global variables used for thi Quiz
  var questionNumber = 0; //Running count for the number of questions
  var timer = $("#timer-display"); //reference to the timer display on the page
  var secondsLeft = 90; //Set the quiz time at 90 seconds
  var lsScore = localStorage.setItem("score", "0"); //local storage variable for score
  var lsInitials = localStorage.setItem("initials", ""); //local storage for initials

  //Object definition for quizItem.  This is made up of a question and four answers, with one answer being correct
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

  //Object definition quiz
  var quiz = {
    quizItem: [], //array of quizItems/Questions
    score: 0, //quiz score

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
        answerOne: { answerText: "New York Yankees", correct: false },
        answerTwo: { answerText: "San Francisco Giants", correct: false },
        answerThree: { answerText: "Arizona Diamondbacks", correct: false },
        answerFour: { answerText: "Washington Nationals", correct: true },
      });
    },
  };

  //Define a event handler if they select the first answer
  function answerOneEventHandler() {
    //Check to see if it is the correct answer.  If yes, display correct.
    if (quiz.quizItem[questionNumber].answerOne.correct) {
      $("#right-wrong-display").text("Correct");
    } else {
      //If incorrect answer, sunbtract 10 seconds from timer and display wrong.
      secondsLeft = secondsLeft - 10;
      $("#right-wrong-display").text("Wrong");
    }
    //increment the question count
    questionNumber++;
    //If question was not the last one, delay for 150 milliseconds so they can see if they were right/wrong
    if (questionNumber < quiz.quizItem.length) {
      //delay so the user can see if they answer correctly
      setTimeout(function () {
        $("#right-wrong-display").text(""); //clear out the right/wrong display
        //display the next question
        displayQuestion(questionNumber);
      }, 150);
    } else {
      //If the last question, set the score to the number of seconds left
      quiz.score = secondsLeft;
    }
  }

  //Define a event handler if they select the second answer
  function answerTwoEventHandler() {
    //Check to see if it is the correct answer.  If yes, display correct.
    if (quiz.quizItem[questionNumber].answerTwo.correct) {
      $("#right-wrong-display").text("Correct");
    } else {
      //If incorrect answer, sunbtract 10 seconds from timer and display wrong.
      secondsLeft = secondsLeft - 10;
      $("#right-wrong-display").text("Wrong");
    }
    //increment the question count
    questionNumber++;
    //If question was not the last one, delay for 150 milliseconds so they can see if they were right/wrong
    if (questionNumber < quiz.quizItem.length) {
      //delay so the user can see if they answer correctly
      setTimeout(function () {
        $("#right-wrong-display").text(""); //clear out the right/wrong display
        //display the next question
        displayQuestion(questionNumber);
      }, 150);
    } else {
      //If the last question, set the score to the number of seconds left
      quiz.score = secondsLeft;
    }
  }

  //Define a event handler if they select the third answer
  function answerThreeEventHandler() {
    //Check to see if it is the correct answer.  If yes, display correct.
    if (quiz.quizItem[questionNumber].answerThree.correct) {
      $("#right-wrong-display").text("Correct");
    } else {
      //If incorrect answer, sunbtract 10 seconds from timer and display wrong.
      secondsLeft = secondsLeft - 10;
      $("#right-wrong-display").text("Wrong");
    }
    //increment the question count
    questionNumber++;
    //If question was not the last one, delay for 150 milliseconds so they can see if they were right/wrong
    if (questionNumber < quiz.quizItem.length) {
      //delay so the user can see if they answer correctly
      setTimeout(function () {
        $("#right-wrong-display").text(""); //clear out the right/wrong display
        //display the next question
        displayQuestion(questionNumber);
      }, 150);
    } else {
      //If the last question, set the score to the number of seconds left
      quiz.score = secondsLeft;
    }
  }

  //Define a event handler if they select the fourth answer
  function answerFourEventHandler() {
    //Check to see if it is the correct answer.  If yes, display correct.
    if (quiz.quizItem[questionNumber].answerFour.correct) {
      $("#right-wrong-display").text("Correct");
    } else {
      //If incorrect answer, sunbtract 10 seconds from timer and display wrong.
      secondsLeft = secondsLeft - 10;
      $("#right-wrong-display").text("Wrong");
    }
    //increment the question count
    questionNumber++;
    //If question was not the last one, delay for 150 milliseconds so they can see if they were right/wrong
    if (questionNumber < quiz.quizItem.length) {
      //delay so the user can see if they answer correctly
      setTimeout(function () {
        $("#right-wrong-display").text(""); //clear out the right/wrong display
        //display the next question
        displayQuestion(questionNumber);
      }, 150);
    } else {
      //If the last question, set the score to the number of seconds left
      quiz.score = secondsLeft;
    }
  }

  //Function to display the questions and potential answers to the user.
  function displayQuestion(i) {
    // clean up question display
    $("#quiz-question").remove();
    $("#answer-display").empty();

    //Display the question on the page
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

    //Displays the potential answers
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

  //Initialize the quiz with loading the questions into the quiz and displaying the intro
  function initialize() {
    //Display Intro
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

    //On click event for when the user clicks the submit button
    $("#btn-start").on("click", function () {
      $("#quiz-intro").remove();
      $("#btn-start").remove();
      //start the timer for the game
      runGame();

      //load the first question
      displayQuestion(questionNumber);
    });

    //loads the questions into the quiz
    quiz.initialize();
  }

  function gameOver() {
    // clean up question display
    $("#quiz-question").empty();
    $("#answer-display").empty();
    $("#right-wrong-display").text(""); //clear the right/worng display

    //Display All Done Message
    var allDone = $("<h5>");
    allDone.addClass("card-body text-center");
    allDone.attr("id", "quiz-done");
    allDone.text("All Done!");
    $("#question-display").append(allDone);

    //Display the qQuiz Score on the page
    var yourScore = $("<h5>");
    yourScore.addClass("card-body");
    yourScore.attr("id", "quiz-score");
    yourScore.text(quiz.score);
    $("#answer-display").append(yourScore);

    var inputLabel = $("<p>");
    inputLabel.text("Enter Initials to Track your Score: ");
    inputLabel.attr("id", "inputLabel");
    $("#answer-display").append(inputLabel);

    //Display Request to enter Initials
    var initials = $("<input>");
    initials.attr("id", "initials-input");
    initials.attr("type", "text");
    $("#inputLabel").append(initials);

    //Display submit button
    var btnSubmit = $("<button>");
    btnSubmit.addClass("btn btn-primary");
    btnSubmit.attr("id", "btn-submit");
    btnSubmit.attr("type", "button");
    btnSubmit.text("Submit");
    $("#inputLabel").append(btnSubmit);

    //Define event handler for the Submit button with an anonymous funciton that stores the score and initials in local storage
    $("#btn-submit").on("click", function () {
      localStorage.setItem("initials", $("#initials-input").val());
      localStorage.setItem("score", quiz.score);
    });
  }

  //funciton to start running the timer for the game
  function runGame() {
    //Display time with 90 second interval
    timer.text("Timer: " + secondsLeft);

    var timerInterval = setInterval(function () {
      secondsLeft--;
      timer.text("Timer: " + secondsLeft);

      //check to see if the last question was answered or if the seconds left is 0
      if (secondsLeft === 0 || questionNumber >= quiz.quizItem.length) {
        clearInterval(timerInterval);
        gameOver(); // Game over
      }
    }, 1000); //interval is 1 second, or 1000 milliseconds
  }

  initialize(); //This startes the whole process of displaying the quis page.
});
