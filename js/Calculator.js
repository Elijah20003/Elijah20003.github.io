/*This function takes in two numbers and an operator, and compares the answer to the users answer.*/
function Calculate()
{
    //Initialize variables from input
    let number1 = parseFloat(document.getElementById("number1").value)
    let number2 = parseFloat(document.getElementById("number2").value)
    let operator = document.getElementById("operator").value
    let user_answer = parseFloat(document.getElementById("answer").value)

    //Process data according to operator
    let computer_answer;
    let valid_input = true;
    switch(operator)
    {
        case '+':
            computer_answer = number1 + number2;
            break;
        case '-':
            computer_answer = number1 - number2;
            break;
        case '*':
            computer_answer = number1 * number2;
            break;
        case '/':
            computer_answer = number1 / number2;
            break;
        default:
            valid_input = false;

    }

    //Present output according to user answer
    if (valid_input)
    {
        if (user_answer == computer_answer)
        {
            document.getElementById("output").innerHTML = "You are correct!";
        }
        else
        {
            document.getElementById("output").innerHTML = "You are incorrect.";
        }
    }
    else
    {
        document.getElementById("output").innerHTML = 'Invalid operator input. Options: +, -, *, or /';
    }
    
    document.getElementById("output").style.display = "block";
}