document.getElementById("pay-bill-btn").addEventListener("click", function () {

    const amount = document.getElementById("bill-amount").value;
    const pin = document.getElementById("bill-pin").value;

    if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
        alert("Enter valid amount");
        return;
    }

    if (pin !== "8048") {
        alert("Invalid PIN");
        return;
    }

    const balanceElement = document.getElementById("balance");
    const currentBalance = Number(balanceElement.innerText);

    if (Number(amount) > currentBalance) {
        alert("Insufficient Balance");
        return;
    }

    const newBalance = currentBalance - Number(amount);
    balanceElement.innerText = newBalance;

    const transactionsElement = document.getElementById("transactions");

    transactionsElement.innerHTML += `
        <div class="transaction-item bg-base-100 p-3 rounded-xl mt-3">
            <p>Bill Paid: $${amount}</p>
            <p>New Balance: $${newBalance}</p>
        </div>
    `;

    alert("Bill Paid Successfully");

});