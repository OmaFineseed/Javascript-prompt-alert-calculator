action = prompt ('what operation whould you like to perform  +,  -,  *,  /');
let num1, num2;
 
num1 = parseFloat(parseInt(prompt('Your first number')));
num2 = parseFloat(parseInt(prompt('Your second number')));

if (isNaN (num1) || isNaN (num2)){
    alert("You entered a wrong choice");
}
else if (action == "+" ) {
    a = num1 + num2
alert(a, " ", "is the sum of the numbers you chose");

}
else if (action == "-" ) {
   s = num1 - num2
        
alert(s, "is the difference of the numbers you chose");
}
 

else if (action == "*") {
     m = num1 * num2
alert(m, " ", "is the product of the numbers you chose");
}

else if (action == "/") {
   d = num1 / num2
alert(d, " ", "is the quotient of the numbers you chose");
}
 
 