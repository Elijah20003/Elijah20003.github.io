
function GiveFootWear() 
{
    //input
    let weather = document.getElementById("weather").value;

    //process data
    let output = "No Selection";
    switch (weather)
    {
        case "hot":
            output = "Sandals";
            break;
        case "rain":
            output = "Galoshes";
            break;
        case "snow":
            output = "Boots";
            break;
        case "unknown":
            output = "Shoes";
            break;
    }

    //output
    document.getElementById("output").innerHTML = output;
    document.getElementById("output").style.display = "block";
}