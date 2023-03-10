const request = await fetch("https://raw.githubusercontent.com/JannisX11/blockbench-plugins/master/plugins.json")
const data = await request.json()
const plugins = Object.entries(data).filter(e => e[1].author.includes("SirJain"))

const pluginList = document.getElementById("project-list") //get the plugin list element

// Iterate and display each project
for (const [id, plugin] of plugins) {
    let pluginID = plugin.title.toLowerCase().replaceAll(" ", "_");

    // Skip over MC Text Generator - has special handling
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

    pluginList.append(div)
}