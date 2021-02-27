function addNumbers() {
    //get input
    let number = document.getElementById("number").value;
    number = parseFloat(number);
    let sum = 0;

    //process
    for (let i = 1; i <= number; i += 2)
    {
        sum += i;
    }

    //output
    document.getElementById("output").innerHTML = sum;
    document.getElementById("output").style.display = "block";

}