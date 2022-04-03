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
var orderData = JSON.parse(localStorage.getItem("orderList"))

console.log(orderData)


orderData.map(function(ele)
{

    var box = document.createElement("div")
    box.style.display="flex"
    box.style.justifyContent="space-between"

    var pName = document.createElement("p")
    pName.innerText = ele.name
    pName.style.cursor="pointer"
    pName.addEventListener("click", gotoCart)
    var amount = document.createElement("p")
    amount.innerText = ele.price
    var status = document.createElement("p")
    status.innerText = "Delivery Pending"
    var options = document.createElement("p")
    options.innerText = "---"
    box.append(pName, amount, status, options)
    // box.append(pName)
    document.querySelector(".orderList").append(box)
})

function gotoCart()
{
    window.location.href="carts.html"
}