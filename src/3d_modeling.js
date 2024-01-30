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

const storeList = [
    // {
    //     name: "Sketchfab",
    //     link: ""
    // },
    {
        name: "MCModels",
        link: "https://mcmodels.net/vendors/123/sirjain-models"
    },
    {
        name: "ArtStation",
        link: "https://sirjain.artstation.com/store"
    }
]

let animDelay = 0;
const stores = document.getElementById("store-list");

for (const store of storeList) {
    const div = document.createElement("store");
    div.className = "store";
    div.classList.add("store-view");

    div.innerHTML = 
    `
        <div class="project-card-title-div">
            <p class="project-card-title">${store.name}</p>
        </div>
        <div class="spacer"></div>
        <div class="project-card-button-div">
            <a target="_blank" href="${store.link}">
                <button class="project-card-button" style="margin-top: -1px;">View Store</button>
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