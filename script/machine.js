function showonly(id) {

    const addMoney= document.getElementById("Add-money");
    const cashout= document.getElementById("cashout");
    const transferMoney= document.getElementById("Transfer-Money");
    const getBonus= document.getElementById("get-bonus");
    const payBill= document.getElementById("pay-bill");
    const transactions= document.getElementById("transactions");

    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoney.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    transactions.classList.add("hidden");

   const selected= document.getElementById(id);
   selected.classList.remove("hidden");
    
    


    
    
}


window.onload = function() {
    showonly("transactions");
}

