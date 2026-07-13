document.addEventListener('DOMContentLoaded', () => {
    const top = document.getElementById('top');
    top.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            top.style.display = 'block';
        } else {
            top.style.display = 'none';
        }
    });

    top.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// zyad sherif
const sidebar = document.getElementById("mySidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
});