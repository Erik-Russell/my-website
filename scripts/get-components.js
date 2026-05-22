// set the nav bar
fetch("components/nav.html")
.then(response => response.text())
.then(data => {
    document.getElementById("nav-component").innerHTML = data;

    //creating variables to hold the element reference
    // make a reference for the element
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");
    const navBrand = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
        navBrand.classList.toggle("active");
    });
})
.catch(error => console.error("Nav didn't load", error));

// dynamic define local page hrefs
document.querySelectorAll('a[href^="#"]').forEach(
    anchor => {
        anchor.href = window.location.pathname + anchor.getAttribute('href');
    }
);