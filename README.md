# Grofers - Online Grocery Store 🛒

Welcome to **Grofers**, your go-to online grocery store for a seamless shopping experience. Purchase groceries and household essentials from the comfort of your home with just a few clicks. 🌟

![Grofers](https://github.com/shubham001official/grofers/assets/109148746/b7042da6-6e25-4ae8-9eb2-d6ddd629ae02)

## 🌟 Features

- **Login & Sign Up**: Secure and easy authentication for a personalized experience.
- **Product Categories**: Browse through a variety of categories like Vegetables, Fruits, Milk & Juice, Personal Health Care, Egg & Chicken, and more.
- **Sound Effects**: Enjoy delightful sound effects for adding items to the cart and successful checkouts.
- **User-Friendly UI/UX**: Clean, attractive, and responsive design for the best user experience.
- **Secure Payments**: Seamless transactions with PayPal integration.
- **Validation**: Robust form validation for smooth user interactions.

## 🚀 Purpose

Grofers aims to revolutionize the online grocery shopping experience by providing:
- **Convenience**: Shop for groceries from anywhere, anytime.
- **Wide Product Range**: Find all your household essentials in one place.
- **Engaging Features**: Enjoy unique features like sound effects and a responsive interface.
- **Security**: Trustworthy transactions with PayPal.

## 🛠️ Technologies

### Frontend
- **Next.js 14**: For a powerful and scalable React-based framework.
- **Tailwind CSS**: To style the application with utility-first CSS.
- **Stripe**: For secure and seamless payment integration.

### Backend
- **Strapi**: A headless CMS for managing content.
- **PostgreSQL**: A robust and scalable relational database.

## 🌐 Deployment

- **Frontend**: Deployed on [Vercel](https://grofers.vercel.app).
- **Backend**: Deployed on [Render](https://render.com).

## 📸 Screenshots

<table>
  <tr>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/1b69d8fb-e6cc-4788-84d8-af53181c8705" alt="Homepage" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>Homepage</strong></p>
    </td>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/193e021c-eccf-4f38-b81e-9cb2df9ba0ae" alt="Create Account Page" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>Create Account Page</strong></p>
    </td>
  </tr>
  <tr>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/8da1d631-cf4c-44f5-b431-9f0dd6abd919" alt="Sign-in Page" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>Sign-in Page</strong></p>
    </td>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/270254ea-3817-4a47-af0a-c58fd6f0173e" alt="Popular Products" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>Popular Products</strong></p>
    </td>
  </tr>
  <tr>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/c0c03000-2400-431f-8ad4-8524a1873a02" alt="Shop by Category" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>Shop by Category</strong></p>
    </td>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/6dde25b3-219c-47f4-8a64-773af6ef8d80" alt="My Cart" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>My Cart</strong></p>
    </td>
  </tr>
  <tr>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/8f37e8f1-8d02-46f2-b48e-9c34cdeab959" alt="Checkout Process" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>Checkout Process</strong></p>
    </td>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/3cc6520c-4d42-46d2-8ae2-1fe9676bad7f" alt="Payment Gateway" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>Payment Gateway</strong></p>
    </td>
  </tr>
  <tr>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/394a0a95-71bb-4ea1-976a-ec3e0832bc42" alt="Order Successful" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>Order Successful</strong></p>
    </td>
    <td style="padding: 10px;">
      <img src="https://github.com/shubham001official/grofers/assets/109148746/af4c48ae-c4db-47f1-852b-3e9c02893115" alt="My Orders" style="border: 2px solid #000; border-radius: 4px; padding: 10px; width: 100%;">
      <p align="center"><strong>My Orders</strong></p>
    </td>
  </tr>
</table>

## 📥 Installation & Setup

### Prerequisites
- Node.js and npm installed
- PostgreSQL database (local or cloud instance)

### Environment Variables
Create a `.env.local` file in the root directory and add the following:
```env
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your-stripe-public-key
DATABASE_URL=your-postgresql-database-url
```

### Steps

1. **Clone the repository**:
   ```sh
   git clone https://github.com/shubham001official/grofers.git
   ```

2. **Install dependencies**:
   ```sh
   cd grofers
   npm install
   ```

3. **Run the development server**:
   ```sh
   npm run dev
   ```

4. **Open your browser and visit**:
   [http://localhost:3000](http://localhost:3000)

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Follow consistent code style and adhere to linting rules.
2. Provide detailed descriptions for any new features or bug fixes.

## 📧 Contact

For support or feedback, reach out via email: [shubham001official@email.com](mailto:shubham001official@email.com)
