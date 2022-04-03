document.querySelector(".name").addEventListener("click", gotoHomeFun)
function gotoHomeFun() {
    window.location.href = "index.html"
}

document.querySelector("#gotoMen").addEventListener("click", gotoMenFun)
function gotoMenFun() {
    window.location.href = "mens.html"
}
document.querySelector("#gotoWomen").addEventListener("click", gotoWomenFun)
function gotoWomenFun() {
    window.location.href = "womens.html"
}
document.querySelector("#gotoShoes").addEventListener("click", gotoShoesFun)
function gotoShoesFun() {
    window.location.href = "shoes1.html"
}
// link pages end
var hidden = document.querySelector(".userInfo")
var menu = document.querySelector(".menu")
var userEmail = document.querySelector("#userEmail")
hidden.addEventListener("mouseover", mouseOverFun)
hidden.addEventListener("mouseout", mouseOutFun)

function mouseOverFun() {
    menu.style.display = "block"
    // menu.style.zIndex = "5"
    userEmail.style.color = "#ff6e26"
}
function mouseOutFun() {
    menu.style.display = "none"
    userEmail.style.color = "white"
}

var menHome = [
    {
        image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/2E/9F/26e56196-62dd-4117-9a79-a54cddd9b72b.jpg.webp",
        price: 1700,
        strikeoff: 2100,
        category: "men",

    },
    {
        image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/C9/CF/52cc9bc7-2240-4fb6-8d62-f1f946f2e9a8.jpg.webp",
        price: 2300,
        strikeoff: 3120,
        category: "men",

    },
    {
        image: "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/61/77/94c69082-d3f4-419f-a9c8-5fc4a221d1bb.jpg.webp",
        price: 1200,
        strikeoff: 1700,
        category: "men",

    },
    {
        image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/39/57/19a0c866-c6df-4838-a239-e77f5ff7d814.jpg.webp",
        price: 1720,
        strikeoff: 2400,
        category: "men",

    },
    {
        image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/8C/7A/eab94835-88cd-4503-b255-7e8719f7a49a.jpg.webp",
        price: 1720,
        strikeoff: 2100,
        category: "men",

    },
]
var womenHome = [
    {
        image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/85/C7/a807c44f-6459-4cee-a2b8-fed80b8edfb3.jpg.webp",
        price: 2500,
        strikeoff: 3000
    },
    {
        image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/BF/91/64e2c5bc-6c30-4e1e-bc7c-f194f7cdcd59.jpg.webp",
        price: 2500,
        strikeoff: 3000
    },
    {
        image: "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/7F/35/4b618434-a4c5-4093-bb0f-6f5fb18c2e38.jpg.webp",
        price: 2500,
        strikeoff: 3000
    },
    {
        image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/4C/1C/d577b273-0878-4d43-ba61-fc786edd65d2.jpg.webp",
        price: 2500,
        strikeoff: 3000
    },
    {
        image: "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/E9/45/958f5cb0-f0e8-45ee-a5ce-5406c9132c2b.jpg.webp",
        price: 2500,
        strikeoff: 3000
    },
];
var shoesHome = [
    {
        image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/96/BD/eb4af02b-354e-4d68-8ebc-4f7f2d45ffd8.jpg.webp",
        price: 4600,
        name: "Men Genuine Leather Soft Insole",
        strikeoff: 5000
    },
    {
        image: "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/10/7C/3926af55-f895-4db2-8c0f-a0a1bd0addbb.jpg.webp",
        price: 4600,
        name: "Men Large Size Comfy Casual",
        strikeoff: 5000
    }, {
        image: "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FD/78/247cc5d2-c19b-4911-bb11-4b47d9f4b057.jpg.webp",
        price: 4600,
        name: "Men Non Slip Outdoor Business",
        strikeoff: 5000
    }, {
        image: "https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/ED/98/fe9623a9-5f5d-485d-ba03-23d06888df0a.jpg.webp",
        price: 4600,
        name: "Menico Men Soft Hand Stitching",
        strikeoff: 5000
    }, {
        image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/26/48/2fb3815e-1ca8-496d-8d2a-15cfa531cb8f.jpg.webp",
        price: 4600,
        name: "Men Microfiber Leather Vintage",
        strikeoff: 5000
    }
]
var eletronicHome = [{
    image: "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/B4/7C/8b5d1473-7564-43ff-a629-565fa3df6366.jpg.webp",
    price: 150000,
    name: "LOKMAT APPLLP 6 1.6 inch",
    strikeoff: 175000
}, {
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/B4/8D/41da7abb-aa68-43fc-b169-41191b8fb4db.jpg.webp",
    price: 150000,
    name: "[Face Unlock]TICWRIS MAX 2.86 Inch",
    strikeoff: 175000
}, {
    image: "https://imgaz.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/C0/B3/4a19158e-4557-4bd7-ab2d-4c16a24ff08a.jpg.webp",
    price: 150000,
    name: "Flydigi Q1 Keyboard Mouse",
    strikeoff: 175000
}, {
    image: "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/E7/C0/b8834a2f-762a-4cfe-ab6f-eef19e7cee70.jpg.webp",
    price: 150000,
    name: "Hohem iSteady Pro 4 bluetooth 3-",
    strikeoff: 175000
}, {
    image: "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/39/82/d47cdf2b-b773-4742-a60b-fec1e47b6df3.jpg.webp",
    price: 150000,
    name: "BlitzWolf® BW-BE1 1.6 inch HD",
    strikeoff: 175000
}]
var sportsHome = [
    {


        image:
            "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/0D/22/41c887e9-6be8-48bd-bf36-fd13d9770bcb.jpg.webp",
        price: "₹2,395.96",
        Off: "₹4,997.2352% Off",
        Name: "Night Splint Orthopaedic Foot",
        strikeoff: 3000
    },
    {
        image:
            "https://imgaz3.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/5C/4F/340eeb79-17b3-4028-b92f-76e8e61d49da.jpg.webp",
        price: "₹6,752.68",
        Off: "₹7,996.0316% Off",
        Name: "Inspired Breg Telescopic Post Op",
        strikeoff: 3000
    },
    {
        image:
            "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/E3/A4/9ffbe632-2acc-46d4-8f88-b12089a0a407.jpg.webp",
        price: "₹23,193.90",
        Off: "₹1,152.6249% Off",
        Name: "KALOAD 1 Pcs Finger Support Finger",
        strikeoff: 3000
    },
    {
        image:
            "https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/9D/39/43b010d3-0017-4026-9b97-80c9f6451a56.jpg.webp",
        price: "₹317.57",
        Off: "₹44,069.1147% Off",
        Name: "KALOAD 1 Pcs Finger Support Finger",
        strikeoff: 3000
    },
    {
        image:
            "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/33/72/26ec1fff-f077-4564-bd52-877777478668.jpg.webp",
        price: "₹1,583.21",
        Off: "₹2,844.2544% Off",
        Name: "KALOAD 1 Pcs Knee Support Spring",
        strikeoff: 3000

    }]

