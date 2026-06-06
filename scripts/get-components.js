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

// add google fonts connection to all html pages with this js
document.querySelector('head').innerHTML +=
    `<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>`;