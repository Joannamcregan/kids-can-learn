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
        button.addEventListener('click', blastOff);
        message.append(button);
    }, 4000);
};

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
        junk.classList.remove('hidden');
        junk.classList.add('approaching');
    }, 4000);
}