document.addEventListener('DOMContentLoaded', () => {
    const apiBaseUrl = 'http://localhost:3236'; // Adjust if needed

    // Load Users
    async function loadUsers() {
        try {
            const response = await fetch(`${apiBaseUrl}/users`);
            const users = await response.json();
            const userList = document.getElementById('userList');
            userList.innerHTML = '';
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `ID: ${user._id}, Name: ${user.name}, Email: ${user.email}`;
                userList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    // Load Accounts
    async function loadAccounts() {
        try {
            const response = await fetch(`${apiBaseUrl}/accounts`);
            const accounts = await response.json();
            const accountList = document.getElementById('accountList');
            accountList.innerHTML = '';
            accounts.forEach(account => {
                const li = document.createElement('li');
                li.textContent = `ID: ${account._id}, Account Number: ${account.accountNumber}, Balance: ${account.balance}`;
                accountList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching accounts:', error);
        }
    }

    // Load Transactions
    async function loadTransactions() {
        try {
            const response = await fetch(`${apiBaseUrl}/transactions`);
            const transactions = await response.json();
            const transactionList = document.getElementById('transactionList');
            transactionList.innerHTML = '';
            transactions.forEach(transaction => {
                const li = document.createElement('li');
                li.textContent = `ID: ${transaction._id}, Account ID: ${transaction.accountId}, Amount: ${transaction.amount}, Type: ${transaction.type}, Date: ${new Date(transaction.date).toLocaleString()}`;
                transactionList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    }

    // Handle User Form Submission
    document.getElementById('userForm')?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        try {
            await fetch(`${apiBaseUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            loadUsers();
        } catch (error) {
            console.error('Error adding user:', error);
        }
    });

    // Handle Account Form Submission
    document.getElementById('accountForm')?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const userId = document.getElementById('userId').value;
        const accountNumber = document.getElementById('accountNumber').value;
        const balance = document.getElementById('balance').value;

        try {
            await fetch(`${apiBaseUrl}/accounts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, accountNumber, balance }),
            });
            loadAccounts();
        } catch (error) {
            console.error('Error adding account:', error);
        }
    });

    // Handle Transaction Form Submission
    document.getElementById('transactionForm')?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const accountId = document.getElementById('accountId').value;
        const amount = document.getElementById('amount').value;
        const type = document.getElementById('type').value;
        const date = document.getElementById('date').value;

        try {
            await fetch(`${apiBaseUrl}/transactions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accountId, amount, type, date }),
            });
            loadTransactions();
        } catch (error) {
            console.error('Error adding transaction:', error);
        }
    });

    // Load data on page load
    if (document.getElementById('userList')) loadUsers();
    if (document.getElementById('accountList')) loadAccounts();
    if (document.getElementById('transactionList')) loadTransactions();
});