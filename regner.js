

function add(numberOne, numberTwo){
    return numberOne+numberTwo;
}

function multiply(numberOne, numberTwo){
    return numberOne*numberTwo;
}

function substract(numberOne, numberTwo){
    return numberOne-numberTwo;
}

function divide(numberOne, numberTwo){
    return numberOne/numberTwo;
}

//console.log(add(23,7));

var algoritme=prompt('hvad vil du regne ud?')
var firstNumber=parseInt('nummer et');//parseInt-for at input ikke opfattes som en string
var secondNumber=parseInt('nummer to');
switch(algoritme){
    case "add":
        document.write(add(firstNumber,secondNumber));
        break;
    case "multiply":
        document.write(multiply(firstNumber,secondNumber));
        break;
    case "substract":
        document.write(substract(firstNumber,secondNumber));
        break;
    case "divide":
        document.write(divide(firstNumber,secondNumber));
        break;
}
1 function add(numberOne, numberTwo) {
    2     return numberOne+numberTwo;
    3 }
4 function subtract(numberOne, numberTwo) {
    5     return numberOne-numberTwo;
    6 }
7 function multiply(numberOne, numberTwo) {
    8     return numberTwo*numberTwo;
    9 }
10 function divide(numberOne, numberTwo) {
    11     return numberOne/numberTwo;
    12 }
13 // Just to check if our logic works
14 // console.log(add(23,7));
15

16 var algoritme = prompt("Hvad vil du lave?")
17 var firstNumber = parseInt(prompt("Nummer ét"));
18 var secondNumber = parseInt(prompt("Nummer to"));
19

20 switch(algoritme){
    21     case "add":
        22         document.write(add(firstNumber,secondNumber));
        23         break;
        24     case "subtract":
        25         document.write(subtract(firstNumber,secondNumber));
        26         break;
        27     case "multiply":
        28         document.write(multiply(firstNumber,secondNumber));
        29         break;
        30     case "divide":
        31         document.write(divide(firstNumber,secondNumber));
        32         break;
        33     default:
        34         alert("Fault");
        35 }
