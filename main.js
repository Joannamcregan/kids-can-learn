//All the space pictures are in this array. An array is a collection of things.
const spaceViews = [
    {imageName: 'crescent-nebula', alt: 'a crescent nebula appears like a pink and mauve cloud of stars in front of a star-splattered stretch of space.'},
    {imageName: 'orion-nebula', alt: 'the Orion Nebula appears like glowing pink and purple petals with stars scattered all around.'},
    {imageName: 'milky-way', alt: 'the Milky Way galaxy appears like a slightly crooked branch made of stars with countless other stars spread around it.'},
    {imageName: 'cosmic-cloud', alt: 'a cosmic dust cloud appears like a frozen yellow flame inside a disk of orange and brown clouds with pink vapor and stars all around.'}
];
//All the Abel pictures are in this array.
const abelPics = [
    {path: './img/space_abel_0.jpg', alt: 'a young boy with light brown skin and curly hair gazes forward, wearing a red shirt, a microphone headset, and a serious expression.'},
    {path: './img/space_abel_1.jpg', alt: 'a young boy with light brown skin and curly hair gazes forward, wearing a red shirt, a microphone headset, and a slightly angry expression.'},
    {path: './img/space_abel_2.jpg', alt: 'a young boy with light brown skin and curly hair holds the microphone on his headset and gazes forward thoughtfully.'},
    {path: './img/space_abel_3.jpg', alt: 'a young boy with light brown skin and curly hair gazes forward, wearing a red shirt, a microphone headset, and a slight smile.'}
]
//All the text messages from the commander are in this array.
const commanderTexts = [
    'Your job is to pick up space junk. When you see some space junk, tap the correct button to grab it.',
    'Space junk can break spaceships. It is important to keep Earth and space clean.',
    "You're doing great! Did you know that grown-ups who study space also do math?",
    "You did it! You grabbed all the space junk! Now you can take it to the recycling station. Then you can learn about space!"
]
//All the facts about space are in this array.
const spaceFacts = [
    'Fact one', 'fact two', 'fact three'
]
//This assigns the "message" webpage element to a variable, which is like giving it a nickname we can use in the JavaScript code.
const message = document.getElementById('message');
//This assigns the "goodJob" webpage element to a variable.
const goodJob = document.getElementById('goodJob');
//This assigns the "tryAgain" webpage element to a variable.
const tryAgain = document.getElementById('tryAgain');
//This assigns the "space" webpage element to a variable.
const space = document.getElementById('space');
//This assigns the "junk" webpage element to a variable.
const junk = document.getElementById('junk');
//This assigns the number 0 to a variable. Later we're going to use this variable to count.
let correctAnswers = 0;
//This assigns the number 0 to a variable. Later we're going to use this variable to count.
let messageCounter = 0;
//This assigns the number 0 to a variable. Later we are going to use this variable to count.
let directionCounter = 0;
//We will use this variable to store a number for an equation.
let biggerNumber;
//We will use this variable to store another number for an equation.
let smallerNumber;
//we're going to declare a variable called "PlusOrMinus" that will be used to keep track of whether our equation is using plus or minus.
let plusOrMinus;
//This function tells the webpage what to do when it first loads
window.onload = ()=> {
    //This part of the function gets a random whole number between 0 and 3 and assigns it to a variable called randomNumber.
    const randomNumber = Math.floor(Math.random() * spaceViews.length);
    //Then we take the random number and look to see which picture is in that index in the array. An index is like a place in line.
    //We use the picture at the random number's index to give the "space" section of the webpage a background.
    space.classList.add(spaceViews[randomNumber]['imageName']);
    showMessage();
}

function showMessage(){
    //This part gets the message ready. 
    //It adds an Abel picture in the abelPics array to the "message" section of the webpage.
    let pic = document.createElement('IMG');
    pic.src = abelPics[messageCounter]['path'];
    pic.alt = abelPics[messageCounter]['alt'];
    message.append(pic);
    //Now it makes the message appear after 2 seconds
    setTimeout(()=>{
        message.classList.add('opacity-10');
        message.classList.remove('hidden');
    }, 2000);
    setTimeout(()=>{
        message.classList.add('fade-in');
        message.classList.remove('opacity-10');
    }, 2000);
    //Now it adds the first text in the commanderTexts array to the "message" section of the webpage after 2 and a half seconds.
    setTimeout(()=>{
        const paragraph = document.createElement('p');
        const text = document.createTextNode(commanderTexts[messageCounter]);
        paragraph.append(text);
        message.append(paragraph);
        //It adds 1 to the messageCounter number to help us keep track of which messages we have displayed so far
        messageCounter++;
    }, 2500);
    //It adds a button after 4 seconds.
    setTimeout(()=>{
        const button = document.createElement('button');
        const buttonText = document.createTextNode('okay');
        button.append(buttonText);
        //When you click this button, a function called "blastOff" will get called.
        button.addEventListener('click', blastOff);
        message.append(button);
    }, 4000);
}

