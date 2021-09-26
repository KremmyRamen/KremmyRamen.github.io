function userInformation(){
    let userText, moodText;
    let company = "Really Xenial Newt Enterprises";
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("date-and-time").innerHTML = "Today is " + today.toDateString() + ", and the time is: " + time;

    let userName = prompt("Please enter your first and last name: ");
    if (userName == null || userName == ""){
        userText = "User cancelled the prompt";
    } else {
        userText = "The " + company + " team welcomes you, " + userName + "!";
    }
    document.getElementById("welcome").innerHTML = userText;

    let mood = prompt("How are you doing today?");
    if (mood == null || mood == ""){
        moodText = "User cancelled the prompt";
    } else {
        moodText = "We're glad you are doing " + mood + "!";
    }
    document.getElementById("mood").innerHTML = moodText;
}

function joke(){
    let jokeText;
    let userJoke = prompt("Give us a joke related to Newts!");
    if (userJoke == null || userJoke == ""){
        jokeText = "User cancelled the prompt to tell a joke";
    } else {
        jokeText = "Newt joke of the day! -> " + userJoke;
    }
    document.getElementById("joke").innerHTML = jokeText;
}

function toCelsius(){
    let celsiusText, celsius;
    let fahrenheit = prompt("Give us a temperature!");
    if(fahrenheit == null || fahrenheit == ""){
        celsiusText = "User cancelled the prompt to convert to celsius";
    } else {
        celsius = (5/9) * (fahrenheit - 32);
            if(celsius<15.5){
            celsiusText = "The temperature is " + celsius + " Celsius, that's too cold for Newts!";
        }
        else if(celsius>21){
            celsiusText = "The temperature is " + celsius + " Celsius, that's too hot for Newts!";
        }
        else if(celsius >=15.6 && celsius<=20.9)
            celsiusText = "The temperature is " + celsius + " Celsius, Newts love this temperature.";
            }
    document.getElementById("celsius").innerHTML = celsiusText;
}

function math(){
    let text;
    var equal = 0;
    var num = prompt("Would you like to: Add, Subtract, Multiply, or Divide? (Enter 1,2,3,4 respectively)")
    if (num == 1){
        var x = prompt("Give us a number between -1000 and 1000: ");
        var y = prompt("Give us a second number between -1000 and 1000");
        if(x == null || x == ""){
            text = "User cancelled the prompt to give the first number";
        } else if (y == null || y == ""){
            text = "User cancelled the prompt to give the second number";
        } else {
            x = parseInt(x);
            y = parseInt(y);
            equal = x + y;
            text = "Adding " + x + " by " + y + " equals " + equal;
        
        document.getElementById("addition").innerHTML = text;
    }
    } else if( num == 2){
        var x = prompt("Give us a number between -1000 and 1000: ");
        var y = prompt("Give us a second number between -1000 and 1000");
        if(x == null || x == ""){
            text = "User cancelled the prompt to give the first number";
        } else if (y == null || y == ""){
            text = "User cancelled the prompt to give the second number";
        } else {
            x = parseInt(x);
            y = parseInt(y);
            equal = x - y;
            text = "Subtracting " + x + " by " + y + " equals " + equal;
        
        document.getElementById("subtraction").innerHTML = text;
    }
    }else if( num == 3){
        var x = prompt("Give us a number between -1000 and 1000: ");
        var y = prompt("Give us a second number between -1000 and 1000");
        if(x == null || x == ""){
            text = "User cancelled the prompt to give the first number";
        } else if (y == null || y == ""){
            text = "User cancelled the prompt to give the second number or tried to divide by 0";
        } else {
            x = parseInt(x);
            y = parseInt(y);
            equal = x * y;
            text = "Multipliying " + x + " by " + y + " equals " + equal;
        
        document.getElementById("multiplication").innerHTML = text;
    }
    }else if( num == 4){
        var x = prompt("Give us a number between -1000 and 1000: ");
        var y = prompt("Give us a second number between -1000 and 1000");
        if(x == null || x == ""){
            text = "User cancelled the prompt to give the first number";
        } else if (y == null || y == ""){
            text = "User cancelled the prompt to give the second number";
        } else {
            x = parseInt(x);
            y = parseInt(y);
            equal = x / y;
            text = "Dividing " + x + " by " + y + " equals " + equal;
        
        document.getElementById("division").innerHTML = text;
        }
    }
}


function noise(){
    let text;
    let noise = prompt("What's a sound a Newt might make?");
    if(noise == null || noise == ""){
        text = "User cancelled the prompt to give a random noise";
    } else {
        text = "Did you know that Newts make the noise " + noise + "!? Isn't that silly?";
    }
    document.getElementById("noise").innerHTML = text;
}

function random(){
    let text; 
    alert("Northern Crested Newt\nEastern Newt\nSmooth Newt\nAlpine Newt\nRed Bellied Newt\nCalifornia Newt")
    let random = prompt("Between the Newts Listed, who is your favorite?");
    if(random == null || random == ""){
        text = "User cancelled the prompt";
    } else {
        text = "Newt of the Month: " + random;
    }
    document.getElementById("random").innerHTML = text;
}
