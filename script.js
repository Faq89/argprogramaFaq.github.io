document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            sections.forEach((section) => {
                section.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
        });
    });

    const botonRedesSociales = document.getElementById("botonRedesSociales");
    const menuRedesSociales = document.getElementById("menuRedesSociales");

    botonRedesSociales.addEventListener("click", function () {
        if (menuRedesSociales.style.display === "none" || menuRedesSociales.style.display === "") {
            menuRedesSociales.style.display = "block";
        } else {
            menuRedesSociales.style.display = "none";
        }
    });
});



