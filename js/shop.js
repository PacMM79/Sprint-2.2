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
    
        // Recalculate the global total after updating the cart
        total = calculateTotal();
        totalPriceElement.innerText = total.toFixed(2);
                
        // Call applyPromotionsCart and printCart after updating the cart
        applyPromotionsCart();
        printCart();
        }
}

var countProductElement = document.getElementById('count_product');

// Exercise 2
function cleanCart() {
    cart = [];
    countProductElement.innerText = '0';
    
    // Reset Cart total price to 0
    total = 0;
    totalPriceElement.innerText = total.toFixed(2);

    // Update the modal content after cleaning the cart
    open_modal();

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
    // Loop through each product in the cart
    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];
    
        // Check if the product has an offer and apply the discount
        if (product.offer) {
            var quantity = cart.reduce((total, item) => (item.id === product.id ? total + item.quantity : total), 0);
    
            if (quantity >= product.offer.number) {
                // Set the discount percentage for the product
                product.discountPercent = product.offer.percent;
            } else {
                // No applicable offer, so set discountPercent to 0
                product.discountPercent = 0;
            }
            }
        }
    }
    // Helper function to calculate the discount for a product
    function calculateDiscount(product) {
        return (product.discountPercent / 100) * product.price * product.quantity;
    
}    

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    // Clear previous content in the modal body
    cartListElement.innerHTML = '';

    // Fill the shopping cart modal manipulating the shopping cart dom
    
     // Check if the cart is not empty
    if (cart.length > 0) {
        var totalPrice = 0;
        var groupedCart = groupCartByProduct();
    
        for (var productID in groupedCart) {
            if (groupedCart.hasOwnProperty(productID)) {
                var product = groupedCart[productID][0]; // Take the first item as they are the same product
                var quantity = groupedCart[productID].reduce((total, item) => total + item.quantity, 0);
    
                // Only display products with a quantity greater than zero
                if (quantity > 0) {
                    // Calculate total price for the product (with discount if applicable)
                    var discount = product.discountPercent || 0;
                    var productTotal = product.price * quantity * (1 - discount / 100);
                    totalPrice += productTotal;
    
                    // Create a new row for each product in the cart_list tbody
                    var row = cartListElement.insertRow();
                    row.innerHTML = `
                        <td>${product.name}</td>
                        <td>$${product.price.toFixed(2)}</td>
                        <td>${quantity}</td>
                        <td>$${productTotal.toFixed(2)}</td>
                        <td>
                            <button type="button" class="btn btn-outline-success btn-sm" onclick="buy(${product.id})">
                                +1
                            </button>
                            <button type="button" class="btn btn-outline-danger btn-sm" onclick="removeFromCart(${product.id})">
                                -1
                            </button>
                        </td>
                    `;
                }
            }
        }
    
            // Update the total_price span
            totalPriceElement.innerText = totalPrice.toFixed(2);
        } else {
            // IF the cart is empty, display a message in the cart_list tbody
            var emptyRow = cartListElement.insertRow();
            var cell = emptyRow.insertCell(0);
            cell.colSpan = 4;
            cell.textContent = 'Your cart is empty.';
        }
    }
    
    
    function groupCartByProduct() {
        //Create a map to group cart items by product id
        var groupedCart = {};
    
        for (var i = 0; i < cart.length; i++) {
            var productID = cart[i].id;
    
            if(!groupedCart[productID]) {
                groupedCart[productID] = [];
            }
            groupedCart[productID].push(cart[i]);
        }
        return groupedCart;
}

var cartListElement = document.getElementById('cart_list');

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    // Find the index of the product with the given id in the cart
    const index = cart.findIndex(product => product.id === id);

    // If the product is in the cart
    if (index !== -1) {
        // Decrease the quantity by 1
        cart[index].quantity--;

        // If the quantity becomes zero, remove the product from the cart and the corresponding row from the modal
        if (cart[index].quantity === 0) {
            const removedProduct = cart.splice(index, 1)[0];

            // If the cart is not empty, recalculate the global total by applying discounts to all products
            if (cart.length > 0) {
                total = calculateTotal();
                totalPriceElement.innerText = total.toFixed(2);
            } else {
                // If the cart is empty, reset the total to 0
                total = 0;
                totalPriceElement.innerText = total.toFixed(2);
            }

            // Update promotions after modifying the cart
            applyPromotionsCart();
        } else {
            // If the quantity is not zero, recalculate the global total after updating the cart and applying promotions
            total = calculateTotal();
            totalPriceElement.innerText = total.toFixed(2);

            // Update promotions after modifying the cart
            applyPromotionsCart();
        }

        // Update the count product element
        countProductElement.innerText = cart.reduce((total, product) => total + product.quantity, 0);

        // Explicitly call printCart to update the modal content
        printCart();
    }
}

function open_modal() {
    // Apply promotions before printing the cart
    applyPromotionsCart();
    // Reset the total price to 0
    total = 0; 
    printCart();
}