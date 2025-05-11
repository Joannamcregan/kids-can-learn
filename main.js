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
//This assigns the "space" webpage element to a variable.
const space = document.getElementById('space');
//This assigns the "junk" webpage element to a variable.
const junk = document.getElementById('junk');
//This assigns the number 0 to a variable. Later we're going to use this variable to count.
let messageCounter = 0;
//This assigns the number 0 to a variable. Later we are going to use this variable to count.
let directionCounter = 0;
//This function tells the webpage what to do when it first loads
window.onload = ()=> {
    //This part of the function gets a random whole number between 0 and 3 and assigns it to a variable called randomNumber.
    const randomNumber = Math.floor(Math.random() * spaceViews.length);
    //Then we take the random number and look to see which picture is in that index in the array. An index is like a place in line.
    //We use the picture at the random number's index to give the "space" section of the webpage a background.
    space.classList.add(spaceViews[randomNumber]['imageName']);
    //This part gets the first message ready. 
    //It adds the first Abel picture in the abelPics array to the "message" section of the webpage.
    const pic = document.createElement('IMG');
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
    setTimeout(()=>{
        space.classList.remove('point-' + directionCounter);
        directionCounter++;
        space.classList.add('point-' + directionCounter);
    }, 1000);
    setTimeout(()=>{
        makeJunk();
    }, 4000);
}

function makeJunk(){
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
    //The next CSS class will determine how the junk element is skewed.
    junk.classList.add('junk-skew-' + randomNumber);
    //Now we're going to reassign a new random number from 0 to 6 to the "randomNumber" variable.
    randomNumber = Math.floor(Math.random() * 7);
    //The next CSS class will determine how the junk element is rotated.
    junk.classList.add('junk-rotate-' + randomNumber);
    //Now we're going to reassign a new random number from 1 to 20 to the "randomNumber" variable.
    randomNumber = Math.floor(Math.random() * 20) + 1;
    //The next CSS class will determine how the junk element's background looks.
    junk.classList.add('junk-background-' + randomNumber);
    //We're going to get a random number from 10 to 19 and assign it to a variable called "biggerNumber"
    let biggerNumber = Math.floor(Math.random() * 10) + 10;
    //We're also going to get a random number from 0 to 9 and assign it to a variable called "smallerNumber"
    let smallerNumber = Math.floor(Math.random() * 10);
    //And we're going to get a random number from 0 to 1 and assign it to a variable called "zeroOrOne"
    let zeroOrOne = Math.floor(Math.random() * 2);
    //we're going to declare a variable called "PlusOrMinus"
    let plusOrMinus;
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
}