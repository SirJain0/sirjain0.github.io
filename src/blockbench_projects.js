const request = await fetch("https://raw.githubusercontent.com/JannisX11/blockbench-plugins/master/plugins.json");
const data = await request.json();
const plugins = Object.entries(data).filter(e => e[1].author.includes("SirJain"));

const projects = [
    {
        "name": "Blockmorphism",
        "description": "A theme that effectively brings the Glassmorphism style into Blockbench!",
        "version": "1.2.0",
        "author": "SirJain",
        "link": "https://github.com/SirJain0/Blockmorphism" 
    },
    {
        "name": "Minecraft Text Generator",
        "description": "Generates Minecraft-styled text in cubes.",
        "version": "2.0.0",
        "author": "SirJain",
        "link": "https://blockbench.net/plugins/mc_text_generator" 
    }
]

// Get the project-list element
const projectList = document.getElementById("project-list");

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

// Iterate and display each project
for (const [id, plugin] of plugins) {
    let pluginID = plugin.title.toLowerCase().replaceAll(" ", "_");

    // Skip over MC Text Generator and Outline Creator
    if (plugin.title === "Minecraft Text Generator") continue;

    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");
    div.innerHTML = 
    `
        <div class="project-header">
            <div class="box">
                <h2 class="project-title">${plugin.title}</h2>
            </div>

            <div class="box2">
                <h3 class="project-version">${plugin.version}</h3>
            </div>
        </div>

        <div>
            <p class="project-authors">By: ${plugin.author}</p>
        </div>

        <div>
            <p class="project-description">${plugin.description}</p>
        </div>

        <div class="links">
            <a class="project-link" href="http://www.blockbench.net/plugins/${pluginID}">Official Link</a>
        </div>
    `;

    projectList.append(div)
}