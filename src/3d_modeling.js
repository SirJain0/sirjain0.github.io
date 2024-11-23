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
        name: "Spirit Mob Balloons",
        bbbLink: "https://builtbybit.com/resources/spirit-mob-balloons.53914/",
        mcmodelsLink: "https://mcmodels.net/products/12699/spectra-studios-spirit-mob-balloons",
        description: "Adds vibrant Spirit Mob balloons to your Minecraft builds for a festive, spooky touch!",
        price: "10"
    },
    {
        name: "Autumn Pumpkin Furniture Set",
        bbbLink: "https://builtbybit.com/resources/autumn-pumpkin-furniture-set.53912/",
        mcmodelsLink: "https://mcmodels.net/products/12701/spectra-studios-autumn-pumpkin-furniture",
        description: "Cozy up your Minecraft builds with this pumpkin furniture pack, perfect for a warm autumn vibe!",
        price: "14"
    },
    {
        name: "Candy Cane Furniture Set",
        bbbLink: "https://builtbybit.com/resources/candy-cane-furniture-set.54482/",
        mcmodelsLink: "https://mcmodels.net/products/12876/spectra-studios-candy-cane-furniture-set-vol-1",
        description: "Cozy up your Minecraft builds with this pumpkin furniture pack, perfect for a warm autumn vibe!",
        price: "7"
    },
    {
        name: "Gingerbread Furniture Set",
        bbbLink: "https://builtbybit.com/resources/gingerbread-furniture-set.55111/",
        mcmodelsLink: "https://mcmodels.net/products/12945/spectra-studios-gingerbread-set",
        description: "Festive Minecraft furniture and decorations for the holiday season!",
        price: "10"
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

    let divHTML = `
        <div class="project-card-title-div">
            <p class="project-card-title">${product.name}</p>
        </div>
        <img class="product-img" src="../images/products/${productImage}.png" alt="">
        <p class="project-description" style="margin-top: 20px; text-align: center">${product.description}</p>
        <div class="product-buy-container">
        <a target="_blank" href="${product.bbbLink}">
            <button class="project-card-button product-buy-button">BuiltByBit</button>
        </a>
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

    stores.append(div);

    div.style.cssText += `
        transform: translateY(-3%);
        opacity: 0;
        animation:project-ease-in 1000ms ease-out ${animDelay}ms;
        animation-fill-mode: forwards;
    `;

    animDelay += 120;
}