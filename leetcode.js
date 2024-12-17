// 1 Write a function createHelloWorld. It should return a new function that always returns "Hello World".


// var createHelloWorld = function() {
    
//     return function(...args) {
//         return "Hello World"
//     }
// };


// const f = createHelloWorld()
// console.log(f());










// qestions
// 1  Print multiplication table: Write a loop that prints the multiplication table of 5 (e.g., 5 x 1 = 5, 5 x 2 = 10, ...).


// let table = 2;

// for (let i = 1; i <= 10; i++) {

//     console.log(`table ${table}*${i} == ${table * i}`);

// }

// 2 Factorial of a number: Write a program to calculate the factorial of a given number using a loop.


// let factrial = 1
// let n= 5

// for (let i = 1; i <= n; i++) {
//     factrial *= i
//   console.log(factrial);
  
    
// }


// 3 Reverse a string: Write a program to reverse a string using a loop.


// let string = "helloworld"

// for (let i = string.length; i>=0; i-- ){
//     console.log(string[i]);
    
// }

// 4 Count vowels in a string: Write a program to count the number of vowels (a, e, i, o, u) in a given string.


// let a = "helloworld"

// for (let i = 0; i<=a.length; i++ ){
//    if (i=='a'|| i=='e') {
//     console.log(i,"pp");
    
//    }
// }



//5 FizzBuzz: Print numbers from 1 to 100, but:

// Print "Fizz" for multiples of 3,
// Print "Buzz" for multiples of 5,
// Print "FizzBuzz" for multiples of both 3 and 5.

// for (let i = 1; i <=100; i++) {
//   if(i%3==0){
//     console.log("fizz⭐",i);
    
//   }
//   if(i%5==0){
//     console.log("buzz👍",i);
    
//   }
//   if(i%5==0 && i%3==0){
//     console.log("fizzbuzz🔥",i);
    
//   }
    
// }