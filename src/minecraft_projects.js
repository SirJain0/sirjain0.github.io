const projects = [
    {
        "name": "Extensive Diamonds",
        "description": "Mod that adds new diamond types to Minecraft!",
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
        "description": "Mod that adds a button which toggles entity hitbox visibility, having the same functionality as F3+B.",
        "version": "1.0.1",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/convenient-hitboxes/" 
    },
    {
        "name": "Tiramisu",
        "description": "Mod that adds Tiramisu to Minecraft!",
        "version": "1.0.0",
        "author": "SirJain",
        "link": "https://www.curseforge.com/minecraft/mc-mods/tiramisu/" 
    }
]

const projectList = document.getElementById("project-list") //get the plugin list element

// Iterate and display each project
for (const project of projects) {
    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");

    div.innerHTML = 
    `
        <div class="project-header">
            <div class="box">
                <h2 class="project-title">${project.name}</h2>
            </div>

            <div class="box2">
                <h3 class="project-version">${project.version}</h3>
            </div>
        </div>

        <div>
            <p class="project-authors">By: ${project.author}</p>
        </div>

        <div>
            <p class="project-description">${project.description}</p>
        </div>

        <div class="links">
            <a class="project-link" href="${project.link}">Official Link</a>
        </div>
    `;

    projectList.append(div)
}