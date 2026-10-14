
/* PART 4: SWITCH AND LOOPS */

// QUESTION 19: Switch - Traffic Light Color
console.log("QUESTION 19: Traffic Light");

let color = "red";

switch (color) {
    case "red":
        console.log("Stop!");
        break;

    case "yellow":
        console.log("Get ready!");
        break;

    case "green":
        console.log("Go!");
        break;

    default:
        console.log("Error: Invalid traffic light color");
}


// QUESTION 20: Print Numbers from 1 to 20
console.log("\nQUESTION 20: Numbers 1 to 20");

for (let i = 1; i <= 20; i++) {
    console.log(i);
}


// QUESTION 21: Print Even Numbers from 2 to 20
console.log("\nQUESTION 21: Even Numbers");

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}


// QUESTION 22: While Loop - Numbers 10 to 1
console.log("\nQUESTION 22: While Loop");

let num = 10;

while (num >= 1) {
    console.log(num);
    num--;
}


// QUESTION 23: Do-While Loop - Numbers 1 to 10
console.log("\nQUESTION 23: Do-While Loop");

let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 10);


// QUESTION 24: For-Of Loop - Characters in JavaScript
console.log("\nQUESTION 24: Characters");

let language = "JavaScript";

for (let character of language) {
    console.log(character);
}


// QUESTION 25: For-Of Loop - Student Names
console.log("\nQUESTION 25: Student Names");

let students = ["Priya", "Husna", "Rahul", "Ayesha", "Arun"];

for (let studentName of students) {
    console.log(studentName);
}


// QUESTION 26: For-In Loop - Object Keys and Values
console.log("\nQUESTION 26: Student Object");

let student = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}
