let navLinks = document.querySelectorAll(".nav-item");
let menuToggle = document.getElementById("navbarSupportedContent");
let bscollabse = new bootstrap.Collapse(menuToggle, {toggle : false});

navLinks.forEach((e) =>{
    e.addEventListener("click", () =>{bscollabse.toggle()})
});