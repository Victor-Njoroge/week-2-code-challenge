# Cutest Animal Voting Website

Welcome to the Cutest Animal Voting Website! This website allows users to vote for the cutest animal from a list of adorable contenders. It provides a fun and engaging platform for users to express their opinions and determine the cutest animal based on the votes.

## Features

- List of adorable animal contenders with images.
- Ability to vote for a specific animal.
- Real-time vote count updates.
- Reset option to reset the votes for all animals.
- Simple and intuitive user interface.

## Technologies Used

- HTML5 and CSS3 for the website layout and styling.
- JavaScript for dynamic functionality and vote counting.
- Fetch API for making HTTP requests to update vote counts.By the help of Json-server

## Setup and Usage

1. Clone the repository or download the source code.
2. Open the project folder in a code editor of your choice.
3. Through the terminal activate Json_server by running `npx json-server --watch db.json --port 3000`
4. Open the `index.html` file in a web browser.
5. Explore the list of adorable animal contenders.
6. Click on the "Vote" button for your favorite animal to register your vote.
7. The vote count for each animal will be updated in real-time.
8. Click on the "Reset" button to reset the votes for all animals.
9. Enjoy voting for the cutest animal!

## Project Structure

The project follows a simple file structure:
1. With the help of the `index.html` the project is able to be potrayed in the website
2. With the use of `style.css` a simple web layout has been perpoted on the website
3. The `index.js` plays a big role in fetching data from the `db.json` through the help of the `Json-server` in order to fetch and render items to the `index.html`

## What has been entailed in the `index.js`

1. Event Listeners such as: Onclick and Onscroll
2. GET and PATCH method
3. Several functions (`arrow function, anonymous functions`)