# Advice Generator App

This project entailed creating the Advice Generator App with both mobile and web responsive designs. Key features include 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This project involved replicating a design layout given for desktop and mobile for a Bookmark Landing Page with special features.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon


### Screenshots

Desktop Version:

![Desktop Landing Page](./src/assets/DesktopLandingPage.png)


### Links

- Solution URL: [Frontend Mentor Solution]()
- Live Site URL: [Easybank Landing Page Laura Dev]()

### My Process

I began by setting up TailwindCSS, ReactJS, and my GitHub repository. Additionally, I configured the README template, added all design assets, integrated Google Fonts, and defined the color scheme. I ensured that all commits were successfully pushed to GitHub before beginning my project.

Next, I reviewed the design layout to determine which sections would be components. 


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I re-learned a lot of new information and refreshed myself on different topics.

1. APIS in website development - An API, or application programming interface, enables different software applications to share information and interact with each other. An API is a set of instructions tha tallows software developers to access features and functions - two pieces of software to communicate to each other. The application sending the request is the client and the application sending the response is the server.
2. Try Catch Block - Handles exceptions and errors that may occur during the excecution of a block of code. Try block contains the code that might throw an error. The catch block contains the code if an error occurs in the try block. The code inside the try block is executed line by line. If no errors occur - the catch block is skipped. If an error occurs in the remaining code in the try block then the control is transferred to the catch block.
3. JSON parse - JSON parsing is the process of converting the JSON (JavaSCript Object Notation) string into a JavaScript object. JSON is a data interchange format that is easy for humans to read and write. JavaScript objects allow you to easily access and manipulate the data.
4. JavaScript Object Fundamentals - An object is a collection of key-value pairs where each key is associated with a value. The values can be any data type. 
5. useEffect hook - This hook provided by REact allows the end  user to perform side effects inf unction components. Side effects can include data fetching, manually changing the DOM. In this code, you want to fetch the advice data as soon as the component mounts. With useEffect, I ensure the data fetching happens right after the component is rendered. The empty dependency ([]) ensures the effect only runs once.
6. useEffect Dependencies - The useEffect hook can take depdencies to control when the effect runs. Some common dependencies include state variables, props, context values, derived values, empty arrays and no dependencies. If you have no dependencies then the effect will run after every render.
7. if (loading) - The loading state is initialized to true when the component mounts. An asynchronous function fetches the data - during this the loading remains true. The component checks the loading state to determine what to render.
8. Asynchronous function - A function that operates asynchronously via the event loop allowing the program to execute the other code while waiting for the operation to complete. Async functions are used for operations that take time to complete.
9. API Data - To determine which properties are available from the API repsonse, you can refer to the API documentation. An example of the API Slip API:
{
  "slip": {
    "id": 45,
    "advice": "Your advice text here."
  }
}


### Continued development

I will continue to learn more about TailwindCSS, ReactJS and updating my process of building a website.

### Useful resources

- [Manrope Google Font](https://fonts.google.com/specimen/Manrope) - Design called for this font in the project.
- [Advice Slip API](https://api.adviceslip.com/) - API for design

## Author

- Website - [Laura V](www.lauradeveloper.com)
- Frontend Mentor - [@lavollmer](https://www.frontendmentor.io/profile/yourusername)
- Github - [@lavollmer](https://github.com/lavollmer)