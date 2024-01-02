const portfolioList = [
    {
        "name": "Portfolio",
        "description": "My portfolio containing my best 3D modeling work, with effective media and descriptions.",
        "link": "https://sirjain.artstation.com",
    }
]

// Get the project-list element
const projectList = document.getElementById("portfolio-display");
let animDelay = 0;

// TODO: Cleanup b/c there is only one item
for (const portfolio of portfolioList) {
    const div = document.createElement("portfolio");
    div.className = "portfolio";
    div.classList.add("portfolio-view");

    let innerHTML = `
        <div class="project-header">
        <h3 class="project-title" style="font-size: 26px;">${portfolio.name}</h2>
        <div class="spacer"></div>
    `

    innerHTML += `
        <a class="project-link" href="${portfolio.link}" target="_blank">
            <span class="material-symbols-outlined" style="font-size: 22px;">open_in_new</span>
        </a>
        </div>
    `

    innerHTML += `
        <p class="project-description" style="font-size: 18px;">${portfolio.description}</p>
        <div class="spacer" style="margin-top: 25px;"></div>
    `

    div.innerHTML = innerHTML;

    projectList.append(div)
    div.style.cssText += `
        transform: translateY(-3%);
        opacity: 0;
        animation:project-ease-in 1000ms ease-out ${animDelay}ms;
        animation-fill-mode: forwards;
    `;

    animDelay += 120;
}