function SleepOrWork()
{
    //input
    let now = new Date();
    let month = now.getMonth();
    let day_of_month = now.getDate();
    let day_of_week = now.getDay();
    let message = '';

    //processing
    if (day_of_week == 0 || day_of_week == 6 || (month == 0 && day_of_month == 1) || (month == 6 && day_of_week == 4) || (month == 11 && day_of_month == 25))
    {
        message = "Sleep In";
    }
    else
    {
        message = "Get Up";
    }

    //output

    document.getElementById("output").innerHTML = message;
    document.getElementById("output").style.display = "block";
    
}

//Call the function upon document loading.
SleepOrWork();