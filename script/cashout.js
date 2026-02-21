document.getElementById("Cashout-btn").addEventListener("click", function () {


    const inputAgentNumber = document.getElementById("input-Agentnumner");
    const agentNumber = inputAgentNumber.value;
     console.log("Agent number entered:", inputAgentNumber.value);





    const inputAmount = document.getElementById("input-amount");
    const amount = inputAmount.value;
     console.log("Amount entered:", inputAmount.value);


    const correntBalanceElement = document.getElementById("balance");
    const currentBalance = correntBalanceElement.innerText;
     console.log("Current balance:", currentBalance);


     newBalance = Number(currentBalance) - Number(amount);

     if(newBalance < 0){

        alert("invalid amount. Your balance is not sufficient for this transaction.");
        return;
     }







    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    //  console.log("Pin entered:", inputPin.value);


    if (agentNumber == "01704712465" && pin == "8048") {
        
        alert("Cash out successful! Your new balance is: " + newBalance);
        correntBalanceElement.innerText = newBalance;
    }
    else {
        alert("Invalid agent number or PIN. Please try again.");
    }




});