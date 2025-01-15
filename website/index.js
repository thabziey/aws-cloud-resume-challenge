const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://lpxokqijs67rzeoio22getacuq0pfgoi.lambda-url.eu-south-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}

updateCounter();