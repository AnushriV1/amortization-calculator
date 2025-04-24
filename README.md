# Loan Amortization Calculator
A React-based web application for calculating loan amortization schedules with a clean, responsive user interface.

## Features

### -Loan Input Form : Enter principal amount, annual interest rate, and loan term in years
### -Real-time Calculation : Instantly calculate monthly payments and generate amortization schedules
### -Detailed Summary : View key loan details including monthly payment, total interest, and total cost
### -Complete Amortization Schedule : See a breakdown of every payment over the life of the loan
### -Paginated Results : Navigate through the payment schedule with an intuitive pagination system
### -Responsive Design : Optimized for both desktop and mobile devices
### -Input Validation : Form validation ensures accurate calculations

## Installation and Setup

### Prerequisites

#### Node.js (v14.0.0 or later)
#### npm (v6.0.0 or later)

### Steps to Run Locally

1.Clone the repository

git clone https://github.com/your-username/amortization-calculator.git

2.Navigate to the project directory

cd amortization-calculator

3.Install dependencies

### `npm install`

4.Start the development server

### `npm start`

5.Open your browser and visit http://localhost:3000

## How It Works
The application uses the standard amortization formula to calculate loan payments:

### Monthly Payment = P × r × (1 + r)^n / ((1 + r)^n - 1)

Where:

P = Principal loan amount

r = Monthly interest rate (annual rate divided by 12)

n = Total number of payments (years × 12)

For each payment period, the application calculates:

Interest payment = Remaining balance × monthly interest rate

Principal payment = Monthly payment - interest payment

Remaining balance = Previous balance - principal payment
