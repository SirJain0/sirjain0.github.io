const projects = [
    {
        "name": "Extensive Diamonds",
        "description": "Mod that adds three new diamond types to Minecraft!",
        "version": "1.1.1",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/extensive-diamonds/",
        "translation": "https://poeditor.com/join/project/rUCEF9wpEF",
        "tag": "Mod"
    },
    {
        "name": "Throwable Fluids",
        "description": "Mod that adds throwable lava, throwable water, and more!",
        "version": "1.1.5",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/throwable-fluids/",
        "translation": "https://poeditor.com/join/project/M4owFigkSJ",
        "tag": "Mod" 
    },
    {
        "name": "Convenient Hitboxes",
        "description": "Mod that adds a button toggling entity hitbox visibility, having the same functionality as F3+B.",
        "version": "1.0.5",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/convenient-hitboxes/",
        "translation": "https://poeditor.com/join/project/54SbKsj4o6",
        "tag": "Mod"
    },
    {
        "name": "Tiramisu",
        "description": "Mod that adds bitesized and full tiramisu to Minecraft!",
        "version": "1.0.2",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/tiramisu/",
        "translation": "https://poeditor.com/join/project/RXfhCAd7Hp",
        "tag": "Mod" 
    },
    {
        "name": "Perfect Plushies",
        "description": "Adds various plushies with different perks to Minecraft, along with some Easter Eggs!",
        "version": "1.0.2",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/perfect-plushies/",
        "translation": "https://poeditor.com/join/project/BLsW0V1qtn",
        "tag": "Mod" 
    },
    {
        "name": "Herespawn",
        "description": "Adds a button to the death screen which respawns player to death location.",
        "version": "1.1.1",
        "author": "SirJain and Nyfaria",
        "link": "https://www.curseforge.com/minecraft/mc-mods/herespawn/",
        "translation": "https://poeditor.com/join/project/m39omifByK",
        "tag": "Mod" 
    }
]

const searchBar = document.getElementById("minecraft-searchbox");
let displayedProjects = [];

if (searchBar.value == "") displayedProjects = projects;

// Get the project-list element
const projectList = document.getElementById("project-list");
let animDelay = 0;

// Iterate and display each project
for (const project of displayedProjects) {
    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");

    div.innerHTML = 
    `
        <div class="project-header">
            <h3 class="project-title">${project.name}</h2>
            <div class="spacer"></div>
            <a class="project-link" style="margin-right: -5px;" href="${project.translation}" target="_blank">
                <span class="material-symbols-outlined">language</span>
            </a>
            <a class="project-link" href="${project.link}" target="_blank">
                <span class="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
        <p class="project-authors">By: ${project.author}</p>
        <p class="project-description">${project.description}</p>
        <div class="spacer"></div>
        <div class="project-footer">
            <span class="project-version">Version: ${project.version}</span>
            <span class="project-tag ${project.tag.toLowerCase()}-tag">${project.tag}</span>
        </div>
    `;

    projectList.append(div)
    div.style.cssText += `
        transform: translateY(-3%);
        opacity: 0;
        animation:project-ease-in 1000ms ease-out ${animDelay}ms;
        animation-fill-mode: forwards;
    `;
    animDelay += 120;
}