//  Products Cart Object

let Name = ["Rice", "Dal", "Salt"]
let Quantity = [2, 3, 1]
let Price = [60, 50, 20]
//  create Products_Cart variable for  to store no of object in arry 
let Products_Cart = []
// use forloop for genrate blank object
for( let i=0;i<Name.length; i++){
    // crate products variable for blank object
    let Products = {}
    // use forloop for get key value pair to store products object
    Products_Cart.push(Products)
    for( let j=0;j<Name.length; j++){
        Products["name"]=Name[i]
        Products["quantity"]=Quantity[i]
        Products["price"]=Price[i]
        
    }
}
// create totalPrice variable for calculates the total values of items (multiplying quantity of each with its price) 
let totalPrice = 0
// use foreach loop foe get Products_Cart arry object itemas values 
Products_Cart.forEach((value)=>{
    totalPrice+=value.quantity*value.price
})
// print final realt here
console.log(totalPrice)
