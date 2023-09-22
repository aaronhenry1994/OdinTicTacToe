let name = "Aaron"; //string literal
let age = 28; // Number Literal
let isApproved = true; // Boolean literal
let selectedColor = null;

//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number
//Cannot contain a space or hyphen
//Are case sensitive

let firstName ='Aaron';
let lastName ='Henry';

const interestRate = 0.3;
console.log(interestRate);

let person = {
    name: 'Aaron',
    age: 28
};

// Dot notation
person.name = 'John';

// Bracket Notation
let selection = 'name';
person[selection] = 'Mary';

let selectedColors = ['red', 'blue']; // Array literal
console.log(selectedColors.length);

console.log(person);

// Performing a task
function greet(name) {
    console.log('Hello ' + name + ' ' + lastName);

}

greet('John', 'Smith');

// Calculating a value
function square(number) {
    return number * number;
}
let number = square(2);
console.log(square(2));

// Name is a parameter
// John is an argument