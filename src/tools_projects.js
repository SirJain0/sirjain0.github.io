const projects = [
    {
        "name": "Cite Generator",
        "description": "A small tool that allows you to generate a cite for a website, which can be used for bibliographies!",
        "version": "Unreleased",
        "author": "SirJain",
        "link": "../tools/site_generator/index.html" 
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