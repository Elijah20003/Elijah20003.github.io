function ConvertToKilograms()
{
    let pounds = parseFloat(document.getElementById("pounds").value);
    let kilograms = pounds * 0.45359;
    
    document.getElementById("output").innerHTML = kilograms.toFixed(1) + ' Kilograms';
    document.getElementById("output").style.display = "block";
}