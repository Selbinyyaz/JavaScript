//Variables defined with let cannot be redeclared.

let a = "Hello";

//let a = "world"; it is already defined 



//JavaScript had only Global Scope and Function Scope.

//const and let
// These two keywords provide Block Scope in JavaScript.

// Variables declared inside a { } block cannot be accessed from outside the block:
{
    let x = 2;
}
// x can NOT be used here

let x = 10;
// Here x is 10

{
    let x = 2;
    // Here x is 2
}

// Here x is 10

//=====================================With let, redeclaring a variable in the same block is NOT allowed:
var x = 2;    // Allowed
let x = 3;    // Not allowed

{
    let x = 2;    // Allowed
    let x = 3     // Not allowed
}

{
    let x = 2;    // Allowed
    var x = 3     // Not allowed
}