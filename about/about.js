// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

const about = document.getElementById('about-kh');
hamburger.addEventListener("click", () => {
    
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";

    about.classList.toggle('shifted');
});