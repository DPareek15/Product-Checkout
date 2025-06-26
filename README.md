# Simple Product Checkout Web Application

## Description

A modern, responsive web application that allows users to browse products, add them to a shopping cart using Product IDs, and perform a simple checkout operation. The application features a clean, intuitive interface with enhanced user experience features while maintaining focus on core functionality.

### Key Features

- **Product Browsing**: View a predefined catalog of products with details including ID, name, image, and price
- **Cart Management**: Add products using Product ID input or convenient click-to-add functionality
- **Quantity Control**: Update product quantities directly in the cart (Bonus Feature)
- **Product Removal**: Remove individual products or clear the entire cart (Bonus Feature)
- **Checkout Simulation**: Calculate and display total amount without actual payment processing
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Persistent Cart**: Cart data persists across browser sessions using Web Storage API

## Tech Stack

- **Next.js 15** - React framework for production-ready applications with file-based routing; chosen for its excellent developer experience, built-in routing, and optimization features
- **TypeScript** - Type-safe JavaScript for better development experience and code reliability; provides static type checking, improving code quality and reducing runtime errors
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development, enables rapid prototyping and consistent design system
- **Tabler Icons** - Beautiful, customizable and comprehensive set of clean, modern icons that enhance the user interface

### Why These Libraries?

- **Performance**: Next.js offers automatic code splitting and optimization
- **Developer Experience**: TypeScript with Next.js provides excellent IntelliSense and error detection
- **Maintainability**: Tailwind's utility classes make styling predictable and easy to modify
- **Accessibility**: All chosen libraries follow modern web standards and accessibility guidelines

## How to Run the Application Locally

### Prerequisites

- Node.js (version 16.0 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd simple-product-checkout
```

2. **Install the dependencies**

```bash
npm install
# or
yarn install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open the application**

Navigate to ```http://localhost:3000``` in your web browser

### Application Structure

├── pages/  
│   ├── index.tsx          # Home page - Product catalog and adding to cart  
│   ├── cart.tsx           # Cart page - Cart management and editing  
│   └── checkout.tsx       # Checkout page - Order summary and payment simulation  
├── components/            # Reusable UI components  
├── data/                  # Product details and data  
├── types/                 # TypeScript type definitions  

## Assumptions made

1. **Product Catalog:**

- A predefined set of products is hard-coded in the application
- Product IDs are six-digit numeric strings
- Product prices are in Rupees per unit

2. **Cart Functionality:**

- Cart data persists in the browser's local storage
- Maximum quantity per product is limited to 99 units
- Cart is specific to the browser session and device

3. **User Interface:**

- Modern browsers with JavaScript enabled are assumed
- Mobile-first responsive design approach which work on all devices
- No user authentication or multi-user support is implemented

4. **Payment Simulation:**

- No real payment processing or validation
- Tax calculations and shipping costs are not included
- Order confirmation is simulated without backend integration

5. **Data Management:**

- All data is maintained in memory and browser storage during the session
- No database integration as per requirements

6. **Browser Compatibility:**

- Modern browsers that support ES6+ features
- Web Storage API support is assumed to be available

## Future Enhancements

- User authentication and account management
- Real payment gateway integration
- Product search and filtering capabilities
- Database integration for persistent data storage

## License

This project is created as an assignment and is for educational purposes only.
