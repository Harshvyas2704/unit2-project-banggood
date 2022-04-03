document.querySelector(".userInput1").addEventListener("submit", storeUserData)
var registerData = JSON.parse(localStorage.getItem("userRegisterData")) || [];
// var registerData = [];

function storeUserData()
{
    event.preventDefault()
    var registerObj = {
        email: document.querySelector("#userEmail").value,
        password: document.querySelector("#userPassword").value,
    }
    var ppChecked = document.querySelector('#ppCheckbox').checked;
    var tcChecked = document.querySelector('#tcCheckbox').checked;
    if(tcChecked == true && ppChecked == true)
    {
        registerData.push(registerObj);
        localStorage.setItem("userRegisterData", JSON.stringify(registerData))
        document.querySelector("#userEmail").value = ""
        document.querySelector("#userPassword").value = ""
    }
    else
    {
        alert("Please agree to the Terms & Conditions and our Privacy Policy to continue...")
    }
}


var userData = JSON.parse(localStorage.getItem("userRegisterData"))

document.querySelector("#userInput").addEventListener("submit", logInData)

// stroring login data

function logInData()
{
    event.preventDefault()
    var typedEmail = document.querySelector("#signInEmail").value
    var typedPassword = document.querySelector("#signInPassword").value
    var correct = false;
    for(var i=0; i<userData.length; i++)
    {
        var actEmail = userData[i].email
        var actPassword = userData[i].password
        if(typedEmail == actEmail && typedPassword == actPassword)
        {
            correct = true
            alert("Login Successfully")
            document.querySelector("#signInEmail").value = ""
            document.querySelector("#signInPassword").value = ""
            window.location.href = "index.html"
            break;
        }
    }
    if(!correct)
    {
        alert("Email or Password incorrect")
        document.querySelector("#signInEmail").value = ""
        document.querySelector("#signInPassword").value = ""
    }
}

// register function start
function registerFun()
{
    document.querySelector("#signIn").style.display="none"
    document.querySelector(".signIn").style.color="#290408"
    document.querySelector("#register").style.display="inline-block"
    document.querySelector(".logIn").style.color="#ff6e26"
    document.querySelector(".loginPage").style.height="520px"
}
// register function ends
// signIn function start
function signInFun()
{
    document.querySelector("#register").style.display="none"
    document.querySelector(".logIn").style.fontweight= 600;
    document.querySelector(".logIn").style.color="#290408"
    document.querySelector("#signIn").style.display="inline-block"
    document.querySelector(".signIn").style.color="#ff6e26"
    // window.location.reload();
}
// signIn function ends