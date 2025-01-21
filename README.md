# Assignment - E-commerce Product List

## Project Overview

This project is a basic front-end application built using **React.js** and **CSS**, which integrates with the [Fake Store API](https://fakestoreapi.com/) to fetch and display a list of products. The application demonstrates core e-commerce functionalities, including product listing, filtering, sorting, detailed views, and a cart system.

## Features Implemented

### 1. **Fetch and Display Products**

- Fetches product data from the Fake Store API.
- Displays:
  - Product image.
  - Title.
  - Price.
  - Category.

### 2. **View Product Details**

- Clicking on a product navigates to a detailed view page showing:
  - Title
  - Description
  - Price
  - Rating
  - Category
  - Full-size product image

### 3. **Filter and Search**

- **Search Bar**: Filters products by name.
- **Category Dropdown**: Filters products by category (e.g., "electronics," "jewelry").

### 4. **Sorting**

- Allows users to sort products by:
  - Price (Low to High, High to Low)
  - Rating (High to Low)

### 5. **Add to Cart**

- Users can add products to a cart.
- Displays the total number of items in the cart in the header.
- A dedicated "Cart" page includes:
  - List of products in the cart.
  - Quantity adjustment for each product.
  - Total price calculation.

## Technical Details

- **Framework**: React.js
- **Styling**: CSS
- **API**: [Fake Store API](https://fakestoreapi.com/)
- **Version Control**: Git

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your system.

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```
   The application will be accessible at `http://localhost:3000/`.

### Deployment

The application is deployed on **Vercel**. Access the live demo [here](#).

## Notes

1. Ensure you have a stable internet connection to fetch data from the Fake Store API.
2. The application uses React Router for navigation between pages.
3. All styling is implemented with plain CSS to maintain simplicity and focus on functionality.

## Folder Structure

```
src/
├── components/        # Reusable components (e.g., ProductDetails, Cart, CategoryFilter)
├── context/           # Cart context logic with all cart-related functions
├── App.js             # Main application component
├── index.js           # Entry point
└── styles/            # CSS files
```

## Meaningful Commits

- `feat: implement product listing with API integration`

## Contributors

- **Gaurav Singh**
