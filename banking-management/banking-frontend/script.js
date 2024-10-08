document.addEventListener('DOMContentLoaded', function() {
    // User Management
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const users = [];

    userForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && email && password) {
            users.push({ name, email });
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `Name: ${name}, Email: ${email}`; // fixed template literal
            userList.appendChild(li);

            userForm.reset();
        }
    });

    // Account Management
    const accountForm = document.getElementById('accountForm');
    const accountList = document.getElementById('accountList');
    const accounts = [];

    accountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userId = document.getElementById('userId').value;
        const accountNumber = document.getElementById('accountNumber').value;
        const balance = document.getElementById('balance').value;

        if (userId && accountNumber && balance) {
            accounts.push({ userId, accountNumber, balance });
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `User ID: ${userId}, Account Number: ${accountNumber}, Balance: ${balance}`; // fixed template literal
            accountList.appendChild(li);

            accountForm.reset();
        }
    });

    // Transaction Management
    const transactionForm = document.getElementById('transactionForm');
    const transactionList = document.getElementById('transactionList');
    const transactions = [];

    transactionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const accountNumber = document.getElementById('accountNumber').value;
        const transactionType = document.getElementById('transactionType').value;
        const amount = document.getElementById('amount').value;

        if (accountNumber && transactionType && amount) {
            transactions.push({ accountNumber, transactionType, amount });
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `Account Number: ${accountNumber}, Type: ${transactionType}, Amount: ${amount}`; // fixed template literal
            transactionList.appendChild(li);

            transactionForm.reset();
        }
    });
});