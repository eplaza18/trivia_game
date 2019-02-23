console.log('hello')

//Questions set up and append to screen//
var questions = [{
    question: "1. What is number 1?",
    answers: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: "One",
  },
  {
    question: "2. What is number 2?",
    answers: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: "Two",
  },
  {
    question: "3. What is number 3?",
    answers: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: "Three",
  },
  {
    question: "4. What is number 4?",
    answers: ['One', 'Two', 'Three', 'Four'],
    correctAnswer: "4",
  }]
var correct = 0;
var incorrect = 0;

//timer setup
let timeLeft = 10
var intervalId;
//Starts screen off with nothing but a timer button
$('#timer').append('<button type="button">Start</button>');

//Wraps Game Startup in a function
function startGame (){
    //Timer
    function runGame(){
        intervalId = setInterval(decrement, 1000);
    }
        function decrement() {
            timeLeft--;
            $("#timer").html(`<h2> Time Left: ${timeLeft}</h2>`);

            if( timeLeft == 0) {;
                alert('Times Up!');
                clearInterval(intervalId);    
            }
        }
    runGame();
    
    //Loops to create radio buttons and start
    for (i = 0; i <questions.length; i++) {
        console.log(questions[i].question);
        console.log(questions[i].answers);

        $('#main').append(`<h2>${questions[i].question}</h2>`);
            for (j = 0; j < questions[i].answers.length; j++){            
            $('#main').append(`<input type="radio" name="group${i}">${questions[i].answers[j]}`);
            }
            
            
        }

        $('#done').append('<button type="button">Done</button>');  
        
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].correctAnswer) {
              correct++;
            } else {
              incorrect++;
            }
            console.log(correct, incorrect);
          });
    }

        //Button Click functions
    $( "#timer" ).click(function() {
        alert( "button clicked" );
        startGame();        
    });
    $( "#done" ).click(function() {
        alert( "button clicked" );
        clearInterval(intervalId);
    });

    

    
