const Images = document.querySelectorAll(".simage");
Images.forEach(image =>{
  // image.stopPropagation(); 
  image.addEventListener("click",()=>{
    image.classList.toggle("propagation");
  });
  //to remove the image propagated size when clicked outside
  document.addEventListener("click",event=>{
    if(!image.contains(event.target)){
    image.classList.remove("propagation");
    }
  });
});

//----------------login page-------------------------------//


const toggle = document.getElementById("toggle");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

//to login only signup
function showSignup(){
  toggle.classList.add("signup");
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
}
//to show only login
function showLogin(){
  toggle.classList.remove("signup");
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
}

const params = new URLSearchParams(window.location.search);
if (params.get("mode") === "signup") {
  showSignup();
}

/*-----------------------To congrol the hamberger icon----------- */

  const hideBox = document.getElementById("mobNav");
  const Boxi = document.getElementById("hidBox");
  const closeBox= document.getElementById("closeHiddenBox");

//classList.toggle is to activate the css and close the css(class name)
//for the hamberger icon  
mobNav.addEventListener("click",event=>{
    Boxi.classList.toggle("open");
  });

  //for the cross icon
  closeBox.addEventListener("click",event=>{
    Boxi.classList.toggle("open");
  });

/*-------------Event section clock------------ */
const clockExist=document.getElementById("clock");
if(clockExist){
const endDate = new Date("2026-03-26T06:00:00").getTime();
setInterval(() => {
    const diff = endDate - Date.now();
    const mo =Math.floor(diff/(1000*60*60*24*30));
    const d = Math.floor(diff / (1000 * 60 * 60 * 24)%30);
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    clockExist.textContent=`${mo}mon:${d}d:${h}h:${m}m:${s}s`;
}, 1000);
}

//------------------Dark mode toggle button------------------//
const modeButton = document.querySelector(".modeButton");
const paraIEEE = document.querySelector(".para-IEEE");
const floorbg = document.querySelector(".floor");

const toggleButton = document.querySelector(".toggleButton");
modeButton.addEventListener("click",()=>{
  document.body.classList.toggle("darkMode");
  toggleButton.classList.toggle("buttonSlide");
  modeButton.classList.toggle("btnBackground");
  floorbg.classList.toggle("floorDark");
  paraIEEE.classList.toggle("IEEEtext");
});