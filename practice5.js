
/* PART 5: MIXED PRACTICE */

// Node.js input setup
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

async function main() {

    // QUESTION 27: Arithmetic Operations
    console.log("\nQUESTION 27: Arithmetic Operations");

    let num1 = Number(await rl.question("Enter the first number: "));
    let num2 = Number(await rl.question("Enter the second number: "));

    console.log("Sum:", num1 + num2);
    console.log("Difference:", num1 - num2);
    console.log("Product:", num1 * num2);

    if (num2 !== 0) {
        console.log("Remainder:", num1 % num2);
    } else {
        console.log("Remainder cannot be calculated with zero.");
    }


    // QUESTION 28: Numbers Greater Than 10
    console.log("\nQUESTION 28: Numbers Greater Than 10");

    let numbers = [5, 12, 8, 20, 15];

    for (let number of numbers) {
        if (number > 10) {
            console.log(number);
        }
    }


    // QUESTION 29: Age Eligibility
    console.log("\nQUESTION 29: Age Eligibility");

    let age = Number(await rl.question("Enter your age: "));

    if (age >= 18 && Number.isFinite(age)) {
        console.log("You are eligible.");
    } else if (age < 18 && Number.isFinite(age) && age >= 0) {
        console.log("You are not eligible.");
    } else {
        console.log("Please enter a valid age.");
    }


    // QUESTION 30: Simple Calculator Menu
    console.log("\nQUESTION 30: Calculator Menu");

    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");

    let choice = await rl.question("Choose an operation (1-4): ");

    let a = Number(await rl.question("Enter the first number: "));
    let b = Number(await rl.question("Enter the second number: "));

    switch (choice) {
        case "1":
            console.log("Addition:", a + b);
            break;

        case "2":
            console.log("Subtraction:", a - b);
            break;

        case "3":
            console.log("Multiplication:", a * b);
            break;

        case "4":
            if (b !== 0) {
                console.log("Division:", a / b);
            } else {
                console.log("Cannot divide by zero.");
            }
            break;

        default:
            console.log("Invalid menu option.");
    }

    rl.close();
}

main();
