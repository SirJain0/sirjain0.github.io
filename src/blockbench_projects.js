const request = await fetch("https://raw.githubusercontent.com/JannisX11/blockbench-plugins/master/plugins.json");
const data = await request.json();
const plugins = Object.entries(data).filter(e => e[1].author.includes("SirJain"));

const projects = [
    {
        "name": "Blockmorphism",
        "description": "A theme that effectively brings the Glassmorphism style into Blockbench!",
        "version": "1.2.0",
        "author": "SirJain",
        "link": "https://github.com/SirJain0/Blockmorphism",
        "tag": "Theme"
    },
    {
        "name": "Minecraft Text Generator",
        "description": "Generates Minecraft-styled text in cubes.",
        "version": "2.0.0",
        "author": "SirJain",
        "link": "https://blockbench.net/plugins/mc_text_generator",
        "tag": "Plugin" 
    }
]

// Get the project-list element
const projectList = document.getElementById("project-list");
let animDelay = 0;

for (const project of projects) {
    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");

    div.innerHTML = 
    `
        <div class="project-header">
            <h3 class="project-title">${project.name}</h2>
            <div class="spacer"></div>
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

// Iterate and display each project
for (const [id, plugin] of plugins) {
    let pluginID = plugin.title.toLowerCase().replaceAll(" ", "_");

    // Skip over MC Text Generator
    if (plugin.title === "Minecraft Text Generator") continue;

    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");

    div.innerHTML = 
    `
        <div class="project-header">
            <h3 class="project-title">${plugin.title}</h2>
            <div class="spacer"></div>
            <a class="project-link" href="https://blockbench.net/plugins/${pluginID}" target="_blank">
                <span class="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
        <p class="project-authors">By: ${plugin.author}</p>
        <p class="project-description">${plugin.description}</p>
        <div class="spacer"></div>
        <div class="project-footer">
            <span class="project-version">Version: ${plugin.version}</span>
            <span class=" project-tag plugin-tag">Plugin</span>
        </div>
    `;

    projectList.append(div);
    div.style.cssText += `
        transform: translateY(-3%);
        opacity: 0;
        animation:project-ease-in 1000ms ease-out ${animDelay}ms;
        animation-fill-mode: forwards;
    `;
    animDelay += 120;
}