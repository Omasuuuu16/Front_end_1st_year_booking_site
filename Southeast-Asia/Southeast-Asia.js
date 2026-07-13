const cities = [
    {
        name: "Bangkok",
        video: "videos/stock-footage-night-view-of-wat-arun-ratchawararam-on-bank-of-chao-phraya-river-bangkok.webm",
        description: "Bangkok, Thailand's bustling capital, blends ornate temples with modern skyscrapers and vibrant street life. Famous for its markets, street food, and cultural landmarks, it's a top travel destination.",
        hotelLink: "Hotels/Bangkok.html"
    },
    {
        name: "Kuala Lumpur",
        video: "videos/stock-footage-aerial-timelapse-of-kuala-lumpur-city-skyline-at-night-malaysia.webm",
        description: "Kuala Lumpur, the capital of Malaysia, is famous for its iconic Petronas Twin Towers and diverse cultural mix. The city offers a blend of modern architecture, vibrant markets, and rich local cuisine.",
        hotelLink: "Hotels/Kuala-Lumpur.html"
    },
    {
        name: "Singapore",
        video: "videos/stock-footage-aerial-view-of-singapore-at-dusk-marina-bay-sands-hotel-is-prominently-displayed-in-foreground.webm",
        description: "Singapore is a modern city-state known for its clean streets, futuristic skyline, and cultural diversity. Attractions like Marina Bay Sands and Gardens by the Bay make it a top global destination.",
        hotelLink: "Hotels/Singapore.html"
    },
    {
        name: "Hanoi",
        video:"videos/stock-footage-hanoi-vietnam-zoom-out-timelapse-view-of-hanoi-skyline-at-sunset-showing-west-lake-and-tay-ho.webm",
        description: "Hanoi, the capital of Vietnam, blends ancient charm with French colonial influences and vibrant street culture. Its bustling Old Quarter, historic temples, and rich cuisine offer a unique travel experience.",
        hotelLink: "Hotels/Hanoi.html"
    },
    {
        name: "Bali",
        video: "videos/stock-footage-bali-indonesia-march-nd-aerial-of-canggu-with-tourists.webm",
        description: "Bali, Indonesia’s island paradise, is famous for its lush landscapes, serene beaches, and spiritual temples. It’s a top destination for relaxation, adventure, and vibrant cultural experiences.",
        hotelLink: "Hotels/Bali.html"
    },
    {
        name: "Manila",
        video: "videos/stock-footage-cityscape-of-manila-it-is-the-capital-of-the-philippines-is-a-densely-populated-bayside-city-on.webm",
        description: "Manila, the capital of the Philippines, combines Spanish colonial history with modern urban energy. Its lively streets, historic landmarks, and waterfront views offer a dynamic cultural experience.",
        hotelLink: "Hotels/Manila.html"
    }
];

const container = document.getElementById("city-container");

cities.forEach((city, index) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.style.animationDelay = `${index * 0.2}s`;
    card.innerHTML = `
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <video src="${city.video}" autoplay loop muted playsinline></video>
        </div>
        <div class="flip-card-back">
            <h3>${city.name}</h3>
            <p>${city.description}</p>
            <a href="${city.hotelLink}" class="book-btn" target="_blank">Book Now</a>
        </div>
    </div>
`;
    container.appendChild(card);
});

// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
});
