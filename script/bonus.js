document.getElementById("get-bonus-btn").addEventListener("click", function () {

    const coupon = document.getElementById("bonus-coupon").value;

    if (coupon === "") {
        alert("Enter bonus coupon");
        return;
    }

    const balanceElement = document.getElementById("balance");
    const currentBalance = Number(balanceElement.innerText);

    let bonusAmount = 0;

    if (coupon === "bonus100") {
        bonusAmount = 100;
    } else {
        alert("Invalid Coupon");
        return;
    }

    const newBalance = currentBalance + bonusAmount;
    balanceElement.innerText = newBalance;

    const transactionsElement = document.getElementById("transactions");

    transactionsElement.innerHTML += `
        <div class="transaction-item bg-base-100 p-3 rounded-xl mt-3">
            <p>Bonus Added: $${bonusAmount}</p>
            <p>New Balance: $${newBalance}</p>
        </div>
    `;

    alert("Bonus Added Successfully");

});