<p align="center"><img src="adidas.png" height="40%" width="40%"/></p>

# Adidas Product Display Mock-Up

## Front-End Capstone

This project recreates a fully-functioning [Adidas.com](https://www.adidas.com/) item product page from scratch. Working modules include the product display, carousel, product selector, and "Add-To-Bag" modal. Each of these unique components are implemented using React.js. Realistic data sets are created and stored using MongoDB. CSS best practices were followed to imitate the original site's exact styling. The project was later converted to React Redux to encourage top-tier architecture and stay up to date with industry standards.

## Usage

<h3>Product Display</h3>

![Product Display](https://i.imgur.com/VFtHST0.gif)
- Renders multiple related images from an extensive library
- Functional arrow icons browse through items
- Cursor changes when hovering over image

<h3>Carousel</h3>

![Carousel](https://i.imgur.com/Sv8px5W.gif)
- Clicking arrow icon triggers a slide transition
- Left and right icon disappear on first and last item respectively
- Utilizes magnify and auto-drag feature on click

<h3>Product Selector</h3>

![Product Selector](https://i.imgur.com/ErhD0tI.gif)
- Conditionally renders new item on click
- Displays random item from database on page refresh
- Item comes with images at different angles and related products

<h3>Add-To-Bag</h3>

![Add-To-Bag](https://i.imgur.com/Bxu8Exp.gif)
- Dynamically populates bag modal when size and quantity is selected
- Complete-the-look feature increments total price and quantity of items accordingly

## Installation

- Download repository onto local machine
- Run <i>"npm install"</i> in terminal to download dependencies
- Run <i>"npm start"</i> to start server and access database
- Enter directory named "db" and run <i>"node seed.js"</i> to populate MongoDB
- Run <i>"npm run-script build"</i> to convert JSX into bundle
- Access <i>"localhost:3000"</i> on browser to view page