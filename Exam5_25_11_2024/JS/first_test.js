function firstTest() {
    let firstNumber = +prompt("Please enter first number:");
    let secondNumber = +prompt("Please enter second number");
    if (firstNumber == null || isNaN(firstNumber)) {
        while (isNaN(firstNumber)) {
            firstNumber = +(prompt("Please enter first number"));
        }
    }
    else if(firstNumber==0){
        alert("The first number can not be 0!")
        while (isNaN(firstNumber) || firstNumber==0||firstNumber==null) {
            firstNumber = +(prompt("Please enter first number"));
        }
    }
    if (secondNumber == null || isNaN(secondNumber)) {
        while (isNaN(secondNumber)) {
            secondNumber = +(prompt("Please enter second number"));
        }
    }
    let retValue = "The first number is : " + firstNumber + "\n" + "The second number is : " + secondNumber + ";";
    retValue += "These numbers add : " +(firstNumber + secondNumber) + ";\n";
    retValue += "These numbers dvd : " + (firstNumber / secondNumber) + ";\n";
    retValue += "These numbers mult : " + (firstNumber * secondNumber) + ";\n";
    retValue += "These numbers minus : " + (firstNumber - secondNumber) + ";\n";
    alert(retValue);
}

firstTest();