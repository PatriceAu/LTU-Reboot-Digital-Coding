function calculator (number1, number2, operator) {

switch (operator) {
    case "multiply":
        console.log ("The answer is " +number1*number2);
        break;
        case "add":
        var addAnswer = number1+number2;    
        console.log ("The answer is " +addAnswer);
            break;
default:
    console.log("error");
    break;
}

}

calculator( 4, 0,"add");
