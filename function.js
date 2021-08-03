//globally variable declearetion
var number1 = 18;
var number2 = 10;
// function declearation 
function addition() {
    var num1=12;
    var num2 =13;
    var sum =num1+num2;
    return sum;
}
function substruction(num1 , num2) {
    var sub = num2 - num1;
    return sub;
    
}
function multiplication(num1 , num2) {

    var sub = num2*num1;
    return sub;
}
// function  call
console.log(addition());
console.log("Substructrion of numbers : ",substruction(number1, number2));
console.log("Multiplication of numbers :" , multiplication (number2 , number1));

