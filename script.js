$(document).ready(function () {
  //define a QuizItem object to store the question and the correct answer
  var quizItem = {
    id: "",
    question: "",
    answerOne: "",
    answerTwo: "",
    answerThree: "",
    answerFour: "",
    correctAnswer: "",
  };

  //define quiz
  var quiz = {
    quizItem: [],
    score: 0,
    highscore: 0,
  };

  //funcitoon to load the quiz questions into the quiz
  function loadQuizQuestions() {
    quiz.quizItem.push({
      id: "1",
      question:
        "Who did Patrick Roy Goalie for in 2001 and win the Stanley Cup",
      answerOne: "Los Angeles Kings",
      answerTwo: "Colorado Avalanche",
      answerThree: "Pittsburgh Penguins",
      answerFour: "New York Rangers",
      correctAnswer: "answerTwo",
    });

    //populate quiz wuth 2nd question
    quiz.quizItem.push({
      id: "2",
      question: "Which NFL Team won the 1st two Superbowls?",
      answerOne: "Chicago Bears",
      answerTwo: "New York Jets",
      answerThree: "Minnesota Vikings",
      answerFour: "Greenbay Packers",
      correctAnswer: "answerFour",
    });

    //populate quiz wuth 3rd question
    quiz.quizItem.push({
      id: "3",
      question:
        "What MLB Baseball team loast in the Worls Series to St Louis in 7 games in 1982?",
      answerOne: "New Your Yankees",
      answerTwo: "Boston Red Sox",
      answerThree: "Milwaukee Brewers",
      answerFour: "Atlanta Braves",
      correctAnswer: "answerThree",
    });

    //populate quiz wuth 4th question
    quiz.quizItem.push({
      id: "4",
      question: "How many Super Bowl wins do the Greenbay Packers have?",
      answerOne: "1",
      answerTwo: "2",
      answerThree: "3",
      answerFour: "4",
      correctAnswer: "answerFour",
    });

    //populate quiz wuth 5th question
    quiz.quizItem.push({
      id: "5",
      question: "Which NFL Team won the 1st two Superbowls?",
      answerOne: "Chicago Bears",
      answerTwo: "New York Jets",
      answerThree: "Minnesota Vikings",
      answerFour: "Greenbay Packers",
      correctAnswer: "answerFour",
    });

    //populate quiz wuth 6th question
    quiz.quizItem.push({
      id: "6",
      question: "Which NFL Team won the 1st two Superbowls?",
      answerOne: "Chicago Bears",
      answerTwo: "New York Jets",
      answerThree: "Minnesota Vikings",
      answerFour: "Greenbay Packers",
      correctAnswer: "answerFour",
    });

    //populate quiz wuth 7th question
    quiz.quizItem.push({
      id: "7",
      question: "Which NFL Team won the 1st two Superbowls?",
      answerOne: "Chicago Bears",
      answerTwo: "New York Jets",
      answerThree: "Minnesota Vikings",
      answerFour: "Greenbay Packers",
      correctAnswer: "answerFour",
    });

    //populate quiz wuth 8th question
    quiz.quizItem.push({
      id: "8",
      question: "Which NFL Team won the 1st two Superbowls?",
      answerOne: "Chicago Bears",
      answerTwo: "New York Jets",
      answerThree: "Minnesota Vikings",
      answerFour: "Greenbay Packers",
      correctAnswer: "answerFour",
    });

    //populate quiz wuth 9th question
    quiz.quizItem.push({
      id: "9",
      question: "Which NFL Team won the 1st two Superbowls?",
      answerOne: "Chicago Bears",
      answerTwo: "New York Jets",
      answerThree: "Minnesota Vikings",
      answerFour: "Greenbay Packers",
      correctAnswer: "answerFour",
    });

    //populate quiz wuth 10th question
    quiz.quizItem.push({
      id: "10",
      question: "Which NFL Team won the 1st two Superbowls?",
      answerOne: "Chicago Bears",
      answerTwo: "New York Jets",
      answerThree: "Minnesota Vikings",
      answerFour: "Greenbay Packers",
      correctAnswer: "answerFour",
    });
  }

  //Start of executing the quiz

  loadQuizQuestions();

  for (var i = 0; i < quiz.quizItem.length; i++) {
    console.log(quiz.quizItem[i].id);
    console.log(quiz.quizItem[i].question);
    console.log(quiz.quizItem[i].answerOne);
    console.log(quiz.quizItem[i].answerTwo);
    console.log(quiz.quizItem[i].answerThree);
    console.log(quiz.quizItem[i].answerFour);
    console.log(quiz.quizItem[i].correctAnswer);
  }
});
