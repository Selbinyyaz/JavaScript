// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.


const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error


//JavaScript const variables must be assigned a value when they are declared:

//incorrect

//const pi;
//pi=3.14;

//when to use javascript const !!!!!!

// As a general rule, always declare a variable with const unless you know that the value will change.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp