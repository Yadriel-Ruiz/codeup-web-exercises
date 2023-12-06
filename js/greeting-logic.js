import generateRandomNumber from './number-utils';

const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];

const generateRandomNumber = require('./number-utils');

export function getRandomGreeting() {
    const randomIndex = generateRandomNumber(0, greetings.length - 1);
    return greetings[randomIndex];
}

function generateAndDisplayGreeting() {
    const userName = document.getElementById('userName').value;

    const randomGreeting = getRandomGreeting();

    const greetingDisplay = document.getElementById('greetingDisplay');
    greetingDisplay.innerHTML = `<p>${randomGreeting}, ${userName}!</p>`;
}
