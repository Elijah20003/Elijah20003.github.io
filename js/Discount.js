function CheckDiscount()
{
    //input

    let now = new Date();
    let day_of_week = now.getDay();

    let subtotal = parseFloat(document.getElementById("subtotal").value);
    let total = 0;
    
    //Processing
    if ((day_of_week == 2 || day_of_week == 3) && subtotal > 50)
    {
        //Apply discount
        subtotal *= .9;
    }

    //Apply tax
    total = subtotal * 1.06

    //Output
    document.getElementById("output").innerHTML = "$" + total.toFixed(2);
    document.getElementById("output").style.display = "block";

}