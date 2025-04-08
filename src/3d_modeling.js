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

// Silent Princess Studios store products
const silentPrincessStudiosProductList = [
    {
        name: "Flower Garden Furniture",
        mcmodelsLink: "https://mcmodels.net/products/13562/tenshi-and-sirjains-flower-garden-furniture",
        description: "Decorate your own grand garden with wonderous Flower Garden Furniture. This pack contains 34 Furniture Pieces to help you build the garden of your dreams.",
        price: "19.95"
    },
    {
        name: "Zen Garden Furniture",
        mcmodelsLink: "https://mcmodels.net/products/13880/tenshi-and-sirjains-zen-garden-furniture",
        description: "Decorate your own peaceful pond and garden with a complete set of Zen Garden Furniture. This pack contains 23 Furniture Pieces to help you build the garden of your dreams.",
        price: "11.95"
    }
]

// Spectra Studios store products
const spectraStudiosProductList = [
    {
        name: "Spirit Mob Balloons",
        mcmodelsLink: "https://mcmodels.net/products/12699/spectra-studios-spirit-mob-balloons",
        description: "Adds vibrant Spirit Mob balloons to your Minecraft builds for a festive, spooky touch!",
        price: "10"
    },
    {
        name: "Autumn Pumpkin Furniture Set",
        mcmodelsLink: "https://mcmodels.net/products/12701/spectra-studios-autumn-pumpkin-furniture",
        description: "Cozy up your Minecraft builds with this pumpkin furniture pack, perfect for a warm autumn vibe!",
        price: "14"
    },
    {
        name: "Candy Cane Furniture Set",
        mcmodelsLink: "https://mcmodels.net/products/12876/spectra-studios-candy-cane-furniture-set-vol-1",
        description: "Cozy up your Minecraft builds with this pumpkin furniture pack, perfect for a warm autumn vibe!",
        price: "7"
    },
    {
        name: "Gingerbread Furniture Set",
        mcmodelsLink: "https://mcmodels.net/products/12945/spectra-studios-gingerbread-set",
        description: "Festive Minecraft furniture and decorations for the holiday season!",
        price: "10"
    }
]

let animDelay = 0;
const spsProductList = document.getElementById("sps-product-list");
const ssProductList = document.getElementById("ss-product-list");

for (const product of silentPrincessStudiosProductList) {
    generateProductList("silentPrincesStudiosProduct", product, spsProductList)
}

for (const product of spectraStudiosProductList) {
    generateProductList("spectraStudiosProduct", product, ssProductList)
}

function generateProductList(className, product, productList) {
    const div = document.createElement(className);
    div.className = className;
    div.classList.add("product-view");

    let productImage = product.name.toLowerCase().replaceAll(" ", "_")

    let divHTML = `
        <div class="project-card-title-div">
            <p class="project-card-title">${product.name}</p>
        </div>
        <img class="product-img" src="../images/products/${productImage}.png" alt="">
        <p class="project-description" style="margin-top: 20px; text-align: center">${product.description}</p>
        <div class="product-buy-container">
    `

    if (product.mcmodelsLink != null) {
        divHTML += `
            <a target="_blank" href="${product.mcmodelsLink}">
                    <button class="project-card-button product-buy-button">MCModels</button>
            </a>
        `
    }

    divHTML += `</div>`;
    div.innerHTML = divHTML;
    productList.append(div);

    div.style.cssText += `
        transform: translateY(-3%);
        opacity: 0;
        animation:project-ease-in 1000ms ease-out ${animDelay}ms;
        animation-fill-mode: forwards;
    `;

    animDelay += 120;
}