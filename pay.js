document.querySelector(".name").addEventListener("click", gotoHomeFun)
function gotoHomeFun() {
    window.location.href = "index.html"
}

document.querySelector("#gotoMen").addEventListener("click", gotoMenFun)
function gotoMenFun()
{
    window.location.href="mens.html"
}
document.querySelector("#gotoWomen").addEventListener("click", gotoWomenFun)
function gotoWomenFun()
{
    window.location.href="womens.html"
}
document.querySelector("#gotoShoes").addEventListener("click", gotoShoesFun)
function gotoShoesFun() {
    window.location.href = "shoes1.html"
}
//catching the form - details of debit card
document.querySelector("#card").addEventListener("submit", validateDetails)


//calling function for validating card details

function validateDetails ()
{
    event.preventDefault()

    var card_name = document.querySelector("#cardName").value;
    var Num = document.querySelector("#cardNo").value;
    var cvv = document.querySelector("#cvv").value;
    var month = document.querySelector("#m1").value;
    var year = document.querySelector("#y1").value;
    var holder = document.querySelector("#holder").value;

    var e1 ="RuPay";
    var e2 =1234567891234567;
    var e3 =123;
    var e5 ="Harsh";

    // checking for the given details entered it shows alerts according to condition mentioned

    if( card_name==e1 && Num == 1234567891234567 && cvv == "123" && month == "05" && year == "2025" && holder == "Harsh")
    {
        console.log("inside fun")
        
        alert("Details varified");
        alert("OTP has been sent to your registered email address");
        // if details are correct it will redirect it to otp variafication
        window.location.href = "OTP.html"
    }
    else{
        
        alert("Please enter correct card details")
    }
    
}
document.querySelector("#getDetails").addEventListener("click", getDetails)
function getDetails()
{
    event.preventDefault()
    var personName = document.querySelector("#personName").value
    // var temp = "Rajkot"
    if(personName == "Harsh Vyas")
    {
        document.querySelector("#mobileNum").value = 1234567890
        document.querySelector("#address1").value = "Rajkot"
        document.querySelector("#address2").value = "Rajkot"
        document.querySelector("#country").value = "Bharat"
        document.querySelector("#state").value = "Gujrat"
        document.querySelector("#city").value = "Rajkot"
        document.querySelector("#pinCode").value = 360001
        document.querySelector("#cardName").value = "RuPay"
        document.querySelector("#cardNo").value = 1234567891234567
        document.querySelector("#cvv").value = 123
        document.querySelector("#m1").value = "05"
        document.querySelector("#y1").value = 2025
        document.querySelector("#holder").value = "Harsh"
    }
}