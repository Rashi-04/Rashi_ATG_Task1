let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let cpass = document.querySelector("#cpass");
let create = document.querySelector(".create");
let sign = document.querySelector("#sign-in");
let btn = document.querySelector(".btn-change");

let signins = document.querySelector(".signins");
let SignIn = document.querySelector("#SignIn");

let para = document.createTextNode(" Forgot password?");
SignIn.addEventListener("click", () => {
    fname.remove();
    lname.remove();
    cpass.remove();
    create.innerHTML = "Sign In";
    btn.innerHTML = "Sign In"
    sign.innerHTML = "Don’t have an account yet? ";
    SignIn.innerHTML = "Create new for free!";
    signins.appendChild(para);

})
