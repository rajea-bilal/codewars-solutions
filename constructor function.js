function PizzaMachine(size, crust, flavour, sauce){

    this.size = size
    this.crust = crust
    this.flavour = flavour
    this.sauce = sauce 

    this.eat = function() {
        console.log('Yum', 'Yum')
    }
    this.burnMouth = function() {
        console.log('Ouch')
    }
    this.deliveryTime = function() {
        console.log('Calculating...')
    }
}

let pizzaTwo = new PizzaMachine ('small', 'cheese', 'meatballs', 'heavy');
console.log(pizzaTwo);

PizzaMachine.prototype.cheese = true

console.log(pizzaTwo.cheese);