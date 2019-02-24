console.log('hello')

//Questions set up and append to screen//
var questions = [{
    question: "1. What is the capitol of Spain?",
    answers: ['Barcelona', 'Madrid', 'Pamplona', 'Lisbon'],
    correctAnswer: "Madrid",
  },
  {
    question: "2. How many colors in a rainbow?",
    answers: ['Five', 'Six', 'Seven', 'Eight'],
    correctAnswer: "Seven",
  },
  {
    question: "3. What part of the human body contains five metacarpal bones?",
    answers: ['Spine', 'Head', 'Foot', 'Hand'],
    correctAnswer: "Hand",
  },
  {
    question: "4. In 1952, Albert Einstein was offered the presidency of which country?",
    answers: ['Israel', 'Egypt', 'France', 'Greece'],
    correctAnswer: "Israel",
  },
  {
    question: "5. The scientific unit named after Sir Isaac Newton measures what?",
    answers: ['Velocity', 'Speed', 'Energy', 'Force'],
    correctAnswer: "Force",
  },
  {
    question: "6. What is the only country that displays the Bible on its national flag?",
    answers: ['England', 'The Dominican Republic', 'Jamaica', 'South Africa'],
    correctAnswer: "The Dominican Republic",
  },
  {
    question: "7. What element did Joseph Priestley discover in 1774?",
    answers: ['Iron', 'Oxygen', 'Adamantium', 'Copper'],
    correctAnswer: "Oxygen",
  },
  {
    question: "8. What inorganic molecule is produced by lightning?",
    answers: ['Carbon', 'Alumina', 'Ozone', 'Polycrystal'],
    correctAnswer: "Ozone",
      
  },
  {
    question: "9. According to Norse mythology, who is the god of thunder?",
    answers: ['Frigg', 'Hera', 'Shiva', 'Thor'],
    correctAnswer: "Thor",
      
  },
  {
    question: "10. Tom yum is a type of hot and sour soup that originated in which country?",
    answers: ['Thailand', 'China', 'India', 'New Zealand'],
    correctAnswer: "Thailand",
      
  }
  
  
]
var correct = 0;
var incorrect = 0;

//timer setup
let timeLeft = 60
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
                done();  
            }
        }
    runGame();
    
    //Loops to create radio buttons and start
    for (i = 0; i <questions.length; i++) {
        console.log(questions[i].question);
        console.log(questions[i].answers);

        $('#main').append(`<h2>${questions[i].question}</h2>`);
            for (j = 0; j < questions[i].answers.length; j++){            
            $('#main').append(`<input type="radio" name="group${i}" value ="${questions[i].answers[j]}">${questions[i].answers[j]}`);
            }    
        }
        //Creates done button
        $('#done').append('<button type="button">Done</button>');  
    }
    
    //This is the attempt to grab value of radio button and check with correct answer.    
    function done() {
        let buttonValue0 = $('input[name=group0]:checked').val();
        let buttonValue1 = $('input[name=group1]:checked').val();
        let buttonValue2 = $('input[name=group2]:checked').val();
        let buttonValue3 = $('input[name=group3]:checked').val();
        let buttonValue4 = $('input[name=group4]:checked').val();
        let buttonValue5 = $('input[name=group5]:checked').val();
        let buttonValue6 = $('input[name=group6]:checked').val();
        let buttonValue7 = $('input[name=group7]:checked').val();
        let buttonValue8 = $('input[name=group8]:checked').val();
        let buttonValue9 = $('input[name=group9]:checked').val();
        console.log(buttonValue0, buttonValue1, buttonValue2, buttonValue3);

        //Compares Button Value to correct answer, would've liked a loop but ran out of time.
        if (buttonValue0 === questions[0].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue1 === questions[1].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue2 === questions[2].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue3 === questions[3].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue4 === questions[4].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue5 === questions[5].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue6 === questions[6].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue7 === questions[7].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue8 === questions[8].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        if (buttonValue9 === questions[9].correctAnswer) {
            correct++;
        }else {
            incorrect++;
        }
        alert('Correct: ' + correct + ' Incorrect: ' + incorrect);
        }
    //Button Click functions
    $( "#timer" ).click(function() {
        // alert( "button clicked" );
        startGame();        
    });
    $( "#done" ).click(function() {
        // alert( "button clicked" );
        clearInterval(intervalId);
        done();
    });

    

    
