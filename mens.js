
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

//creating a data for mens clothing as an Array of objects
var mensData =
    [
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/BC/2F/6091dd83-9bfa-4a07-a2c2-33330a03f167.jpg",
            name: "Men Corduroy Flap Pocket",
            price: 3107,
            strikeoff: 4441,
            category: "Tops"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/79/CF/02a96299-dd82-4a76-b029-8ba9c53a6cf4.jpg.webp",
            name: "Mens Thick Velvet Casual",
            price: 3812,
            strikeoff: 4541,
            category: "Outware"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/ser1/banggood/images/E9/63/25395ecf-7261-43d8-bb83-e1259a5483ec.png",
            name: "Mens Vintage Cotton Shirts",
            price: 1864,
            strikeoff: 2171,
            category: "Tops"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/ser1/banggood/images/B1/93/53a3e5f2-c1d0-44ef-903c-583bd36ffa1c.jpg.webp",
            name: "Men Casual Onesies Jumpsuit",
            price: 4712,
            strikeoff: 5341,
            category: "Sleepware"
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/85/F2/10438dd6-bd81-4d36-90e1-f8fe673be7d2.jpg.webp",
            name: "Mens Logo Letter Print Zip Up",
            price: 2812,
            strikeoff: 3521,
            category: "Outdoors"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/2F/4D/133da196-d35e-4c57-821f-324ff4bf0a39.jpg",
            name: "Mens Cotton Solid Hooded",
            price: 3712,
            strikeoff: 4941,
            category: "Sleepware"
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/78/AA/368d97b5-e0a6-4566-941e-f5aadd2321ba.jpg.webp",
            name: "Mens Plaid Zipper Front",
            price: 3412,
            strikeoff: 5141,
            category: "Sleepware"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/D4/E7/a0d0ba69-43af-4284-9d70-e7135cd6f8bd.jpg.webp",
            name: "Mens Corduroy Solid Color",
            price: 3712,
            strikeoff: 4571,
            category: "Bottom"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/86/C1/6d24061b-d296-4686-b40e-28dcf93fb923.jpg.webp",
            name: "Mens Waterproof Quick-Drying",
            price: 3312,
            strikeoff: 4021,
            category: "Outdoors"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/42/28/88b5f739-391d-402c-8f3c-18757a79b059.jpg.webp",
            name: "Men Hip Hops Street Style Zip",
            price: 3012,
            strikeoff: 3941,
            category: "Bottom"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/59/35/9f244bbb-77ad-4b2a-b125-c0b4ea30b4f6.jpg.webp",
            name: "Men Tribal Print Patchwork",
            price: 1712,
            strikeoff: 2571,
            category: "Tops"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/C0/20/e660dd07-205b-425c-b4e3-c8e7d403d624.jpg.webp",
            name: "Mens Rib Baseball Collar",
            price: 3012,
            strikeoff: 4341,
            category: "Outware"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/12/B9/6011c01a-2216-4e6d-aab3-8c5bc961de28.jpg.webp",
            name: "Men Vintage Corduroy Ethnic",
            price: 3712,
            strikeoff: 4571,
            category: "Tops"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/E3/77/915f13a9-48a1-44c0-b56e-47a8a4a5a5de.JPG.webp",
            name: "Men Oriental Art Print Short",
            price: 1712,
            strikeoff: 2571,
            category: "Tops"
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/ser1/banggood/images/F5/B0/34cbff91-2acc-4c2e-8cec-4bb4729e92ae.jpeg",
            name: "Mens Fashion 100% Cotton",
            price: 7112,
            strikeoff: 8541,
            category: "Outware"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/43/8F/c4bc6f76-9cec-4f23-838e-cbdf9f79bb93.jpg",
            name: "Mens Cotton Loose comfy",
            price: 2412,
            strikeoff: 3561,
            category: "Bottom"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/2B/9E/6d1bbc3e-0e5e-4616-9809-64b10bbbd692.jpg.webp",
            name: "Mens Vintage Plaid Drawstring",
            price: 1412,
            strikeoff: 2241,
            category: "Bottom"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/E5/1E/044b2120-f834-4b95-b66e-5562167d35fd.png.webp",
            name: "Outdoor Lightweight Windproof",
            price: 5212,
            strikeoff: 6021,
            category: "Outdoors"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/64/97/a12bf596-18a4-486f-b489-6e68a3659778.jpg.webp",
            name: "Jeans Men's Nine Pants",
            price: 2012,
            strikeoff: 3441,
            category: "Bottom"
        },

        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/65/36/35810f24-3f00-4f09-935d-05b86b77f90e.jpg.webp",
            name: "Mens Striped Lapel Double",
            price: 3412,
            strikeoff: 4141,
            category: "Sleepware"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/ser1/banggood/images/E4/4C/1ceb03b8-0534-4ffc-bd7c-ab1b82eda705.jpg.webp",
            name: "Mens Plaid Suit Collar Vest",
            price: 2812,
            strikeoff: 3541,
            category: "Outware"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3D/51/8d0f9936-3249-4d3b-8fe7-ec5c1bede739.jpg.webp",
            name: "Black Business Stylish Woolen",
            price: 5812,
            strikeoff: 6541,
            category: "Outware"
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/A5/17/95a07499-b580-4427-b377-128e4a04bf94.jpg.webp",
            name: "Mens Sunscreen Quick-Drying",
            price: 2330,
            strikeoff: 3021,
            category: "Outdoors",

        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/CB/A6/69587d63-ea50-4420-96b4-4b4d724bed45.jpg.webp",
            name: "Mens 100% Cotton Solid Color",
            price: 2015,
            strikeoff: 3441,
            category: "Bottom"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/66/84/0bde315d-90dd-4d01-9da2-517b4078f572.jpg",
            name: "Mens 100% Cotton Solid Color",
            price: 2015,
            strikeoff: 3441,
            category: "Sleepware"
        }
    ];

