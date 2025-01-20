
function makecoffee(type, ...ingri)
{
    console.log(`making a ${type} coffee`);

    if(ingri.length>0)
    {
        return (`Adding ingredients: ${ingri}.`);
    }    
    else
    {
        return ("No additional ingredients.");
    }

}

console.log((makecoffee("Espresso", "sugar", "milk", "cinnamon" )));
console.log((makecoffee("black")));