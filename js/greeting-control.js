import const getRandomGreeting = require('./greeting-logic');

// Function to control the greeting generation
function generateRandomGreeting() {

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your name: ', (userName) => {
        // Close the readline interface after getting user input
        rl.close();

        // Get a random greeting
        const randomGreeting = getRandomGreeting();

        // Output the greeting to the console (you can customize this based on your needs)
        console.log(`${randomGreeting}, ${userName}!`);
    });
}

// Call the function to generate a random greeting
generateRandomGreeting();