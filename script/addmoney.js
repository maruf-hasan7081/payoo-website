document.getElementById("add-money-btn").addEventListener("click", function () {

  const selectedBank = document.getElementById("select-bank").value;
  if (selectedBank === "Select Bank") {
    alert("Please select a bank.");
    return;
  }

  const agentNumber = document.getElementById("input-Agentnumner").value.trim();
  if (agentNumber === "") {
    alert("Please enter a valid agent number.");
    return;
  }

  const amountStr = document.getElementById("input-amount").value.trim();
  const amount = Number(amountStr);

  if (amountStr === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  const correntBalanceElement = document.getElementById("balance");
  const currentBalance = Number(correntBalanceElement.innerText);
  const newbalance = currentBalance + amount;

  const pin = document.getElementById("input-pin").value.trim();

  if (pin === "8048") {
    alert("Money added successfully!");
    correntBalanceElement.innerText = newbalance;

    const transactionsElement = document.getElementById("transactions");
    transactionsElement.innerHTML += `
      <div class="transaction-item">
        <p>Added money: $${amount}</p>
        <p>New Balance: $${newbalance}</p>
      </div>
    `;
  } else {
    alert("Invalid PIN. Please try again.");
  }

});