// Import modules / dependencies / toolkits / NPM packages
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require("axios");
const {
  generateHTML, colors
} = require("./generateHTML");
const pdf = require("pdf-creator-node");
const puppeteer = require("puppeteer");

// Using fs module to read html file
// fs.readFile("profile.html", "utf8", function(error, data) {
//  console.log("Profile has been generated!");

//  console.log(data);
//})

// Ask user questions using npm inquirer

inquirer
  .prompt([
    /* Pass questions here */
    {
      type: "input",
      message: "What is your name?",
      name: "name"          
    },
    {
      type: "list",
      message: "What is your favorite color?",
      choices: ["red", "green", "blue", "pink"],
      name: "color"
    },
    {
      input: "input",
      message: "Enter your github username",
      name: "github"    
    }
  ])
  .then(answers => {
    // User's response
    const username = answers.github;

    const queryUrl = `https://api.github.com/users/${username}`;
     axios.get(queryUrl).then(res => {
        let userInfo = {
            name: answers.name,
            color: answers.color,
            username: answers.github,
            bio: res.data.bio,
            image: res.data.avatar_url,
            location: res.data.location,
            github: res.data.html_url,
            repos: res.data.public_repos,
            followers: res.data.followers,
            following: res.data.following,
            blog: res.data.blog
        };

        let userProfile = generateHTML(userInfo)

    // Set up configurations for pdf
    var options = {
      format: "A3",
      orientation: "portrait",
      border: "10mm"
    };
    
    var document = {
      html: userProfile,
      data: userInfo,
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
  });


/* function generateHTML(data) {
    const colors = {

      

    }
} */

// Generate puppeteer to convert html into pdf (pdf-creator-node) 




