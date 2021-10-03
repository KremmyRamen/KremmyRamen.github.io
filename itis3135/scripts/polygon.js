// create a variable to hold the prompt answer
let numOfSides = prompt("Xenial Newt would like to know how many sides your polygon has.(0-15)");
// create a variable to hold the validated number after calling the function
let newNumberOfSides = validateEntry(numOfSides);

getShape1(newNumberOfSides);

function getShape1(numOfSides) {
    if (numOfSides == 15) //check number of sides and change text 
        {
            return alert("Your polygon is a pentadecagon");
        } else if (numOfSides == 14)
        {
            return alert("Your polygon is a tetradecagon");
        } else if (numOfSides == 13)
        {
            return alert("Your polygon is a triskaidecagon");
        } else if (numOfSides == 12)
        {
            return alert("Your polygon is a dodecagon");
        } else if (numOfSides == 11)
        {
            return alert("Your polygon is a hendecagon");
        } else if (numOfSides == 10)
        {
            return alert("Your polygon is a decagon");
        } else if (numOfSides == 9)
        {
            return alert("Your polygon is a enneagon");
        } else if (numOfSides == 8)
        {
            return alert("Your polygon is a octagon");
        } else if (numOfSides == 7)
        {
            return alert("Your polygon is a heptagon");
        } else if (numOfSides == 6)
        {
            return alert("Your polygon is a hexagon");
        } else if (numOfSides == 5)
        {
            return alert("Your polygon is a pentagon");
        } else if (numOfSides == 4)
        {
            return alert("Your polygon is a tetragon");
        } else if (numOfSides == 3)
        {
            return alert("Your polygon is a trigon");
        } else if (numOfSides == 2)
        {
            return alert("Your polygon is a digon");
        } else if (numOfSides == 1)
        {
            return alert("Your polygon is a henagon");
        } else {
            return alert("There is no polygon with 0 sides!")
        }
}
function getShape2(numOfSides) {
     numOfSides = prompt("Xenial Newt would like to know how many sides your polygon has.(0-15)");  
    numOfSides = validateEntry(numOfSides);  
        if (numOfSides == 15) //check number of sides and change text 
            {
                return alert("Your polygon is a pentadecagon");
            } else if (numOfSides == 14)
            {
                return alert("Your polygon is a tetradecagon");
            } else if (numOfSides == 13)
            {
                return alert("Your polygon is a triskaidecagon");
            } else if (numOfSides == 12)
            {
                return alert("Your polygon is a dodecagon");
            } else if (numOfSides == 11)
            {
                return alert("Your polygon is a hendecagon");
            } else if (numOfSides == 10)
            {
                return alert("Your polygon is a decagon");
            } else if (numOfSides == 9)
            {
                return alert("Your polygon is a enneagon");
            } else if (numOfSides == 8)
            {
                return alert("Your polygon is a octagon");
            } else if (numOfSides == 7)
            {
                return alert("Your polygon is a heptagon");
            } else if (numOfSides == 6)
            {
                return alert("Your polygon is a hexagon");
            } else if (numOfSides == 5)
            {
                return alert("Your polygon is a pentagon");
            } else if (numOfSides == 4)
            {
                return alert("Your polygon is a tetragon");
            } else if (numOfSides == 3)
            {
                return alert("Your polygon is a trigon");
            } else if (numOfSides == 2)
            {
                return alert("Your polygon is a digon");
            } else if (numOfSides == 1)
            {
                return alert("Your polygon is a henagon");
            } else {
                return alert("There is no polygon with 0 sides!")
            }
    }
function validateEntry(numOfSides){
    var newNumberOfSides = Math.abs(numOfSides);
    newNumberOfSides = Math.round(newNumberOfSides);
    do
    {
        if(newNumberOfSides < 0 || newNumberOfSides > 15){
            newNumberOfSides = prompt("Xenial Newt would like to know how many sides your polygon has.(0-15)");
        }
    } while (newNumberOfSides > 15)
    return newNumberOfSides;
}   
