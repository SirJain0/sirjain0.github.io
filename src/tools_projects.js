const projects = [
    {
        "name": "Citation Generator",
        "description": "A small tool that allows you to generate a citation for a website (following the APA formatting)!",
        "version": "1.0.1",
        "author": "SirJain",
        "link": "../tools/citation_generator/index.html" ,
        "tag": "Website"
    }
]

// Get the project-list element
const projectList = document.getElementById("project-list")

// Iterate and display each project
for (const project of projects) {
    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");

    div.innerHTML = 
    `
        <div class="project-header">
            <h3 class="project-title">${project.name}</h2>
            <a class="project-link" href="${project.link}">
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