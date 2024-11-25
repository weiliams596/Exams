function other(){
    let num1 =+prompt("Please enter first number:");
    while(num1==null || isNaN(num1)){
        num1=+prompt("Please enter first number:");
    }
    let num2 =num1;
    num1=+prompt("Please enter second number:");
    while(num1==null || isNaN(num1)){
        num1=+prompt("Please enter second number:");
    }
    alert("The number1 is : "+num1 +"\nThe number2 is : "+num2);
}