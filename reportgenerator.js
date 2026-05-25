// Task 2: Local Module — reportGenerator.js
// This file is a "local module" that we export for use in other files

/**
 * Generates a formatted report for a student.
 * @param {string} name - The student's name
 * @param {number[]} scores - An array of numeric scores
 * @returns {string} A formatted report string
 */
function generateReport(name, scores) {
    // Calculate the average score
    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;

    // Determine pass or fail (pass if average >= 10)
    const status = average >= 10 ? 'PASS' : 'FAIL';

    // Build and return the formatted report
    const report = `
========== STUDENT REPORT ==========
  Name:    ${name}
  Scores:  ${scores.join(', ')}
  Average: ${average.toFixed(2)}
  Status:  ${status}
====================================`;

    return report;
}

// Export the function so other files can use it with require()
module.exports = { generateReport };
