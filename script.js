let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}

body = document.querySelector('body'),
home = document.querySelector(".home-content");

function switch_page(page) {
  actual_link = body.querySelector(".choosen")
  actual_link.classList.toggle("choosen");
  actual_page = body.querySelector(".home-content .choosen")
  actual_page.style.display = "none"
  actual_page.classList.toggle("choosen");
  new_link = body.querySelector(page)
  new_link.classList.toggle("choosen");
  new_page = body.querySelector(".home-content " + page)
  new_page.style.display = "block"
  new_page.classList.toggle("choosen");
  sessionStorage.setItem("page", page)
}
