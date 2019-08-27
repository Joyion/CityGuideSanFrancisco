

window.addEventListener("scroll", function(){
    let navbar = document.querySelector("nav");
    let closing = document.querySelector("div.two");
   if(this.window.pageYOffset >= 500){
      navbar.classList.add("navcolor");
   }
   else if(this.window.pageYOffset < 500){
       navbar.classList.remove("navcolor");
   }
});