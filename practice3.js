
/* PART 3: TYPE CASTING AND CONDITIONS */

// QUESTION 13: Predict the data types
console.log("QUESTION 13: Data Types");

console.log(typeof ("hello" + 10));
console.log(typeof (10 + true));
console.log(typeof (10 + null));
console.log(typeof ("hello" + undefined));


// QUESTION 14: Convert input into a number
console.log("\nQUESTION 14: Number Conversion");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(userInput) {
    let number = Number(userInput);
    console.log("Result:", number + 10);

    // QUESTION 15: Boolean conversion
    console.log("\nQUESTION 15: Boolean Conversion");
    console.log(Boolean(""));
    console.log(Boolean("Hello"));
    console.log(Boolean(0));
    console.log(Boolean(true));

    // QUESTION 16: Positive number check
    console.log("\nQUESTION 16: Positive Number Check");

    let num = 5;

    if (num > 0) {
        console.log("The number is positive");
    } else {
        console.log("The number is not positive");
    }

    // QUESTION 17: Time-based messages
    rl.question("Enter the hour (0 to 23): ", function(inputTime) {
        let time = Number(inputTime);

        console.log("\nQUESTION 17: Time-Based Messages");

        if (inputTime.trim() === "" ||
            !Number.isInteger(time) ||
            time < 0 || time > 23) {
            console.log("Please enter a valid hour from 0 to 23");
        } else if (time >= 4 && time < 6) {
            console.log("Early morning");
        } else if (time >= 6 && time < 12) {
            console.log("Morning");
        } else if (time >= 12 && time < 16) {
            console.log("Afternoon");
        } else if (time >= 16 && time < 20) {
            console.log("Evening");
        } else {
            console.log("Night");
        }

        // QUESTION 18: Nested if eligibility
        console.log("\nQUESTION 18: Eligibility Check");

        let age = 22;
        let height = 170;
        let weight = 60;

        if (age >= 18) {
            if (height >= 150) {
                if (weight >= 45) {
                    console.log("You are eligible");
                } else {
                    console.log("Weight is too low");
                }
            } else {
                console.log("Height is too low");
            }
        } else {
            console.log("Age is below 18");
        }

        rl.close();
    });
});
