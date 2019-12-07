// Import modules / dependencies / toolkits / NPM packages
const inquire = require('inquirer');
const axios = require("axios");
const fs = require('fs');
const pdf = require("pdf-creator-node");

// Ask user questions using npm inquirer
inquirer
  .prompt([
    /* Pass questions here */
    {
        type: "input",
        name: "name",
        message: "What is your name?"        
    },
    {
        type: "list",
        message: "What is your favorite color?",
        choices: ["red", "green", "blue", "pink"]
    },
    {
        input: "input",
        name: "github",
        message: "Enter your github username"
    }

  ])
  .then(answers => {
    // User's response
    const username = answers.github;

    const queryUrl = `https://api.github.com/users/${username}`;
    return axios.get(queryUrl).then(res => {
        return {
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
            blog:res.data.blog
        };
    });
  });


function generateHTML(data) {
    const colors = {

    }
}




// Using fs module to read html file
// fs.readFile("profile.html", "utf8")

