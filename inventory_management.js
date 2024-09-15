// Sample Inventory Data
const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
];

// Task 2: Create a Function to Display Product Details
const displayProductDetails = (product) => {
    // Determine stock status
    const stockStatus = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock";
    
    // Log product details
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);};

// Task 3: Function to update product stock after sales
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
    console.log(`Stock Status: ${stockStatus}`);
}

// Task 4: Efficient function to check low stock products
function checkLowStock(inventory) {
    inventory.forEach(product => {
        if (product.quantity <= product.lowStockLevel) {
            console.log(product.name);} });}

// Task 5: Function to calculate total inventory value
function calculateInventoryValue(inventory) {
    return inventory.reduce((totalValue, product) => {
        return totalValue + (product.price * product.quantity);
    }, 0);}

// Task 6: Function to process a sale
function processSale(productName, unitsSold) {
    // Find the product in the inventory by its name
    const product = inventory.find(p => p.name === productName);

    if (product) {
        // Call updateStock to reduce the quantity
        updateStock(product, unitsSold);
        
        // Log a product being found
        console.log("Product found and stock updated."); 
    } else {
        // Log an error message if the product is not found
        console.log(`Error: Product "${productName}" is not in the inventory.`);}}

// Testing Sample Data
console.log("Product Details:"); // Show product details in console 
inventory.forEach(displayProductDetails);

console.log("Low Stock Products:"); // Show low stock in console
checkLowStock(inventory);

const totalValue = calculateInventoryValue(inventory);
console.log(`Total Inventory Value: $${totalValue.toFixed(2)}`); // Show total inventory value in console

console.log("Processing Sale:"); // Showing sales process in console
processSale("Smartwatch", 2); // Sale of 2 Smartwatches shown in console

console.log("Updated Inventory Details:");
inventory.forEach(displayProductDetails); // Display updated product details

console.log("Checking Low Stock After Sale:");
checkLowStock(inventory); // Check which products are now low in stock
