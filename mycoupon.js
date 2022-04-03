
// document.querySelector(".coupon").addEventListener("click", gotoHomeFun)
// function gotoHomeFun() {
//     window.location.href = "carts.html"
// }
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
var total = localStorage.getItem("total")
document.querySelector("#coupon").addEventListener("click", applyPromo);
// var total = 2000;
    function applyPromo() {
        var temp = document.querySelector("#promo").value;
        if (temp == "masai30") {
            //console.log("inside")
            
            var disc = 30;
            var discount = Math.ceil(total - ((total *(100 - disc))  / 100));
            // //console.log(discount);
           
            document.querySelector("#show").innerText = `आपका Discount :  ${discount}`
            // document.ready(window.setTimeout(location.href="pay.html",5000));
            setTimeout(function(){
                window.location.href = 'pay.html';
             }, 3000);
            
}
else if(temp == "masai20"){
    var disc = 20;
    var discount = Math.ceil(total - ((total*disc)/ 100) );
    document.querySelector("#show").innerText = `आपका Discount :  ${discount}`
    setTimeout(function(){
        window.location.href = 'pay.html';
     }, 3000);
}
else if(temp=="masai10"){
    var disc = 10;
    var discount = Math.ceil(total - ((total*disc)/ 100) );
    document.querySelector("#show").innerText = `आपका Discount :  ${discount}`
    setTimeout(function(){
        window.location.href = 'pay.html';
     }, 3000);
}
else if(temp=="masai40"){
    var disc = 40;
    var discount = Math.ceil(total - ((total*disc)/ 100) );
    document.querySelector("#show").innerText = `आपका Discount :  ${discount}`
    setTimeout(function(){
        window.location.href = 'pay.html';
     }, 3000);
}
else if(temp == "masai50"){
    var disc = 50;
    var discount = Math.ceil(total - ((total*disc)/ 100) );
    document.querySelector("#show").innerText = `आपका Discount :  ${discount}`
    setTimeout(function(){
        window.location.href = 'pay.html';
     }, 3000);
}
};

// document.querySelector("#coupon").addEventListener("click", discountFun)
// var discountArr = JSON.parse(localStorage.getItem("discountPer")) || []
// console.log(discountArr)
// var enter1 = document.querySelector("#promo").value
// console.log(enter1)
// function discountFun()
// {
//     if(enter1 == "masai30")
//     {
//         console.log("yes")
//         discountArr.push("30")
//     }
//     localStorage.setItem("discountPer", JSON.stringify(discountArr))
// }
