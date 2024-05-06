// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    const buyProduct = products.find(product => product.id === id);
    
        if (buyProduct) {
            const existProduct = cart.find(product => product.id === id);
    
            if (existProduct) {
                // If the product is already in the cart, increase its quantity
                existProduct.quantity++;
            } else {
                // If the product is not in the cart, add it with a quantity of 1
                const newProduct = { ...buyProduct, quantity: 1 };
                cart.push(newProduct);
            }
    
            // Update Cart Counter
            countProductElement.innerText = cart.reduce((total, product) => total + product.quantity, 0);
    
            console.log(buyProduct.name + " Added to cart.");
    
        // Recalculate the global total after updating the cart
        total = calculateTotal();
        totalPriceElement.innerText = total.toFixed(2);
        console.log("Total= " + calculateTotal())    
        }
}

var countProductElement = document.getElementById('count_product');

// Exercise 2
function cleanCart() {
    cart = [];
    countProductElement.innerText = '0';
    
    // Reset Cart total price to 0
    total = 0;
    console.log('Cart is cleaned.');

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

var totalPriceElement = document.getElementById('total_price');

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}