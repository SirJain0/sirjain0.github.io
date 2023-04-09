const views = [
    {
        "title": "Blockbench Projects",
        "description": "I've made a few small plugins that enhance the Blockbench functionality. I've also made a theme which changes the look of the program.",
        "path": "blockbench_projects/index.html"
    },
    {
        "title": "Minecraft Projects",
        "description": "I've also made some Minecraft content which ties in both my programming and 3D modeling hobbies together to create utility or adventure projects.",
        "path": "minecraft_projects/index.html"
    },
    {
        "title": "Miscellaneous Tools",
        "description": "This is where I showcase some miscellaneous utility tools I've made which don't fall into other categories.<br><br>",
        "path": "tools_projects/index.html"
    }
]

// Get the view-projects-view element
const projectList = document.getElementById("view-projects-view")

for (const view of views) {
    const div = document.createElement("project-type");
    div.className = "project-type";
    div.classList.add("view-project-card");

    div.innerHTML = 
    `
        <div class="project-card-title-div">
            <p class="project-card-title">${view.title}</p>
        </div>
        <p class="project-description" style="text-align: center;">${view.description}</p>
        <div class="project-card-button-div">
            <a href="${view.path}">
                <button class="project-card-button">View Projects</button>
            </a>
        </div>
    `;

    projectList.append(div)
}