document.getElementById("add-money-btn").addEventListener("click", function () {

    const selectBankElement = document.getElementById("select-bank");
    const selectedBank = selectBankElement.value;
        console.log("Selected bank:", selectedBank);
    if (selectedBank === "Select Bank") {
        alert("Please select a bank.");
        return;
    }

    const inputAgentNumber = document.getElementById("input-Agentnumner");
    const agentNumber = inputAgentNumber.value;
        // console.log("Agent number:", agentNumber);

    if (agentNumber === "") {
        alert("Please enter a valid agent number.");
        return;
    }

    const inputAmount = document.getElementById("input-amount");
    const amount = inputAmount.value;
        console.log("Amount entered:", amount);

         const correntBalanceElement = document.getElementById("balance");
    const currentBalance = correntBalanceElement.innerText;
     console.log("Current balance:", currentBalance);

     const newbalance = Number(currentBalance) + Number(amount);

    if (amount === "" || isNaN(amount) || Number(amount) <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
        console.log("Pin entered:", pin);

    if (pin === "8048") {
        
        alert("Money added successfully!");
        correntBalanceElement.innerText = newbalance;

    }
    if (pin !== "") {
        alert("Invalid PIN. Please try again.");
        
        
    }


    


        

     




    
})