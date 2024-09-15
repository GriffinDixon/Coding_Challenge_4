// Task 1: Creating an Array of Product Objects
const inventory = [
    {
        name: "Water Bottle",
        price: 1.49,
        quantity: 500,
        lowStockLevel: 100
    },
    {
        name: "Laptop",
        price: 299.99,
        quantity: 50,
        lowStockLevel: 5
    },
    {
        name: "Gum",
        price: 2.99,
        quantity: 350,
        lowStockLevel: 50
    },
    {
        name: "Beer",
        price: 21.99,
        quantity: 75,
        lowStockLevel: 15
    },
    {
        name: "Apples",
        price: 5.49,
        quantity: 200,
        lowStockLevel: 50
    }];
    console.log(inventory); // checking console log to ensure proper code


    // Task 2: Create a Function to Display Product Details
const displayProductDetails = (product) => {
    // Determine stock status
    const stockStatus = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
    
    // Log product details
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);};


// Task 3:Function to update product stock after sales
function updateStock(product, unitsSold) {
    // Update the quantity
    product.quantity -= unitsSold;
    
    // Check stock status
    let stockStatus;
    if (product.quantity <= 0) {
        stockStatus = "Out of Stock";
    } else if (product.quantity <= product.lowStockLevel) {
        stockStatus = "Low Stock";
    } else {
        stockStatus = "In Stock";
    }
    
    // Log the updated product details
    console.log(`Updated Product Name: ${product.name}`);
    console.log(`New Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);}

// Task 4 Efficient function to check low stock products
function checkLowStock(inventory) {
    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) {
            console.log(product.name);}});}








