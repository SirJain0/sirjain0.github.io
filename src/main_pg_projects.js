const projectCategories = [
    {
        "title": "Blockbench Projects",
        "description": "Includes plugins that extend the Blockbench functionality and themes that touch up the appearance of the program.",
        "path": "blockbench_projects/"
    },
    {
        "title": "Minecraft Projects",
        "description": "Projects that tie in programming and art skills shown in a wide range of survival-oriented and utility mods.",
        "path": "minecraft_projects/"
    },
    {
        "title": "3D Modeling",
        "description": "All websites and projects related to 3D modeling, including a portfolio and sites where I sell my work.",
        "path": "3d_modeling/"
    }
]

const miscProjects = [
    {
        "title": "APA Citation Generator",
        "description": "A web-based tool that generates a fully-formatted APA citation from some parameters.",
        "path": "citation_generator/"
    },
    {
        "title": "Compoundly",
        "description": "An iOS app that calculates the compounded annual growth rate (CAGR) from a start and target value.",
        "path": "compoundly/"
    }
]

// Get the view-projects-view element
const generalProjectList = document.getElementById("view-projects-view")
const miscProjectList = document.getElementById("view-misc-projects-view")

for (const view of projectCategories) {
    const div = document.createElement("project-type");
    div.className = "project-type";
    div.classList.add("view-project-card");

    div.innerHTML = 
    `
        <div class="project-card-title-div">
            <p class="project-card-title">${view.title}</p>
        </div>
        <p class="project-description" style="text-align: center;">${view.description}</p>
        <div class="spacer"></div>
        <div class="project-card-button-div">
            <a href="${view.path}">
                <button class="project-card-button">View Projects</button>
            </a>
        </div>
    `;

    generalProjectList.append(div)
}

for (const view of miscProjects) {
    const div = document.createElement("project-type");
    div.className = "project-type";
    div.classList.add("view-project-card");

    div.innerHTML =
        `
        <div class="project-card-title-div">
            <p class="project-card-title">${view.title}</p>
        </div>
        <p class="project-description" style="text-align: center;">${view.description}</p>
        <div class="spacer"></div>
        <div class="project-card-button-div">
            <a href="misc_projects/${view.path}">
                <button class="project-card-button">View Project</button>
            </a>
        </div>
    `;

    miscProjectList.append(div)
}