const projects = [
    {
        "name": "Extensive Diamonds",
        "description": "Mod that adds three new diamond types to Minecraft!",
        "version": "1.0.5",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/extensive-diamonds/" 
    },
    {
        "name": "Throwable Fluids",
        "description": "Mod that adds throwable lava, throwable water, and more!",
        "version": "1.1.2",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/throwable-fluids/" 
    },
    {
        "name": "Convenient Hitboxes",
        "description": "Mod that adds a button toggling entity hitbox visibility, having the same functionality as F3+B.",
        "version": "1.0.2",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/convenient-hitboxes/" 
    },
    {
        "name": "Tiramisu",
        "description": "Mod that adds bitesized and full tiramisu to Minecraft!",
        "version": "1.0.0",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/tiramisu/" 
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
            <div>
                <h2 class="project-title">${project.name}</h2>
            </div>

            <div>
                <a class="project-link" href="${project.link}">
                <span class="material-symbols-outlined">open_in_new</span>
            </a>
            </div>
        </div>

        <div>
            <p class="project-authors">By: ${project.author}</p>
        </div>

        <div>
            <p class="project-description">${project.description}</p>
        </div>

        <center>
        <hr class="divider" style="margin-top: 30px;">
        </center>

        <div class="project-footer">
            <h3 class="project-version">Version: ${project.version}</h3>
            <p class="project-mod-tag">Hey</p>
        </div>
    `;

    projectList.append(div)
}