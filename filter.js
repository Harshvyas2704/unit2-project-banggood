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


var searchedItem = JSON.parse(localStorage.getItem("searched"))
console.log(searchedItem)
document.querySelector(".name").addEventListener("click", gotoHomeFun)
function gotoHomeFun()
{
    window.location.href="index.html"
}
var type = document.createElement("p")
// type.innerText = searchedItem[0].type
// console.log(searchedItem[0].category)
document.querySelector(".searched").append(type)

document.querySelector("#container").innerHTML = "";
searchedItem.map(function (ele) {
    var box = document.createElement("div")

    var img = document.createElement("img")
    img.src = ele.img
    img.style.width = "220px"

    var price = document.createElement("p")
    price.textContent = "$" + " " + ele.price
    price.style.color = "Orange"
    price.style.fontWeight = "600"
    price.style.textAlign = "center"

    var strikeoff = document.createElement("p")
    strikeoff.textContent = "$" + " " + ele.strikeOff
    strikeoff.style.textDecoration = "line-through"
    strikeoff.style.color = "red"
    strikeoff.style.textAlign = "center"

    box.append(img, price, strikeoff)
    box.style.margin = "18px 12px 12px 12px"

    document.querySelector("#container").append(box)
})

