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
          "What MLB Baseball team loast in the Worls Series to St Louis in 7 games in 1982?",
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

  function displayQuestion(i) {
    $("#quiz-question").text(quiz.quizItem[i].question);
    // var answer1 = $("<button>");
    // var answer2 = $("<button>");
    // var answer3 = $("<button>");
    // var answer4 = $("<button>");

    // answer1.addClass("btn-block");
    // answer1.addClass("btn-primary");
    // answer1.attr("type", "button");
    // answer1.attr("id", "answer-1");
    $("#answer-1").text(quiz.quizItem[i].answerOne.answerText);

    // answer2.addClass("btn-block");
    // answer2.addClass("btn-primary");
    // answer2.attr("type", "button");
    // answer2.attr("id", "answer-2");
    $("#answer-2").text(quiz.quizItem[i].answerTwo.answerText);

    // answer3.addClass("btn-block");
    // answer3.addClass("btn-primary");
    // answer3.attr("type", "button");
    // answer3.attr("id", "answer-3");
    $("#answer-3").text(quiz.quizItem[i].answerThree.answerText);

    // answer4.addClass("btn-block");
    // answer4.addClass("btn-primary");
    // answer4.attr("type", "button");
    // answer4.attr("id", "answer-4");
    $("#answer-4").text(quiz.quizItem[i].answerFour.answerText);

    // $("#answer-display").append(answer1);
    // $("#answer-display").append(answer2);
    // $("#answer-display").append(answer3);
    // $("#answer-display").append(answer4);
    // console.log("right here");
  }

  quiz.initialize();

  $("#btn-start").on("click", function () {
    $("#quiz-intro").hide();
    $("#btn-start").hide();
    displayQuestion(questionNumber);
  });

  $("#answer-1").on("click", function () {
    questionNumber++;
    displayQuestion(questionNumber);
  });

  //   for (var i = 0; i < quiz.quizItem.length; i++) {
  //     console.log(quiz.quizItem[i].id);
  //     console.log(quiz.quizItem[i].question);
  //     console.log(quiz.quizItem[i].answerOne.answerText);
  //     console.log(quiz.quizItem[i].answerOne.correct);
  //     console.log(quiz.quizItem[i].answerTwo.answerText);
  //     console.log(quiz.quizItem[i].answerTwo.correct);
  //     console.log(quiz.quizItem[i].answerThree.answerText);
  //     console.log(quiz.quizItem[i].answerThree.correct);
  //     console.log(quiz.quizItem[i].answerFour.answerText);
  //     console.log(quiz.quizItem[i].answerFour.correct);
  //   }
});
