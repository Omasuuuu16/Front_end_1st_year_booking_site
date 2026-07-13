// This script initializes a simple image slider for elements with the class 'image-slider-ss'.
document.querySelectorAll('.image-slider-ss').forEach(slider => {
  const images = slider.querySelectorAll('img');
  let index = 0;
  
  if (images.length > 0) {
    images[0].classList.add('active');
  }
  
  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000); // change image every 3 seconds
});
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
});