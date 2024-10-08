Banking Management System
Project Description
The Banking Management System is a full-stack application that allows users to manage their bank accounts, perform transactions, and view account details. The application includes both a frontend (React.js) and a backend (Node.js with Express and MongoDB).

Key Features:
View a list of bank accounts.
Add new bank accounts.
Edit account balance.
Delete accounts.
Add transactions (deposit/withdrawal).
Fetch account details.
Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB (via Mongoose)
APIs: RESTful APIs for account management
Deployment: Local development
Prerequisites
Before you begin, ensure you have the following installed:

Node.js: Download Node.js
npm: Comes installed with Node.js
MongoDB: Download MongoDB (for local development) or use MongoDB Atlas for cloud databases.
Postman or any API testing tool: To test the backend APIs.
Setup Instructions
1. Backend Setup (Node.js + MongoDB)
Clone the repository:

bash
Copy code
git clone https://github.com/BarotAvnil/Web-Technology/banking-management-system.git
cd banking-management-system
Navigate to the backend directory:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Configure MongoDB connection:

By default, the backend connects to a local MongoDB instance.
Ensure MongoDB is installed and running, or configure your MongoDB Atlas connection string in the server.js file.
Run the backend server:

bash
Copy code
npm start
The backend should now be running on http://localhost:5000.

2. Frontend Setup (React.js)
Navigate to the frontend directory:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Configure the API endpoint:

In the React frontend code, make sure the API URL is pointing to your backend (http://localhost:5000/api/account).
You can configure the API URL in AccountDetails.js or api.js depending on your project structure.
Run the React development server:

bash
Copy code
npm start
The React frontend should now be running on http://localhost:3000.

API Documentation
1. Get all accounts
Endpoint: GET /api/account

Description: Fetches all accounts from the database.

Response:

json
Copy code
[
  {
    "_id": "60c5f8b3f1a2d0001578efdb",
    "accountNumber": "123456789",
    "balance": 5000
  },
  {
    "_id": "60c5f8b3f1a2d0001578efdc",
    "accountNumber": "987654321",
    "balance": 10000
  }
]
2. Get account by ID
Endpoint: GET /api/account/:id

Description: Fetches a single account by its ID.

Response:

json
Copy code
{
  "_id": "60c5f8b3f1a2d0001578efdb",
  "accountNumber": "123456789",
  "balance": 5000
}
3. Create a new account
Endpoint: POST /api/account

Description: Creates a new bank account.

Request Body:

json
Copy code
{
  "accountNumber": "123456789",
  "balance": 5000
}
Response:

json
Copy code
{
  "_id": "60c5f8b3f1a2d0001578efdb",
  "accountNumber": "123456789",
  "balance": 5000
}
4. Update account balance
Endpoint: PATCH /api/account/:id

Description: Updates the balance of an existing account.

Request Body:

json
Copy code
{
  "balance": 6000
}
Response:

json
Copy code
{
  "_id": "60c5f8b3f1a2d0001578efdb",
  "accountNumber": "123456789",
  "balance": 6000
}
5. Add a transaction
Endpoint: PATCH /api/account/transaction/:id

Description: Adds a transaction (deposit or withdrawal) to the account.

Request Body:

json
Copy code
{
  "transactionAmount": 500
}
Response:

json
Copy code
{
  "message": "Transaction added successfully",
  "newBalance": 5500
}
6. Delete an account
Endpoint: DELETE /api/account/:id

Description: Deletes an account by ID.

Response:

json
Copy code
{
  "message": "Account deleted successfully"
}
Frontend Features
1. Account Management
View Accounts: Users can view a list of bank accounts with details like account number and balance.
Create Accounts: Users can create new bank accounts with an initial balance.
Edit Account: Users can edit the account balance.
Delete Account: Users can delete any bank account.
2. Transactions
Add Transaction: Users can add deposits or withdrawals to an account. The balance updates based on the transaction amount.
