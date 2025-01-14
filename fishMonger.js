const {boatInventory} = require("./fishingBoat.js")

const mongerInventory = () => {
const catchOfTheDay = boatInventory();
let Inventory = [];
for ( let i = 0; i < catchOfTheDay.length; i++) {
    const fish  = (catchOfTheDay[i])
    if( fish.price <= 7.50 && fish.amount >= 10) {
        Inventory.push(
            {
                id: fish.id,
                species: fish.species,
                weight: fish.weight,
                price: fish.price,
                amount: fish.amount
            })
    }
}
    return Inventory
}

const chefConstraint = () => {
    let inventory = mongerInventory();
    let chefInventory = [];

    for (let i = 0; i < inventory.length; i++) {
        let fish = inventory[i];
        if (fish.price <= 5.00) {
            // Modify the amount directly for fish that meet the price constraint
            chefInventory.push({
                id: fish.id,
                species: fish.species,
                weight: fish.weight,
                price: fish.price,
                amount: Math.floor(fish.amount / 2) // Halve the amount
            })
        }
    }
    return chefInventory
}       




module.exports = { chefConstraint }; 
 
 
 
 
 
 
 /* defining fishmonger needs to buy 10 fish
they can't use boats with less then 10 fish total
dont buy fish priced higher than 7.50
write an array to output those fish standards for the fishmonger
then move on th chef purchasing constraints 
fishmonger === boats < 10 && price + 7.50*/



/*Define the mongerInventory function to:
    Invoke the boatInventory function to get the daily catch
    Filter the catch to include only fish that meet the purchasing constraints (price <= $7.50 and quantity >= 10)
    Buy exactly 10 of each inexpensive fish (or the available quantity if less than 10)
    Filter the purchased fish to meet the chef's price constraint
    Return the filtered array of fish objects
Export the mongerInventory function from the fishMonger.js module*/