//converting inches to centimeters function
let inches: number = 1;

function toCentimeters (inches: number){
    return inches * 2.54;
}
console.log(toCentimeters(10))

//converting pounds to kg
let pounds: number = 1;

function toKgs(pounds: number){
    return pounds * 0.453592;
}
console.log(toKgs(10))

//converting feet to meters
let _feet: number = 1;

function toMeters(_feet: number){
    return _feet * 0.3048;
}
console.log(toMeters(10))

//converting feet to meters
let _fahrenheit: number = 1;

function tooCelsius(_fahrenheit: number){
    return (_fahrenheit  - 32) * 5/9;
}
console.log(tooCelsius(10))

//checking if num is odd or even
function isOddOrEven(num: number){
    let result = (num % 2 == 0) ? "even" : "odd";
    return result;
   }
   console.log(isOddOrEven(11))

//Fizz-Buzz Game

function fizzBuzz(numb: number){
    if(numb % 3 == 0 && numb % 5 == 0){
        return "Fizz-Buzz!";
    }
    if (numb % 3 == 0) {
        return "Fizz!";
    }
    if (numb % 5 == 0) {
        return "Buzz!";
    } else {
        return numb;
    }
}
console.log(fizzBuzz(5));