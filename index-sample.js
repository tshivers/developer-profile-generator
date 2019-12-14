/* USED index-sample.js AS BOILERPLATE TEMPLATE TO WRITE CODE FOR HW ASSIGNMENT

// Import modules / dependencies / toolkits
var fs = require('fs');
var inquirer = require('inquirer');
var pdf = require("pdf-creator-node");

// Step 1: Use fs module to read html file
var html = fs.readFileSync("profile.html", "utf8");

// Step 2: Prompt user for information
inquirer
  .prompt([
    // Question 1
    {
      type: "input",
      message: "What is your name?",
      name: "Ty Shivers"
    },
    // Question 2
    {
      type: "input",
      message: "What is your profession?",
      name: "Technical Operations Specialist"
    },
    // Question 3
    {
      type: "list",
      message: "What is your favorite color?",
      choices: ["red", "green", "blue", "pink"],
      name: "color"
    }
  ])
  .then(answers => {
    console.log('Thanks for your input!');
    console.log('Here are your results:');
    console.log(answers);

    // Step 3: Set up configurations for pdf
    var options = {
      format: "A3",
      orientation: "portrait",
      border: "10mm"
    };
    
    var document = {
      html: html,
      data: answers,
      path: "./profile.pdf"
    };

    // Create pdf
    pdf.create(document, options)
    .then(res => {
      console.log('Successfully created profile pdf!');
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });

  });
  */