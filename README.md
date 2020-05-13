<p align="center"><img src="adidas.png" height="40%" width="40%"/></p>

# Adidas Product Display Mock-Up

## Front-End Capstone

This project recreates a fully-functioning clone of an [Adidas.com](https://www.adidas.com/) item product page from scratch. Working modules include the product display, carousel, product selector, and "Add-To-Bag" modal. Each of these unique components are implemented using React.js. Realistic data sets are created and stored using MongoDB. CSS best practices were followed to imitate the original site's exact styling. The project was later converted to React Redux to encourage top-tier architecture and stay up to date with industry standards.

## Usage

<h3>Product Display</h3>

![Product Display](https://i.imgur.com/VFtHST0.gif)
- Renders onclick from library of related images
- Functional arrow icons browse items
- Cursor icon changes on hover

<h3>Carousel</h3>

![Carousel](https://i.imgur.com/Sv8px5W.gif)
- Arrow icon triggers slide transition into next items
- Left and right icon disappear on first and last item respectively
- Utilizes magnify feature onclick

<h3>Product Selector</h3>

![Product Selector](https://i.imgur.com/ErhD0tI.gif)
- Conditionally renders new item onclick
- Renders random item from database on page refresh
- Item comes with images at different angles and related products

<h3>Add-To-Bag</h3>

![Add-To-Bag](https://i.imgur.com/Bxu8Exp.gif)
- Dynamically populates bag modal when size and quantity is selected
- Complete-the-look feature increments total price and quantity of items accordingly

## Installation

- Download repository onto local machine
- Run "npm install" in terminal to download dependencies
- Run "npm start" to start server and access database
- Enter directory named "db" and run "node seed.js" to populate MongoDB
- Run "npm run-script build" to convert JSX into bundle
- Access "localhost:3000" on browser to view page