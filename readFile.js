// Task 1: Use a Built-in Module (fs)
// We load the built-in 'fs' module — no installation needed, it comes with Node.js
const fs = require('fs');

// Read the file synchronously (blocks until done reading)
// 'utf8' tells Node to return a string instead of raw bytes
const content = fs.readFileSync('message.txt', 'utf8');

// Print the file content to the console
console.log(content);
