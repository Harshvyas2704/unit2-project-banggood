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


var shoeData = 
[
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/8C/F5/7a4335f3-0186-490b-911e-788306cb0967.jpg.webp",
        price: 4739,
        strike: 5400,
        name: "Men Knitted Breathable Hollow",
        category:"Band Type"
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/DD/20/f1aa2a37-fc97-4666-a05c-8cd6098f498c.jpg.webp",
        price: 4320,
        strike:5412,
        name:"Men Hand Stitching Microfiber",
        category:"Velcro"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/5A/86/269f5a3c-e062-4e17-b5ed-8ae3e3c05a4a.jpg.webp",
        price: 2365,
        strike:3215,
        name:"Menico Men Leather Hand Stitch",
        category:"Band Type"
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/C2/DB/3c053930-c233-44ad-9132-3e4762760683.jpg.webp",
        price: 4783,
        strike:4863,
        name:"Menico Men Comfy Handmade",
        category:"Velcro"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/ED/91/af7078cb-1610-42f0-8e53-ec0eefd0087b.jpg.webp",
        price: 4520,
        strike:6214,
        name:"Men Genuine Leather Hand",
        category:"Band Type"
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DA/1B/70c84916-2002-44e5-8d4f-148939d41876.jpg.webp",
        price: 2145,
        strike:3652,
        name:"Men's outdoor Shoulder Rerst",
        category:"Band Type"
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/D2/AC/30bd0c22-8a0c-44a8-8d3c-52722e0fee03.jpg.webp",
        price: 5021,
        strike:6325,
        name:"Menico Men Cow Leather",
        category:"Velcro"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/9D/46/588c59af-e4a4-4359-84b8-fe9f3aaa007c.jpg.webp",
        price: 3214,
        strike:4125,
        name:"Menico Men Hand Stitching",
        category:"Velcro"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/D2/21/a74df04b-72ff-4e73-b5c9-8e131d7c13ef.jpg.webp",
        price: 1245,
        strike:3215,
        name:"Men 15.6 inch Computer Bag",
        category:"Velcro"
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/19/BA/de332a52-5ca9-412c-9ee1-730f27c9a630.jpg.webp",
        price: 2781,
        strike:3541,
        name:"Men Breathable Fabric Soft",
        category:"Velcro"
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/67/AC/71d65a37-1f46-4166-98f2-b6ef5d73cc3c.jpg.webp",
        price: 3857,
        strike:4628,
        name:"Men Microfiber Leather Breath",
        category:"Velcro"
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/97/5B/c9d6558e-ce3a-487d-baf8-c0458c0d69c0.jpg.webp",
        price: 3797,
        strike:4521,
        name:"Men Handmade Soft Slip Resist",
        category:"Band Type"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/92/03/dee11cbb-df73-4538-86f1-5c4087d6bed7.jpg.webp",
        price: 4751,
        strike:5241,
        name:"Menico Men Front Zipper Non",
        category:"Band Type"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/DC/8C/d81dff4e-9214-4b8c-836b-baddf155512e.jpg.webp",
        price: 4451,
        strike:5400,
        name:"Menico Men Handmade Slip",
        category:"Band Type"
    },
    {
        image:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/EF/B9/7f343dea-1ac6-4b64-aecb-442ecbb2eb78.jpg.webp",
        price: 4737,
        strike:5246,
        name:"Men Microfiber Panel Splicing",
        category:"Band Type"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/42/79/b9b10279-8798-48ab-8f60-d9c030678e21.jpg.webp",
        price: 4397,
        strike:5332,
        name:"Menico Men Hand Stitching Pigs",
        category: "Slip-On"
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/31/B0/08a347ba-1a8a-4d4c-814c-2c886df88094.jpg.webp",
        price: 3638,
        strike:4321,
        name:"Men Genuine Leather Soft Sole",
        category: "Slip-On"
    },
    {
        image:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/68/C7/ff910fb6-8cd5-41de-b4c6-6c724c0bbfe2.jpg.webp",
        price: 4012,
        strike:5210,
        name:"Menico Men Handmade Pattern",
        category: "Slip-On"
    },
    {
        image:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/35/BE/9411588b-abb1-4306-9743-d09ed2aeb726.jpg.webp",
        price: 2775,
        strike:3621,
        name:"Men Microfiber Business Soft",
        category:"Band Type"
    },
    {
        image:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/6B/16/0df61cfa-1caf-47e5-ad95-4ae3a863f247.jpg.webp",
        price: 4803,
        strike:5841,
        name:"Men Breathable Fabric Comfy",
        category: "Slip-On"
    }
 
];


var cartData = JSON.parse(localStorage.getItem("cart"))


shoeData.map( function (elem)
{
    var box = document.createElement("div")

    var image = document.createElement("img")
    image.src = elem.image

    var price = document.createElement("h4")
    price.textContent = elem.price

    var strike = document.createElement("p")
    strike.textContent = elem.strike

    var name = document.createElement("p")
    name.textContent = elem.name

    var category = document.createElement("p")
    category.textContent = elem.category
    category.setAttribute("id", "type")

    var btn = document.createElement("button")
    btn.innerText = "Add to Cart"
    btn.style.cursor = "pointer"

    btn.addEventListener("click", function (){
        addToCart(elem)
    })



    box.append(image,price,strike,name,category,btn)
    
    document.querySelector("#container").append(box)

})

function addToCart (elem){
    cartData.push(elem)
    localStorage.setItem("cart", JSON.stringify(cartData))
}


