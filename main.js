// Task 2: Using a Local Module — main.js
// Import our local module using a relative path (the './' is required)
const { generateReport } = require('./reportGenerator');
 
// Call the function with example data
const report1 = generateReport('Alice', [12, 15, 8, 14, 11]);
console.log(report1);
 
const report2 = generateReport('Bob', [5, 8, 7, 6, 9]);
console.log(report2);
 