document.querySelector("#container_man").innerHTML = "";
menHome.map(function (ele) {
    var box = document.createElement("div")

    var img = document.createElement("img")
    img.src = ele.image
    img.style.width = "220px"

    var price = document.createElement("p")
    price.textContent = "$" + " " + ele.price
    price.style.color = "Orange"
    price.style.fontWeight = "600"
    price.style.textAlign = "center"

    var strikeoff = document.createElement("p")
    strikeoff.textContent = "$" + " " + ele.strikeoff
    strikeoff.style.textDecoration = "line-through"
    strikeoff.style.color = "red"
    strikeoff.style.textAlign = "center"

    box.append(img, price, strikeoff)
    box.style.margin = "18px 12px 12px 12px"

    document.querySelector("#container_man").append(box)
})


document.querySelector("#container_woman").innerHTML = "";
womenHome.map(function (ele) {
    var box = document.createElement("div")

    var img = document.createElement("img")
    img.src = ele.image
    img.style.width = "220px"

    var price = document.createElement("p")
    price.textContent = "$" + " " + ele.price
    price.style.color = "Orange"
    price.style.fontWeight = "600"
    price.style.textAlign = "center"

    var strikeoff = document.createElement("p")
    strikeoff.textContent = "$" + " " + ele.strikeoff
    strikeoff.style.textDecoration = "line-through"
    strikeoff.style.color = "red"
    strikeoff.style.textAlign = "center"

    box.append(img, price, strikeoff)
    box.style.margin = "18px 12px 12px 12px"

    document.querySelector("#container_woman").append(box)
})