//Getting data from local storage with help of key-   cart
var cartData = JSON.parse(localStorage.getItem("cart"))

var manData = localStorage.setItem("menData", JSON.stringify(mensData))
//calling function displaydata and passing array of objects-mensData through it
displyData(mensData)



//for sorting the items/objects on the basic of price by creating function handleprice    
function handleprice() {
    var selected = document.querySelector("#price").value

    if (selected == "lth") {
        mensData.sort(function (a, b) {
            return b.price - a.price
        })
        displyData(mensData)
    }
    if (selected == "htl") {
        mensData.sort(function (a, b) {
            return a.price - b.price
        })
        displyData(mensData)
    }
}


//Using the higher order function  filter for filtering out objects/data on the basis of its category
function handleCategory() {
    var selected = document.querySelector("#category").value

    var filterCategory = mensData.filter(function (elem) {
        return elem.category == selected;
    })
    displyData(filterCategory)

}


//creating a function and passing an array of object of mensData through it 

function displyData(mensData) {
    document.querySelector("#container").innerHTML = ""


    //mapping the mens Data using Higher order function map
    mensData.map(function (elem) {

        var box = document.createElement("div")

        var image = document.createElement("img")
        image.src = elem.image
        image.style.marginBottom="14px"

        var name = document.createElement("p")
        name.innerText = elem.name
        name.style.marginBottom="28px"

        var box1 = document.createElement("div")
        box1.setAttribute("id", "box1")
        box1.style.marginBottom="14px"

        var price = document.createElement("p")
        price.innerText = elem.price
        price.style.marginBottom="14px"

        var strikeoff = document.createElement("p")
        strikeoff.innerText = elem.strikeoff
        strikeoff.setAttribute("class", "strikeoff")
        strikeoff.style.marginBottom="14px"

        box1.append(price, strikeoff)

        var category = document.createElement("h5")
        category.innerText = elem.category
        category.style.fontSize="16px"
        category.style.marginBottom="14px"


        //creating a button to add individual item to cart    
        var btn = document.createElement("button")
        btn.innerText = "Add to Cart"
        btn.style.cursor = "pointer"
        btn.style.padding="5px"
        btn.style.marginBottom="14px"

        btn.addEventListener("click", function () {
            addToCart(elem)
        })

        box.append(image, name, box1, category, btn)

        document.querySelector("#container").append(box)
    })

}

//Storing the data which we want add to cart in local storage with unique key

function addToCart(elem) {
    if(localStorage.getItem("cart")===null){
        localStorage.setItem("cart", JSON.stringify([]))
        
    }
    let cart = JSON.parse(localStorage.getItem("cart"))
    
    cart.push(elem)
    localStorage.setItem("cart", JSON.stringify(cart));
    
}

//flash deal array of object 
var flashDeal =
    [
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/25/9C/f6220263-cb11-480e-93a8-5ca7833b8ae9.jpg.webp",
            price: 1700,
            strikeoff: "10:00:00"
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/3C/8A/6320b21f-db38-4738-b90e-722be77c4a01.jpg.webp",
            price: 2300,
            strikeoff: "10:00:00"
        },
        {
            image: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/FB/B6/26f95cfc-53fd-4bc8-a0ca-7c2bb580f042.jpg.webp",
            price: 1200,
            strikeoff: "10:00:00"
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D4/46/28b14ae5-9c04-4f81-b816-6a3d9bda74c0.jpg.webp",
            price: 1720,
            strikeoff: "10:00:00"
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/D7/6E/af663184-8579-4d3e-b159-5871f7efb3e7.jpeg.webp",
            price: 1720,
            strikeoff: "10:00:00"
        }

    ];

//Mapping the data from flash deal array of object 
flashDeal.map(function (elem) {
    var box = document.createElement("div")

    var image = document.createElement("img")
    image.src = elem.image

    var price = document.createElement("p")
    price.innerText = elem.price

    var strikeoff = document.createElement("p")
    strikeoff.innerText = elem.strikeoff
    strikeoff.setAttribute("id", "count")
    box.append(image, price, strikeoff)

    document.querySelector("#container1").append(box)

})


//newArrival array of object 
var newArrival =
    [
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/2E/9F/26e56196-62dd-4117-9a79-a54cddd9b72b.jpg.webp",
            price: 1700,
            strikeoff: 2100
        },
        {
            image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/C9/CF/52cc9bc7-2240-4fb6-8d62-f1f946f2e9a8.jpg.webp",
            price: 2300,
            strikeoff: 3120
        },
        {
            image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/61/77/94c69082-d3f4-419f-a9c8-5fc4a221d1bb.jpg.webp",
            price: 1200,
            strikeoff: 1700
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/39/57/19a0c866-c6df-4838-a239-e77f5ff7d814.jpg.webp",
            price: 1720,
            strikeoff: 2400
        },
        {
            image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/8C/7A/eab94835-88cd-4503-b255-7e8719f7a49a.jpg.webp",
            price: 1720,
            strikeoff: 2100
        }

    ];

//Mapping the data from flash deal array of object 
newArrival.map(function (elem) {
    var box = document.createElement("div")

    var image = document.createElement("img")
    image.src = elem.image

    var price = document.createElement("p")
    price.innerText = elem.price

    var strikeoff = document.createElement("p")
    strikeoff.innerText = elem.strikeoff
    strikeoff.setAttribute("id", "NewArrivalSrtikeoff")

    box.append(image, price, strikeoff)

    document.querySelector("#container2").append(box)

})




