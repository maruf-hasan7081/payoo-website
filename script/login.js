console.log("Login script loaded");


document.getElementById("btn-id").addEventListener("click",function(){
    // console.log("Login button clicked");


    const inputMobileNumber = document.getElementById("input-mobilenumner");
    const mobileNumber = inputMobileNumber.value;
    //  console.log("Mobile number entered:", inputMobileNumber.value);

     const inputPin= document.getElementById("input-pin");
    //  console.log("PIN entered:", inputPin.value);
    const pin = inputPin.value;

    if(mobileNumber.length == 11 && pin.length == 4){
        alert("Login successful!");
        // window.location.replace("/home.html");back e jawa jai na 
        window.location.assign("home.html");

    }
    else{
        alert("Invalid mobile number or PIN. Please try again.");
    }
    
})