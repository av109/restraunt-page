import { loadHomeContent } from "./home";

function createHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const body = document.querySelector("body");

    const homeButton = document.createElement("button");
    homeButton.classList.add("homebtn");
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.classList.add("menubtn");
    menuButton.textContent = "Menu";

    const contactButton = document.createElement("button");
    contactButton.classList.add("aboutbtn");
    contactButton.textContent = "About";

    // Add event listeners to the buttons
    homeButton.addEventListener("click", () => loadHomeContent());
    menuButton.addEventListener("click", () => loadMenuContent());
    contactButton.addEventListener("click", () => loadAboutContent());

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    header.appendChild(nav);

    body.insertAdjacentElement("afterbegin", header);
}

function loadMenuContent() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <div class="heading-container">
            <div class="heading">
                <h1>Menu!</h1>
            </div>
        </div>

        <div class="menu">
            <div class="item-container">
                <div class="itemhead">
                    1. Spaghetti Carbonara
                </div>
                <div class="item-image1">
                </div>
            </div>
            <div class="item-container">
                <div class="itemhead">
                    2. Margherita Pizza
                </div>
                <div class="item-image image2">
                </div>
            </div>
            <div class="item-container">
                <div class="itemhead">
                    3. Caesar Salad
                </div>
                <div class="item-image image3">
                </div>
            </div>
            <div class="item-container">
                <div class="itemhead">
                    4. Grilled Salmon
                </div>
                <div class="item-image image4">
                </div>
            </div>
            <div class="item-container">
                <div class="itemhead">
                    5. Chocolate Cake
                </div>
                <div class="item-image image5">
                </div>
            </div>
            <div class="item-container">
                <div class="itemhead">
                    6. Beef Steak
                </div>
                <div class="item-image" style="background-image: url('./asset/stake.jpg');">
                </div>
            </div>
            <div class="item-container">
                <div class="itemhead">
                    7. Sushi Platter
                </div>
                <div class="item-image" style="background-image: url('./asset/sushi.jpg');">
                </div>
            </div>
            <div class="item-container">
                <div class="itemhead">
                    8. Tiramisu
                </div>
                <div class="item-image" style="background-image: url('./asset/tiramisu.jpg');">
                </div>
            </div>
        </div>
    `;
}

function loadAboutContent() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <div class="heading-container">
            <div class="heading">
                <h1>About Us</h1>
            </div>
        </div>

        <div class="about">
            <p>We are the best restaurant in town, serving delicious porridge since 2023!</p>
        </div>
    `;
}

export { createHeader, loadHomeContent };