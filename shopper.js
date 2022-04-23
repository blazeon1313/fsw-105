var shopper = {
    firstName: "Kristoffer",
    lastName: "Krueger",
    age: 44,
    hasCreditCard: true,
    shoppingCart : ["orange juice", "eggs", "bacon", "sausage"],
    fullName: function(){
       return this.firstName + this.lastName;
    }
};
console.log (shopper.fullName());
