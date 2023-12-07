const projects = [
    {
        "name": "Extensive Diamonds",
        "description": "Mod that adds three new diamond types to Minecraft!",
        "version": "1.3.0",
        "link": "https://www.curseforge.com/minecraft/mc-mods/extensive-diamonds/",
        "translation": "https://poeditor.com/join/project/rUCEF9wpEF",
        "tag": "Mod"
    },
    {
        "name": "Throwable Fluids",
        "description": "Mod that adds throwable lava, throwable water, and more!",
        "version": "1.1.5",
        "link": "https://www.curseforge.com/minecraft/mc-mods/throwable-fluids/",
        "translation": "https://poeditor.com/join/project/M4owFigkSJ",
        "tag": "Mod" 
    },
    {
        "name": "Convenient Hitboxes",
        "description": "Mod that adds a button toggling entity hitbox visibility, having the same functionality as F3+B.",
        "version": "1.0.5",
        "link": "https://www.curseforge.com/minecraft/mc-mods/convenient-hitboxes/",
        "translation": "https://poeditor.com/join/project/54SbKsj4o6",
        "tag": "Mod"
    },
    {
        "name": "Tiramisu",
        "description": "Mod that adds bitesized and full tiramisu to Minecraft!",
        "version": "1.0.2",
        "link": "https://www.curseforge.com/minecraft/mc-mods/tiramisu/",
        "translation": "https://poeditor.com/join/project/RXfhCAd7Hp",
        "tag": "Mod" 
    },
    {
        "name": "Perfect Plushies",
        "description": "Adds various decorative plushies to Minecraft, along with some Easter Eggs!",
        "version": "1.8.0",
        "collaborators": "Nyfaria",
        "link": "https://www.curseforge.com/minecraft/mc-mods/perfect-plushies/",
        "tag": "Mod" 
    },
    {
        "name": "Herespawn",
        "description": "Adds a button to the death screen which respawns player to death location.",
        "version": "1.1.2",
        "collaborators": "Nyfaria",
        "link": "https://www.curseforge.com/minecraft/mc-mods/herespawn/",
        "translation": "https://poeditor.com/join/project/m39omifByK",
        "tag": "Mod" 
    },
    {
        "name": "More Potions",
        "description": "Adds a few new potions and tipped arrows to Minecraft based on existing status effects!",
        "version": "2.0.1",
        "link": "https://curseforge.com/minecraft/mc-mods/more-potions-items-fabric",
        "tag": "Mod" 
    },
    {
        "name": "Ez Healing",
        "description": "Adds a convenient slash command to heal yourself or other targets!",
        "version": "1.0.2",
        "link": "https://www.curseforge.com/minecraft/mc-mods/ez-healing/",
        "translation": "https://poeditor.com/join/project/fCwa0aMYzo",
        "tag": "Mod" 
    },
    {
        "name": "Bats Galore",
        "description": "Adds many bats with unique loot for spooky season. Originally made for 2023 SpookyJam!",
        "version": "1.0.2",
        "collaborators": "Nyfaria",
        "link": "https://www.curseforge.com/minecraft/mc-mods/spooky-bats/",
        "tag": "Mod" 
    },
    {
        "name": "Gifts Of Giving",
        "description": "Adds gift blocks players can add items in and gift each other!",
        "version": "1.1.0",
        "collaborators": "Nyfaria",
        "link": "https://www.curseforge.com/minecraft/mc-mods/gifts-of-giving/",
        "tag": "Mod" 
    }
    // {
    //     "name": "Creepy Decor",
    //     "description": "Adds a bunch of eerie and creepy furniture for spooky season. Originally made for 2023 SpookyJam!",
    //     "version": "0.1.0 Alpha",
    //     "collaborators": "JTK222",
    //     "link": "https://www.curseforge.com/minecraft/mc-mods/creepy-decor/",
    //     "tag": "Mod" 
    // }
]

// Get the project-list element
const projectList = document.getElementById("project-list");
let animDelay = 0;

// Iterate and display each project
for (const project of projects) {
    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");

    let innerHTML = `
        <div class="project-header">
        <h3 class="project-title">${project.name}</h2>
        <div class="spacer"></div>
    `

    if (project.translation) innerHTML += `
        <a class="project-link" style="margin-right: -5px" href="${project.translation}" target="_blank">
            <span class="material-symbols-outlined" style="font-size: 20px;">language</span>
        </a>
    `

    innerHTML += `
        <a class="project-link" href="${project.link}" target="_blank">
            <span class="material-symbols-outlined" style="font-size: 20px;">open_in_new</span>
        </a>
        </div>
    `

    if (project.collaborators) innerHTML += `
        <p class="project-authors">With ${project.collaborators}</p>
    `

    innerHTML += `
        <p class="project-description">${project.description}</p>
        <div class="spacer"></div>
        <div class="project-footer">
            <span class="project-version">Version: ${project.version}</span>
            <span class="project-tag">${project.tag}</span>
        </div>
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