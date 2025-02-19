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

function loadHomeContent() {
    const content = document.querySelector(".content");
    content.innerHTML = `
        <div class="heading-container">
            <div class="heading">
                <h1>Welcome to my Restaurant!</h1>
            </div>
        </div>

        <div class="review">
            <p>My Restaurant has the best porridge! The atmosphere and customer service make you feel like you are
                sitting in
                the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to
                again and again.</p>
            <p class="customer">&#8765; Superman!</p>
        </div>

        <div class="hours-info">
            <h3 class="hours">Hours</h3>
            <p class="sunday">Sunday: 8am - 8pm</p>
            <p class="monday">Monday: 6am - 6pm</p>
            <p class="tuesday">Tuesday: 6am - 6pm</p>
            <p class="wednesday">Wednesday: 6am - 6pm</p>
            <p class="thursday">Thursday: 6am - 10pm</p>
            <p class="friday">Friday: 6am - 10pm</p>
            <p class="saturday">Saturday: 8am - 10pm</p>
        </div>

        <div class="location-container">
            <h3 class="location">Location</h3>
            <p class="address">123 Forest Drive, Forestville, Maine</p>
        </div>
    `;
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
                    1. Hello
                </div>
                <div class="item-image">
                </div>
            </div>
            <div class="item-container">
                <div class="itemhead">
                    2. Hello
                </div>
                <div class="item-image">
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