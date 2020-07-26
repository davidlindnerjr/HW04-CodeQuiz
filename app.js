//Main Element
let mainEl = $('main'); 

//Main Quiz Page
let mainQuizPage = $('#main-quiz-page');
let startBtn = $('#start-btn');

let counter = 0;

//Question One
let questionOne = $('<div>');
questionOne.attr('id','question-text');
questionOne.html('<div>A string is a _________.</div');

let questionOneDiv = $('<div>');
questionOneDiv.attr('id', 'button-div')

let oneA = $('<button>');
oneA.attr('id', 'answer-button');
oneA.text('A collection of characters.');

let oneB = $('<button>');
oneB.attr('id', 'answer-button');
oneB.text('An integer.');

let oneC = $('<button>');
oneC.attr('id', 'answer-button');
oneC.text('A true or false value.');

//Question Two
let questionTwo = $('<div>');
questionTwo.attr('id', 'question-text');
questionTwo.html('<div>Which of these is NOT a comparison operator?</div>');

let questionTwoDiv = $('<div>');
questionTwoDiv.attr('id', 'button-div');

let twoA = $('<button>');
twoA.attr('id', 'answer-button');
twoA.text('+');

let twoB = $('<button>');
twoB.attr('id', 'answer-button');
twoB.text('>');

let twoC = $('<button>');
twoC.attr('id', 'answer-button');
twoC.text('===');

//Question Three
let questionThree = $('<div>');
questionThree.attr('id', 'question-text');
questionThree.html('<div>What is missing from this varibale declaration? <br> let var ___ 12;</div>');

let questionThreeDiv = $('<div>');
questionThreeDiv.attr('id', 'button-div');

let threeA = $('<button>');
threeA.attr('id', 'answer-button');
threeA.text('===');

let threeB = $('<button>');
threeB.attr('id', 'answer-button');
threeB.text('=');

let threeC = $('<button>');
threeC.attr('id', 'answer-button');
threeC.text('==');

//Question four
let questionFour = $('<div>');
questionFour.attr('id', 'question-text');
questionFour.html('<div>What are the 3 basic buidling blocks of a website?');

let questionFourDiv = $('<div>');
questionFourDiv.attr('id', 'button-div');

let fourA = $('<button>');
fourA.attr('id', 'answer-button');
fourA.text('CSS, C++, Java');

let fourB = $('<button>');
fourB.attr('id', 'answer-button');
fourB.text('Google, Python, HTML');

let fourC = $('<button>');
fourC.attr('id', 'answer-button');
fourC.text('HTML, CSS, JavaScript');

//Question five
let questionFive = $('<div>');
questionFive.attr('id', 'question-text');
questionFive.html('<div>Which of these is a correct way to declare a variable in JavaScript?</div>');

let questionFiveDiv = $('<div>');
questionFiveDiv.attr('id', 'button-div');

let fiveA = $('<button>');
fiveA.attr('id', 'answer-button');
fiveA.text('let My Var === 12;');

let fiveB = $('<button>');
fiveB.attr('id', 'answer-button');
fiveB.text('int myVar = 12;');

let fiveC = $('<button>');
fiveC.attr('id', 'answer-button');
fiveC.text('let myVar = 12;');

//Next Button
let next = $('<button>');
next.attr('id' ,'next-button');
next.text('NEXT QUESTION');

//Correct & Wrong display
let correct = $('<div>');
correct.text('Correct!');

let wrong = $('<div>');
wrong.text('Wrong :(');

//End of quiz
let end = $('<div>');
end.attr('id', 'question-text');
end.text('Thanks for playing!');

let playerScore = $('<div>');
playerScore.attr('id', 'end-page');
playerScore.text('Your score is: ');

//time declaration
let startMinutes = 1;
let time = startMinutes * 60;

//Start the quiz/call question one
startBtn.click(function(){
    mainQuizPage.hide();

    //timer
    let countdown = $('#countdown');
    let interval = setInterval(update, 1000);

    function update(){
        let minutes = Math.floor(time/60);
        let seconds = time % 60;

        countdown.html(` ${minutes}:${seconds}`);

        time--;
        if(time === 0){
            questionOne.hide();
            questionTwo.hide();
            questionThree.hide();
            questionFour.hide();
            questionFive.hide();
            clearInterval(interval);
            quizEnd();
        }
    }

    //Append question one to main
    questionOne.appendTo(mainEl);
    questionOneDiv.appendTo(questionOne);
    oneA.appendTo(questionOneDiv);
    oneB.appendTo(questionOneDiv);
    oneC.appendTo(questionOneDiv);

    oneA.click(function(){
        counter++;
        correct.appendTo(questionOneDiv);
        next.appendTo(questionOne);
        next.click(function(){
            questionOne.hide(1000);
            //call function for question two
            questionTwoFunc();
        });
    });

    oneB.click(function(){
        //counter++;
        time -= 5;
        wrong.appendTo(questionOneDiv);
        next.appendTo(questionOne);
        next.click(function(){
            questionOne.hide(1000);
            //call function for question two
            questionTwoFunc();
        });
    });

    oneC.click(function(){
        //counter++;
        time -= 5;
        wrong.appendTo(questionOneDiv);
        next.appendTo(questionOne);
        next.click(function(){
            questionOne.hide(1000);
            //call function for question two
            questionTwoFunc();
        });
    });
});

