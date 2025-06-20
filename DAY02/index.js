console.log("Day02");

// Value Assignments

let fruit = "apple";
console.log(fruit);
let vegetable = "carrot";
console.log(vegetable);

fruit = vegetable;
// with assignment operator, the value of vegetable is assigned to fruit
// and the value of fruit is replaced with the value of vegetable 
// so now both fruit and vegetable have the same value "carrot"
// but they are not the same variable, they are different variables with different values
// so if we change the value of fruit, it will not affect the value of vegetable
fruit = "banana";
// now fruit is "banana" and vegetable is still "carrot"
// so the value of fruit is changed to "banana" and vegetable is still "carrot"
// so now fruit and vegetable have different values
// but they are still different variables with different values
// so if we change the value of vegetable, it will not affect the value of fruit  

console.log(fruit);
console.log(vegetable);


// -------------------------------------------------------------------------- //

// Naming conventions

// camelCase: first word is lowercase and the first letter of each subsequent word is uppercase
// PascalCase: first letter of each word is uppercase
// snake_case: all letters are lowercase and words are separated by underscores
// kebab-case: all letters are lowercase and words are separated by hyphens
// UPPER_SNAKE_CASE: all letters are uppercase and words are separated by underscores
// UPPER_KEBAB_CASE: all letters are uppercase and words are separated by hyphens
// The name must have digits[0-9], letters[a-zA-Z], underscores[_], and dollar signs[$]
// The name must not start with a digit[0-9]
// The name must not contain spaces
// No Reserved Keywords


// Example
// let $ = "dollar"; // valid
// let _ = "underscore"; // valid
// let 2morrow = "tomorrow"; // invalid, cannot start with a digit
// let react-play; // invalid

let myName = "John Doe"; 
let MyName = "Alice Doe"; 
// myName and MyName are different variables with different values


// -------------------------------------------------------------------------- //

// Variables: Variables are used to store data values in javaScript.

// Variables are containers for storing data values.
// In JavaScript, there are three ways to declare variables: var, let, and const.

// `var` : Function-scoped, keyword is used to declare a variable that can be redeclared (not recommended).
// `let` : Block-Scoped, keyword is used to declare a variable that can be reassigned.
// `const` :  Block-Scoped, keyword is used to declare a variable that cannot be reassigned.

// var address = "123 Main St"; 
// console.log(address); // Output: 123 Main St

// var address = "456 Elm St"; // Reassigning the value of address
// console.log(address); // Output: 456 Elm St


// ***** ERROR *****
// we cannot redeclare a variable with the same name using let or const
// let address = "123 Main St"; 
// console.log(address);

// let address = "456 Elm St"; 
// console.log(address); 


// we can Reassigning it but we cannot redeclare it
let address = "123 Main St"; 
console.log(address);

address = "456 Elm St"; 
console.log(address); 

// difference between reassigning and redeclaring
// reassigning is changing the value of the variable
// redeclaring is declaring the variable again with the same name

/*
 - ** Primitive Data Type: **
      - `String` : A sequence of characters enclosed in single or double quotes.
        - Example: "Hello World", 'JavaScript'
      - `Number` : A numeric value (integer or floating-point).
        - Example: 42, 3.14
      - `Boolean` : A logical value that can be either true or false.
        - Example: true, false
      - `Null` : A special value representing the intentional absence of any object value.
        - Example: null
        - salary = null; // salary is not assigned yet
      - `Undefined` : A variable that has been declared but has not yet been assigned a value.
        - Example: let x; // x is undefined
      - `Symbol` : A unique and immutable primitive value, often used as object property keys.
        - Example: const uniqueSymbol = Symbol('description');
      - `BigInt` : A numeric value that can represent integers with arbitrary precision.
        - Example: const bigIntValue = 1234567890123456789012345678901234567890n;

 - ** Non-Primitive (Reference) Data Type: **     
      - `Object` : A collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
        - Example: const person = { name: "John", age: 30 };
      - `Array` : A special type of object that represents an ordered collection of values.
        - Example: const fruits = ["apple", "banana", "cherry"];
      - `Function` : A block of code that can be called and executed, often used to perform specific tasks.
        - Example: function greet() { console.log("Hello!"); }
*/

//Objects
let stuent = {
    name: "John Doe",
    age: 20,
    isStudent: true,
};

console.log(stuent.name); // Output: John Doe

//Arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // Output: 1

// primitives are immutable, meaning they cannot be changed

// Stack -- primitive data types are stored in the stack memory
// Heap -- non-primitive data types are stored in the heap memory

// stack memory is faster than heap memory
// stack memory is used to store primitive data types and function calls
// heap memory is used to store non-primitive data types and objects
// stack memory is limited in size, while heap memory is not
// stack memory is used for static memory allocation, while heap memory is used for dynamic memory allocation


// How javaScript see Code?

// - Tokenizing
// - Parsing'
// - Interpreting

// Tokenizing: The process of breaking down the code into smaller pieces called tokens.
 
function sayName() {
  var name = 'someName';
  console.log('The name is,',name);
}

console.log(sayName); // Output: [Function: sayName]
console.log(sayName()); // Output: The name is, someName
console.log(name); // Output: ReferenceError: name is not defined
// name is not defined because name is declared inside the function sayName() and is not accessible outside the function