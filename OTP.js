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
// Adding event listener to button 
document.querySelector("button").addEventListener("click",placeFun)

// calling the created function
    function placeFun ()
    {

        var otp = document.querySelector("#otp").value;

        if(otp==1234)
        {
            alert("Payment Successful");
            alert("Your Order has been placed")

            // redirect to mens page/ you must change it to home page
            window.location.href = "myorder.html"
        }
        else{
            alert("Wrong OTP entered");
        }
    }