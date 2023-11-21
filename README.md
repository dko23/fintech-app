# Financial Sustainability App

## Overview

This fintech application was designed and developed with the primary goal of promoting financial sustainability and consciousness among university students. It offers a range of features, including budget and expense tracking, saving goals, expense history, and utility bill payments.

## Features

- **Budget and Expense Tracking:** Users can create and track their budgets, as well as log and monitor their expenses.
  
- **Saving Goals:** The application allows users to set saving goals, helping them plan and achieve financial objectives.

- **Expense History:** Users can view a detailed history of their expenses, providing insights into spending patterns over time.

- **Utility Bill Payments:** The app facilitates the payment of utility bills, enhancing financial convenience for users.

## Authentication

The project features robust user authentication facilitated by Passport.js, a middleware for Node.js. Leveraging Passport.js, the application employs industry-standard authentication strategies, ensuring a secure and streamlined registration and login process.

## Technology Stack

- **Frontend:** React, Redux
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose for data modeling)
- **Authentication:** Passport.js
- **Payment Integration:** Paystack API

## Server Architecture

The application utilizes two servers:
1. **User Authorization and Authentication Server:** Responsible for managing user registration, login, and authentication processes.
2. **Data Server:** Manages and stores user data, including expense history and saving goals.

## Database

Information from the expense history, as well as user info from registration, is saved in the MongoDB database using Mongoose.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/financial-sustainability-app.git
2. cd backend
3. nodemon both server.js and server2.js
4. ready to use