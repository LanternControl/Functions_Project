// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(n1, n2){
    if (n1 > n2) {
       console.log(n1)
        
    } else {
       console.log(n2)
    }
    }
max(1,2)



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(n1, n2, n3){
    if (n1 > n2  && n1 > n3) {
        console.log(n1)
    }
    else if (n2 > n1 && n2 > n3){
        console.log(n2)
    }
    else {
        console.log(n3)
    }
    
}
maxOfThree(1,2,3)


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    if (char === 1  ) {
     return true;
    }
    else{
      return false;
    }
}
isVowel(1)


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(n1, n2){
    return n1 + n2;
}

sum(1,2)

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

avg(1,2,3)


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(string){
    let getLength = String.length;
}
getLength(lakjdlfjal);

    
// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(n1, n2) {
    if (n2 > n1) {
        return true;
}
    else {
        return false;
    }
}

greaterThan(5,5)

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
