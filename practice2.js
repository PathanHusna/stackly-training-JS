
/*
PART 2: OPERATORS
Questions 6 to 12
*/

// QUESTION 6: Arithmetic Operators
console.log("QUESTION 6: Arithmetic Operators");

let num1 = 10;
let num2 = 3;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);


// QUESTION 7: Predict the Output (Increment)
console.log("QUESTION 7: Increment Operators");

let a = 5;

console.log(a++);
console.log(a);
console.log(++a);


// QUESTION 8: Predict the Output (Decrement)
console.log("QUESTION 8: Decrement Operators");

let x = 10;
let y = x--;
let z = --x;

console.log(x);
console.log(y);
console.log(z);


// QUESTION 9: Assignment Operators
console.log("QUESTION 9: Assignment Operators");

let value = 20;

value += 5;
console.log("After +=:", value);

value -= 3;
console.log("After -=:", value);

value *= 2;
console.log("After *=:", value);

value /= 4;
console.log("After /=:", value);

value %= 4;
console.log("After %=:", value);


// QUESTION 10: Comparison Operators
console.log("QUESTION 10: Comparison Operators");

console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");


// QUESTION 11: Logical Operators
console.log("QUESTION 11: Logical Operators");

let age = 22;
let hasID = true;

console.log("AND:", age >= 18 && hasID);
console.log("OR:", age >= 18 || hasID);
console.log("NOT:", !hasID);


// QUESTION 12: Ternary Operator
console.log("QUESTION 12: Ternary Operator");

let userAge = 22;

let message = userAge >= 18
    ? "You are 18 or above"
    : "You are below 18";

console.log(message);