function blastOff(){
    message.innerHTML = '';
    message.classList.remove('opacity-10');
    message.classList.add('hidden');
    if (correctAnswers < 12){
        setTimeout(()=>{
            advanceSpaceship()
        }, 1000);
        setTimeout(()=>{
            makeJunk();
        }, 4000);
    } else {
        console.log('you won!');
    }
}

function advanceSpaceship(){
    space.classList.remove('point-' + directionCounter);
    directionCounter++;
    space.classList.add('point-' + directionCounter);
}

function makeJunk(){
    //We're going to create an array of button placements and assign it to a variable called "buttonPlacements";
    let buttonPlacements = ['left-button', 'middle-button', 'right-button'];
    //We're going to get a random number from 0 to 5 and assign it to a variable called "randomNumber";
    let randomNumber = Math.floor(Math.random() * 6);
    //We're going to use the number stored in the randomNumber variable to assign a CSS class to the space junk html element.
    //This CSS class will change how rounded the top left corner of the space junk looks.
    junk.classList.add('junk-tl-' + randomNumber);
    //Now we're going to reassign a new random number from 0 to 5 to the "randomNumber" variable.
    randomNumber = Math.floor(Math.random() * 6);
    //We're going to use this number to assign another CSS class to the space junk element.
    //This class will change how rounded the top right corner of the space junk looks.
    junk.classList.add('junk-tr-' + randomNumber);
    //Now we're going to reassign a new random number from 0 to 5 to the "randomNumber" variable.
    randomNumber = Math.floor(Math.random() * 6);
    //The next CSS class will change how rounded the junk element's bottom right corner will look.
    junk.classList.add('junk-br-' + randomNumber);
    //Now we're going to reassign a new random number from 0 to 5 to the "randomNumber" variable.
    randomNumber = Math.floor(Math.random() * 6);
    //The next CSS class will change how rounded the junk element's bottom right corner will look.
    junk.classList.add('junk-br-' + randomNumber);
    //Now we're going to reassign a new random number from 0 to 2 to the "randomNumber" variable.
    randomNumber = Math.floor(Math.random() * 3);
    //Now we're going to reassign a new random number from 0 to 6 to the "randomNumber" variable.
    randomNumber = Math.floor(Math.random() * 7);
    //The next CSS class will determine how the junk element is rotated.
    junk.classList.add('junk-rotate-' + randomNumber);
    //Now we're going to reassign a new random number from 1 to 20 to the "randomNumber" variable.
    randomNumber = Math.floor(Math.random() * 20) + 1;
    //The next CSS class will determine how the junk element's background looks.
    junk.classList.add('junk-background-' + randomNumber);
    //We're going to get a random number from 10 to 19 and assign it to a variable called "biggerNumber"
    biggerNumber = Math.floor(Math.random() * 10) + 10;
    //We're also going to get a random number from 0 to 9 and assign it to a variable called "smallerNumber"
    smallerNumber = Math.floor(Math.random() * 10);
    //And we're going to get a random number from 0 to 1 and assign it to a variable called "zeroOrOne"
    let zeroOrOne = Math.floor(Math.random() * 2);
    //if the number stored in the "zeroOrOne" variable is 1, we will assign a minus sign to the "plusOrMinus" variable
    //Otherwise, we will assign a plus sign to the "plusOrMinus" variable.
    if (zeroOrOne == 1){
        plusOrMinus = "-"
    } else {
        plusOrMinus = "+"
    }
    //Now we're going to make a math equation from our variables! We will assign the equation to a variable called "equationString"
    let equationString = biggerNumber + ' ' + plusOrMinus + ' ' + smallerNumber + ' =';
    //We're going to put the equationString inside a paragraph HTML element that we will call "paragraph"
    let paragraph = document.createElement('p');
    paragraph.append(equationString);
    //We're going to "append," or attach, the paragraph element to the junk element.
    junk.append(paragraph);
    //Now we're going to remove the CSS class that keeps the space junk hidden.
    //We will add a class that gives in an animation that makes it look like it is approaching.
    junk.classList.remove('hidden');
    junk.classList.add('approaching');
    //now we will randomly choose the left, middle, or right button to display the correct answer
    //we will do this by getting a random number from 0 to 2.
    //we do this because the buttonPlacements array has 3 items inside of it, and in JavaScrip we start counting indexes with 0.
    //An "index" is an items place in an array, like its spot in line
    let indexNumber = Math.floor(Math.random() * buttonPlacements.length);
    //Now that we have an indexNumber, we will get the item in the indexNumber's place in the array
    let correctButton = document.getElementById(buttonPlacements[indexNumber]);
    //We will remove this button placement from the array so we can't re-use it for a wrong answer.
    buttonPlacements.splice(indexNumber, 1);
    //We will solve the equation and store the correct answer in a variable called "correctAnswer"
    let correctAnswer;
    if (plusOrMinus == '+'){
        correctAnswer = parseInt(biggerNumber) + parseInt(smallerNumber);
    } else {
        correctAnswer = parseInt(biggerNumber) - parseInt(smallerNumber);
    }
    //We will put the correctAnswer on the correctButton
    correctButton.innerText = correctAnswer;
    //We also need to get a wrong answer and assign it to one of the other buttons.
    indexNumber = Math.floor(Math.random() * buttonPlacements.length);
    let firstWrongButton = document.getElementById(buttonPlacements[indexNumber]);
    buttonPlacements.splice(indexNumber, 1);
    let firstWrongAnswer;
    if (correctAnswer > 5){
        firstWrongAnswer = Math.floor(Math.random() * (correctAnswer + 5)) + (correctAnswer - 5);
    } else {
        firstWrongAnswer = Math.floor(Math.random() * (correctAnswer + 5)) + 1;
    }    
    if (firstWrongAnswer == correctAnswer){
        firstWrongAnswer++;
    }
    firstWrongButton.innerText = firstWrongAnswer;
    //Next, we will need to get another wrong answer and assign it to the remaining button
    let secondWrongButton = document.getElementById(buttonPlacements[0]);
    if (correctAnswer > 5){
        secondWrongAnswer = Math.floor(Math.random() * (correctAnswer + 5)) + (correctAnswer - 5);
    } else {
        secondWrongAnswer = Math.floor(Math.random() * (correctAnswer + 5)) + 1;
    }   
    if ((secondWrongAnswer == correctAnswer) || (secondWrongAnswer == firstWrongAnswer)){
        console.log('second wrong answer');
        if ((correctAnswer == firstWrongAnswer + 1) || (correctAnswer == firstWrongAnswer - 1)){
            secondWrongAnswer = secondWrongAnswer + 2;
        } else {
            secondWrongAnswer++;
        }
    }
    secondWrongButton.innerText = secondWrongAnswer;
    //We will make the buttons appear after 3 seconds
    setTimeout(()=>{
        correctButton.classList.remove('hidden');
        firstWrongButton.classList.remove('hidden');
        secondWrongButton.classList.remove('hidden');
    }, 3000);
}

