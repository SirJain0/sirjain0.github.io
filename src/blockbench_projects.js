const request = await fetch("https://raw.githubusercontent.com/JannisX11/blockbench-plugins/master/plugins.json");
const data = await request.json();
const plugins = Object.entries(data).filter(e => e[1].author.includes("SirJain"));

const projects = [
    {
        "name": "Blockmorphism",
        "description": "A theme that effectively brings the Glassmorphism style into Blockbench!",
        "version": "2.0.0",
        "link": "https://github.com/SirJain0/Blockmorphism",
        "tag": "Theme"
    },
    {
        "name": "Text Generator",
        "description": "Generates blocky text in cubes.",
        "version": "2.0.1",
        "link": "https://blockbench.net/plugins/mc_text_generator",
        "tag": "Plugin" 
    },
    {
        "name": "Emissive Textures in Renders",
        "description": "Explains how to create cool emissive textures in renders in both Sketchfab and Blender!",
        "version": "1.0.0",
        "collaborators": "Geode",
        "link": "https://www.blockbench.net/wiki/guides/emissive-textures-renders",
        "tag": "Wiki Article" 
    }
]

// Get the project-list element
const projectList = document.getElementById("project-list");
let animDelay = 0;

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

// Iterate and display each project
for (const [id, plugin] of plugins) {
    let pluginID = plugin.title.toLowerCase().replaceAll(" ", "_");

    // Skip over Text Generator plugin
    if (plugin.title === "Text Generator") continue;

    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");
    let pluginCollaborators;

    if (plugin.author != "SirJain") pluginCollaborators = plugin.author.substring(12)
    else pluginCollaborators = null;

    let innerHTML = `
        <div class="project-header">
        <h3 class="project-title">${plugin.title}</h2>
        <div class="spacer"></div>
    `

    if (plugin.translation) innerHTML += `
        <a class="project-link" style="margin-right: -5px" href="${plugin.translation}" target="_blank">
            <span class="material-symbols-outlined" style="font-size: 20px;">language</span>
        </a>
    `

    innerHTML += `
        <a class="project-link" href="https://www.blockbench.net/plugins/${pluginID}" target="_blank">
            <span class="material-symbols-outlined" style="font-size: 20px;">open_in_new</span>
        </a>
        </div>
    `

    if (pluginCollaborators) innerHTML += `
        <p class="project-authors">With ${pluginCollaborators}</p>
    `

    innerHTML += `
        <p class="project-description">${plugin.description}</p>
        <div class="spacer"></div>
        <div class="project-footer">
            <span class="project-version">Version: ${plugin.version}</span>
            <span class="project-tag">Plugin</span>
        </div>
    `

    div.innerHTML = innerHTML;

    projectList.append(div);
    div.style.cssText += `
        transform: translateY(-3%);
        opacity: 0;
        animation:project-ease-in 1000ms ease-out ${animDelay}ms;
        animation-fill-mode: forwards;
    `;
    animDelay += 120;
}