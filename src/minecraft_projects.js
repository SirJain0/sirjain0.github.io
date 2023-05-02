const projects = [
    {
        "name": "Extensive Diamonds",
        "description": "Mod that adds three new diamond types to Minecraft!",
        "version": "1.0.5",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/extensive-diamonds/",
        "tag": "Mod"
    },
    {
        "name": "Throwable Fluids",
        "description": "Mod that adds throwable lava, throwable water, and more!",
        "version": "1.1.3",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/throwable-fluids/",
        "tag": "Mod" 
    },
    {
        "name": "Convenient Hitboxes",
        "description": "Mod that adds a button toggling entity hitbox visibility, having the same functionality as F3+B.",
        "version": "1.0.2",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/convenient-hitboxes/",
        "tag": "Mod"
    },
    {
        "name": "Tiramisu",
        "description": "Mod that adds bitesized and full tiramisu to Minecraft!",
        "version": "1.0.0",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/tiramisu/",
        "tag": "Mod" 
    }
]

// Get the project-list element
const projectList = document.getElementById("project-list");

// Iterate and display each project
for (const project of projects) {
    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");

    div.innerHTML = 
    `
        <div class="project-header">
            <h3 class="project-title">${project.name}</h2>
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
}