function submitAnswer(e){
    if (plusOrMinus == '+'){
        if (e.target.innerText == biggerNumber + smallerNumber){
            clearJunk();
            congratulate();
            correctAnswers++;
            if (correctAnswers % 4 == 0){
                showMessage();
            } else {
                if (correctAnswers < 12){
                    setTimeout(()=>{
                        advanceSpaceship()
                    }, 1000);
                    setTimeout(()=>{
                        makeJunk();
                    }, 4000);
                } else {
                    setTimeout(()=>{
                        console.log('you won!');
                    }, 1000)
                }
            }
        } else {
            //try again message
        }
    } else {
        if (e.target.innerText == biggerNumber - smallerNumber){
            congratulate();
            correctAnswers++;
            if (correctAnswers % 4 == 0){
                showMessage();
            } else {
                if (correctAnswers < 12){
                    setTimeout(()=>{
                        advanceSpaceship()
                    }, 1000);
                    setTimeout(()=>{
                        makeJunk();
                    }, 4000);
                } else {
                    setTimeout(()=>{
                        console.log('you won!');
                    }, 1000)
                }
            }
        } else {
            //try again message
        }
    }
}

function clearJunk(){

}

function congratulate(){
    let answer;
    let p = document.createElement('p');
    if (plusOrMinus == "+"){
        answer = biggerNumber + smallerNumber;
        p.innerText = "That's right! " + biggerNumber + " + " + smallerNumber + " = " + answer + ".";
    } else {
        answer = biggerNumber - smallerNumber;
        p.innerText = "That's right! " + biggerNumber + " - " + smallerNumber + " = " + answer + ".";
    }
    goodJob.append(p);
    setTimeout(()=>{
        goodJob.classList.add('opacity-10');
        goodJob.classList.remove('hidden');
    }, 2000);
    setTimeout(()=>{
        goodJob.classList.add('fade-in');
        goodJob.classList.remove('opacity-10');
    }, 2000);
    setTimeout(()=>{
        goodJob.innerHTML = '';
        goodJob.classList.remove('opacity-10');
        goodJob.classList.add('hidden');
    }, 5000);
}