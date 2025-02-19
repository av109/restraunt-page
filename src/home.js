function loadHomeContent() {
    const content = document.querySelector(".content");
    // Clear existing content
    content.innerHTML = "";

    // Create heading container
    const headingContainer = document.createElement("div");
    headingContainer.classList.add("heading-container");

    const heading = document.createElement("div");
    heading.classList.add("heading");

    const headingText = document.createElement("h1");
    headingText.textContent = "Welcome to my Restaurant!";

    heading.appendChild(headingText);
    headingContainer.appendChild(heading);
    content.appendChild(headingContainer);

    // Create review section
    const review = document.createElement("div");
    review.classList.add("review");

    const reviewText = document.createElement("p");
    reviewText.textContent = "My Restaurant has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

    const customer = document.createElement("p");
    customer.classList.add("customer");
    customer.textContent = "∼ Superman!";

    review.appendChild(reviewText);
    review.appendChild(customer);
    content.appendChild(review);

    // Create hours info section
    const hoursInfo = document.createElement("div");
    hoursInfo.classList.add("hours-info");

    const hoursHeading = document.createElement("h3");
    hoursHeading.classList.add("hours");
    hoursHeading.textContent = "Hours";

    const hours = [
        { day: "Sunday", time: "8am - 8pm" },
        { day: "Monday", time: "6am - 6pm" },
        { day: "Tuesday", time: "6am - 6pm" },
        { day: "Wednesday", time: "6am - 6pm" },
        { day: "Thursday", time: "6am - 10pm" },
        { day: "Friday", time: "6am - 10pm" },
        { day: "Saturday", time: "8am - 10pm" }
    ];

    hoursInfo.appendChild(hoursHeading);
    hours.forEach(hour => {
        const p = document.createElement("p");
        p.classList.add(hour.day.toLowerCase());
        p.textContent = `${hour.day}: ${hour.time}`;
        hoursInfo.appendChild(p);
    });

    content.appendChild(hoursInfo);

    // Create location container
    const locationContainer = document.createElement("div");
    locationContainer.classList.add("location-container");

    const locationHeading = document.createElement("h3");
    locationHeading.classList.add("location");
    locationHeading.textContent = "Location";

    const address = document.createElement("p");
    address.classList.add("address");
    address.textContent = "123 Forest Drive, Forestville, Maine";

    locationContainer.appendChild(locationHeading);
    locationContainer.appendChild(address);
    content.appendChild(locationContainer);
}

export {loadHomeContent};