document.querySelector("#container_shoes").innerHTML = "";
shoesHome.map(function (ele) {
    var box = document.createElement("div")

    var img = document.createElement("img")
    img.src = ele.image
    img.style.width = "220px"

    var price = document.createElement("p")
    price.textContent = "$" + " " + ele.price
    price.style.color = "Orange"
    price.style.fontWeight = "600"
    price.style.textAlign = "center"

    var strikeoff = document.createElement("p")
    strikeoff.textContent = "$" + " " + ele.strikeoff
    strikeoff.style.textDecoration = "line-through"
    strikeoff.style.color = "red"
    strikeoff.style.textAlign = "center"

    box.append(img, price, strikeoff)
    box.style.margin = "18px 12px 12px 12px"

    document.querySelector("#container_shoes").append(box)
})


document.querySelector("#container_sports").innerHTML = "";
sportsHome.map(function (ele) {
    var box = document.createElement("div")

    var img = document.createElement("img")
    img.src = ele.image
    img.style.width = "220px"

    var price = document.createElement("p")
    price.textContent = "$" + " " + ele.price
    price.style.color = "Orange"
    price.style.fontWeight = "600"
    price.style.textAlign = "center"

    var strikeoff = document.createElement("p")
    strikeoff.textContent = "$" + " " + ele.strikeoff
    strikeoff.style.textDecoration = "line-through"
    strikeoff.style.color = "red"
    strikeoff.style.textAlign = "center"

    box.append(img, price, strikeoff)
    box.style.margin = "18px 12px 12px 12px"

    document.querySelector("#container_sports").append(box)
})



document.querySelector("#container_electronics").innerHTML = "";
eletronicHome.map(function (ele) {
    var box = document.createElement("div")

    var img = document.createElement("img")
    img.src = ele.image
    img.style.width = "220px"

    var price = document.createElement("p")
    price.textContent = "$" + " " + ele.price
    price.style.color = "Orange"
    price.style.fontWeight = "600"
    price.style.textAlign = "center"

    var strikeoff = document.createElement("p")
    strikeoff.textContent = "$" + " " + ele.strikeoff
    strikeoff.style.textDecoration = "line-through"
    strikeoff.style.color = "red"
    strikeoff.style.textAlign = "center"

    box.append(img, price, strikeoff)
    box.style.margin = "18px 12px 12px 12px"

    document.querySelector("#container_electronics").append(box)
})

var menData = JSON.parse(localStorage.getItem("menData"))
var womenData = JSON.parse(localStorage.getItem("womenData"))

document.querySelector(".i").addEventListener("click", searchFun)

function searchFun() {
    var searchedArr = [];
    var searched = document.querySelector("#search").value
    if (searched == "men" || searched == "man") {
        var filteredList = menData.filter(function (ele) // here menHome is temp, all object array...
        {
            var searchedObj = {
                img: ele.image,
                price: ele.price,
                strikeOff: ele.strikeoff,
                category: ele.category
            }
            searchedArr.push(searchedObj)
            localStorage.setItem("searched", JSON.stringify(searchedArr))
            window.location.href = "filter.html"
            // ele.category == searched
        })
    }
    else if(searched == "women" || searched == "woman")
    {
        var filteredList = womenData.filter(function (ele) // here menHome is temp, all object array...
        {
            var searchedObj = {
                img: ele.image,
                price: ele.price,
                strikeOff: ele.strikeoff,
                category: ele.category
            }
            searchedArr.push(searchedObj)
            localStorage.setItem("searched", JSON.stringify(searchedArr))
            window.location.href = "filter.html"
            // ele.category == searched
        })
    }
}
var totalItem = JSON.parse(localStorage.getItem("cart"))
length = totalItem.length

document.querySelector(".total-item").innerText = length

