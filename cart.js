///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total,current) => total + current.price,0);
console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    cartTotal = cartTotal * (1+tax) - couponValue;
    return cartTotal;
}

console.log(calcFinalPrice(100,20,0.06))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
Basic info about customer like 'name', 'email', and 'phone'. These 3 properties should be string type.
Property 'orderedItems' should be an array of objects, where each object is an item that customer ordered in the past. property of objects
can be like 'itemName' (string), 'quantity' (number), and 'price' (number).

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: "An Mi Nguyen",
    email: "AnN@coffeeshop.com",
    phone: "123-456-7980",
    orderedItems: [
        { itemName: "Pizza", quantity: 2, price: 15.99 },
        { itemName: "Salad", quantity: 1, price: 8.49 },
    ]
};
