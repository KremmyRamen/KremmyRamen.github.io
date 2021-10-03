// create a variable to hold the prompt answer
let numOfSides = prompt("Xenial Newt 1 would like to know how many sides your polygon has.(0-15)");
function getshape1() { 
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

function shape2() {
    let nsides = prompt("Xenial Newt 2 would like to know how many sides your polygon has.(0-15)");    
    if (nsides == 15) //check number of sides and change text 
        {
            return alert("Your polygon is a pentadecagon");
        } else if (nsides == 14)
        {
            return alert("Your polygon is a tetradecagon");
        } else if (nsides == 13)
        {
            return alert("Your polygon is a triskaidecagon");
        } else if (nsides == 12)
        {
            return alert("Your polygon is a dodecagon");
        } else if (nsides == 11)
        {
            return alert("Your polygon is a hendecagon");
        } else if (nsides == 10)
        {
            return alert("Your polygon is a decagon");
        } else if (nsides == 9)
        {
            return alert("Your polygon is a enneagon");
        } else if (nsides == 8)
        {
            return alert("Your polygon is a octagon");
        } else if (nsides == 7)
        {
            return alert("Your polygon is a heptagon");
        } else if (nsides == 6)
        {
            return alert("Your polygon is a hexagon");
        } else if (nsides == 5)
        {
            return alert("Your polygon is a pentagon");
        } else if (nsides == 4)
        {
            return alert("Your polygon is a tetragon");
        } else if (nsides == 3)
        {
            return alert("Your polygon is a trigon");
        } else if (nsides == 2)
        {
            return alert("Your polygon is a digon");
        } else if (nsides == 1)
        {
            return alert("Your polygon is a henagon");
        } else {
            return alert("There is no polygon with 0 sides!")
        }
}
function validateEntry(numberOfSides){
    var newNumberOfSides = Math.abs(numberOfSides);
    newNumberOfSides = Math.round(newNumberOfSides);
    do
    {
        if(newNumberOfSides < 0 || newNumberOfSides > 10){
            newNumberOfSides = prompt("Rapid Tree Frog Industries would like a number between 0 and 10:");
        }
    } while (newNumberOfSides > 10)
    return newNumberOfSides;
}   
