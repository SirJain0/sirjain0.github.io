// Get the portfolio-display element
const portfolio = document.getElementById("portfolio-display");

const div = document.createElement("portfolio");
div.className = "portfolio";
div.classList.add("portfolio-view");

div.innerHTML = `
    <div class="project-header">
    <h3 class="project-title" style="font-size: 26px;">Portfolio</h2>
    <div class="spacer"></div>
    <a class="project-link" href="https://sirjain.artstation.com" target="_blank">
        <span class="material-symbols-outlined" style="font-size: 22px;">open_in_new</span>
    </a>
    </div>
    <p class="project-description" style="font-size: 18px;">My portfolio containing my best 3D modeling work, with effective media and descriptions.</p>
    <div class="spacer" style="margin-top: 25px;"></div>
`

portfolio.append(div);

// STORES

const productList = [
    {
        name: "Potted Cacti",
        link: "",
        description: "Collection of nine unique cacti, each one with a different shape and a different decorated pot.",
    },
    {
        name: "Potted Flowering Cacti",
        link: "",
        description: "Collection of five unique flowering cacti, each one with a different shape and a different decorated pot.",
    },
    {
        name: "Flashlights",
        link: "",
        description: "Here is a description of this product",
    }
]

let animDelay = 0;
const stores = document.getElementById("product-list");

for (const product of productList) {
    const div = document.createElement("product");
    div.className = "product";
    div.classList.add("product-view");

    let productImage = product.name.toLowerCase().replaceAll(" ", "_")
    console.log(productImage)

    div.innerHTML = 
    `
        <div class="project-card-title-div">
            <p class="project-card-title">${product.name}</p>
        </div>
        <img class="product-img" src="../images/products/${productImage}.png" alt="">
        <p class="project-description" style="margin-top: 20px; text-align: center">${product.description}</p>
        <div class="spacer"></div>
        <div class="project-card-button-div">
            <a target="_blank" href="${product.link}">
                <button class="project-card-button">Buy Product</button>
            </a>
        </div>
    `;

    stores.append(div);

    div.style.cssText += `
        transform: translateY(-3%);
        opacity: 0;
        animation:project-ease-in 1000ms ease-out ${animDelay}ms;
        animation-fill-mode: forwards;
    `;

    animDelay += 120;
}