# Student Store Project - Michael Shiwbaran
# Time Spent in Total - {12 Hours}

# API used - https://codepath-store-api.herokuapp.com/store

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## *Week 2* Application Features

### Video Walkthrough

<a href="https://www.loom.com/share/bd5a31570d934deb92a44567fb011c96">
    <p>Student Store - 17 June 2023 - Watch Video</p>
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/bd5a31570d934deb92a44567fb011c96-with-play.gif">
  </a>

### Core Features

- [X] The website displays header, banner, search, product grid, about, contact, and footer section.
- [X] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [X] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [X] Users can search for products.
- [X] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [X] Users can click to expand the shopping cart in the left navigation.
- [X] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [X] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [X] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can leave ratings for products they have purchased.)

### Notes

- I wasn't sure if I needed to include the questions that were in the README from the first project, but just to answer them quickly:
I felt as though the implementation of both the core and stretch features were manageable. With help from my peers, specifically Daniel, working through these tasks were much easier than if I was doing it by myself. The material we learned in class definitely helped us complete the core features, but I feel that it was the live demos that helped the most. If I had more time, I'd want to try and make the website more responsive, such as fixing the css in the product detail page as metioned in the walkthrough video, as well as touch up the logic on the shopping cart aspect because the feature is a little buggy and fails to work under certain conditions, such as trying to remove items from your cart while swapping categories.

## *Week 3* Application Features

### Core Features

- [ ] User can click to expand the shopping cart in the left navigation.
- [ ] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ ] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [ ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [ ] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [ ] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can create a wish list of products they are interested in but not yet ready to purchase.)
