document.querySelector("#gotoHome").addEventListener("click", gotoHomeFun)
document.querySelector("#gotoMyOrder").addEventListener("click", gotoOrderFun)
document.querySelector("#gotoMyWishlist").addEventListener("click", gotoWishlistFun)
document.querySelector("#gotoMyCart").addEventListener("click", gotoCartFun)
document.querySelector("#gotoSignIn").addEventListener("click", gotoSignInFun)

function gotoHomeFun()
{
    window.location.href="index.html"
    console.log("yes")
}
function gotoOrderFun()
{
    window.location.href="myorder.html"
}
function gotoWishlistFun()
{
    window.location.href="mywishlist.html"
}
function gotoCartFun()
{
    window.location.href="carts.html"
}
function gotoSignInFun()
{
    window.location.href="signIn.html"
    console.log("yes")
}

// file name can be changed