//function to call question two
function questionTwoFunc(){

    //append question two to main
    questionTwo.appendTo(mainEl);
    questionTwoDiv.appendTo(questionTwo);
    twoA.appendTo(questionTwoDiv);
    twoB.appendTo(questionTwoDiv);
    twoC.appendTo(questionTwoDiv);

    twoA.click(function(){
        counter++;
        correct.appendTo(questionTwoDiv);
        next.appendTo(questionTwo);
        next.click(function(){
            questionTwo.hide(1000);
            //call function for question three
            questionThreefunc();
        });
    });

    twoB.click(function(){
        //counter++;
        time -= 5;
        wrong.appendTo(questionTwoDiv);
        next.appendTo(questionTwo);
        next.click(function(){
            questionTwo.hide(1000);
            //call function for question three
            questionThreefunc();
        });
    });

    twoC.click(function(){
        //counter++;
        time -= 5;
        wrong.appendTo(questionTwoDiv);
        next.appendTo(questionTwo);
        next.click(function(){
            questionTwo.hide(1000);
            //call function for question three
            questionThreefunc();
        });
    });
}

//function to call question three
function questionThreefunc(){

    //append question three to main
    questionThree.appendTo(mainEl);
    questionThreeDiv.appendTo(questionThree);
    threeA.appendTo(questionThreeDiv);
    threeB.appendTo(questionThreeDiv);
    threeC.appendTo(questionThreeDiv);

    threeA.click(function(){
        //counter++;
        time -= 5;
        wrong.appendTo(questionThreeDiv);
        next.appendTo(questionThree);
        next.click(function(){
            questionThree.hide(1000);
            //call function for question four
            questionFourFunc();
        });
    });

    threeB.click(function(){
        counter++;
        correct.appendTo(questionThreeDiv);
        next.appendTo(questionThree);
        next.click(function(){
            questionThree.hide(1000);
            //call function for question four
            questionFourFunc();
        });
    });

    threeC.click(function(){
        //counter++;
        time -= 5;
        wrong.appendTo(questionThreeDiv);
        next.appendTo(questionThree);
        next.click(function(){
            questionThree.hide(1000);
            //call function for question four
            questionFourFunc();
        });
    });
}

function questionFourFunc(){

    //append question four to main
    questionFour.appendTo(mainEl);
    questionFourDiv.appendTo(questionFour);
    fourA.appendTo(questionFourDiv);
    fourB.appendTo(questionFourDiv);
    fourC.appendTo(questionFourDiv);

    fourA.click(function(){
        //counter++;
        time -= 5;
        wrong.appendTo(questionFourDiv);
        next.appendTo(questionFour);
        next.click(function(){
            questionFour.hide(1000);
            //call function for question five
            questionFiveFunc();
        });
    });

    fourB.click(function(){
        //counter++;
        time -= 5;
        wrong.appendTo(questionFourDiv);
        next.appendTo(questionFour);
        next.click(function(){
            questionFour.hide(1000);
            //call function for question five
            questionFiveFunc();
        });
    });

    fourC.click(function(){
        counter++;
        correct.appendTo(questionFourDiv);
        next.appendTo(questionFour);
        next.click(function(){
            questionFour.hide(1000);
            //call function for question five
            questionFiveFunc();
        });
    });
}

function questionFiveFunc(){

        //append question five to main
        questionFive.appendTo(mainEl);
        questionFiveDiv.appendTo(questionFive);
        fiveA.appendTo(questionFiveDiv);
        fiveB.appendTo(questionFiveDiv);
        fiveC.appendTo(questionFiveDiv);

        fiveA.click(function(){
            //counter++;
            time = 0;
            wrong.appendTo(questionFiveDiv);
            next.appendTo(questionFive);
            next.click(function(){
                questionFive.hide(1000);
                //Call quizEnd function
                quizEnd();
            });
        });
    
        fiveB.click(function(){
            //counter++;
            time = 0;
            wrong.appendTo(questionFiveDiv);
            next.appendTo(questionFive);
            next.click(function(){
                questionFive.hide(1000);
                //Call quizEnd function
                quizEnd();
            });
        });
    
        fiveC.click(function(){
            counter++;
            time = 0;
            correct.appendTo(questionFiveDiv);
            next.appendTo(questionFive);
            next.click(function(){
                questionFive.hide(1000);
                //Call quizEnd function
                quizEnd();
            });
        });
}

//function to input initials and show score
function quizEnd(){

    $('#countdown').hide();
    end.appendTo(mainEl);

    playerScore.appendTo(mainEl);
    playerScore.append(counter);

    let intialDiv = $('<div>');
    intialDiv.attr('id', 'initial-div');
    intialDiv.appendTo(mainEl);

    let initialInput = $('<input>');
    initialInput.attr('value', 'Enter your initials');
    initialInput.attr('id', 'initial-input');

    let initialSubmit = $('<input>');
    initialSubmit.attr('type', 'submit');
    initialSubmit.attr('id', 'initial-submit')

    initialInput.appendTo(intialDiv);
    initialSubmit.appendTo(intialDiv);

    let key = initialInput.val();
    let scores = $('<div>');
    //append initials to high score html
    initialSubmit.click(function(){

        //let scores = $('<div>');
        scores.attr('id', 'initial-container')
        scores.appendTo(intialDiv);

        let dash = '-';


        let player = $('<div>');
        player.attr('id', 'player-initial-display')
        player.text(initialInput.val());

        player.append(dash);
        player.append(counter);

        //set
        localStorage.setItem(key, player.html());
        alert('Your score has been submitted! \n ' + player.html());


    });
    //get
        let prevScore = $('<div>');
        prevScore.appendTo(intialDiv);
        prevScore.attr('id','latest-score-prev');
        prevScore.text('Previous Score:');
        let getInitial = localStorage.getItem(key);
        let initials = $('<div>');
        initials.attr('id', 'latest-score');
        initials.appendTo(intialDiv);
        initials.append(getInitial);
    

        
}
