document.querySelector(".name").addEventListener("click", gotoHomeFun)
function gotoHomeFun() {
    window.location.href = "index.html"
}
document.querySelector("#gotoShoes").addEventListener("click", gotoShoesFun)
function gotoShoesFun() {
    window.location.href = "shoes1.html"
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



  var cartData = JSON.parse(localStorage.getItem("cart"))

//   calulating sum of the all items inside cart with Higher order function reduce
  var total = cartData.reduce( function (sum,elem)
  {
      return sum + Number(elem.price)
  },0)

  document.querySelector("#btn").addEventListener("click", totalFun)
  function totalFun()
  {
    localStorage.setItem("total", total)
  }
 document.querySelector("#subtotal>div+div").innerText = `Rs. ${total}`
 document.querySelector("#total>div+div").innerText = `Rs. ${total}`

//   counting number of items present inside the cart

    var length = cartData.length

    document.querySelector("#cartLength").innerText = `Shopping Cart (${length})`
    

    //maping data by using key from local storage which saved in variable cartData
  cartData.map( function (elem,index)
  {    
      var box = document.createElement("div")
      var box1 = document.createElement("div")
      var image = document.createElement("img")
      image.src = elem.image

      box1.append(image)
      
      var box2 = document.createElement("div")
      box2.setAttribute("id", "box2")

      var name = document.createElement("p")
      name.innerText = elem.name

      var innerbox1 = document.createElement("div")
      innerbox1.setAttribute("id","innerbox")
      
      var price = document.createElement("p")
      price.innerText = elem.price

    //   Adding button for removing any entry/item from cart

      var btn = document.createElement("button")
      btn.innerText = "Remove"
      /*adding event listener click and calling anonymous function*/

      btn.addEventListener("click", function (){

        removeFromCart(elem,index)
      })

 

      /*Appending the mapped data to container*/
      innerbox1.append(price,btn)

      var category = document.createElement("h6")
      category.innerText = elem.category

      box2.append(name, innerbox1, category)
      box.append(box1,box2)
      document.querySelector("#container").append(box)
  })

//   for removing items from cart, use inbuilt function splice
  function removeFromCart (elem,index)
  {
       cartData.splice(index,1)
       localStorage.setItem("cart", JSON.stringify(cartData))
       window.location.reload()
  }


  document.querySelector("#btn").addEventListener("click", orderFun)
  function orderFun()
  {

    // console.log(cartData)
    localStorage.setItem("orderList", JSON.stringify(cartData))
    window.location.href="mycoupon.html"

  }