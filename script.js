let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('visible');
        currentPage++;
        pages[currentPage].classList.add('visible');
    }

    if (currentPage === pages.length - 1) {
        generateWireInstructions();
        showTransactionDetails();
    }
}

function generateWireInstructions() {
    const instructions = `
        <p>Send 100,000 USD to the following bank account:</p>
        <p>Account Number: ${Math.floor(Math.random() * 1000000000)}</p>
        <p>Bank: Example Bank</p>
        <p>SWIFT: EXAMPBANK</p>
    `;
    document.getElementById('wire-instructions').innerHTML = instructions;
}

function showTransactionDetails() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const wallet = document.getElementById('wallet').value;

    const details = `
        <p>Name: ${name}</p>
        <p>Address: ${address}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Wallet Address: ${wallet}</p>
    `;
    document.getElementById('transaction-details').innerHTML = details;
}

function updateAmount() {
    const amountInput = document.getElementById('amount');
    const amount = parseInt(amountInput.value);
    if (amount % 100000 !== 0) {
        alert('Amount must be in increments of 100,000 USD');
        amountInput.value = Math.floor(amount / 100000) * 100000;
    }
}

function confirmTransaction() {
    alert('Transaction confirmed!');
}

document.addEventListener('DOMContentLoaded', () => {
    pages[currentPage].classList.add('visible');
});
