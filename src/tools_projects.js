const projects = [
    {
        "name": "Citation Generator",
        "description": "A small tool that allows you to generate a citation for a website (following the APA formatting)!",
        "version": "1.0.3",
        "author": "SirJain",
        "link": "../tools/citation_generator/",
        "tag": "Web Page"
    }
]

// Get the project-list element
const projectList = document.getElementById("project-list");
let animDelay = 0;

// Iterate and display each project
for (const project of projects) {
    const div = document.createElement("bb-project");
    div.className = "bb-project";
    div.classList.add("project-view");

    div.innerHTML = 
    `
        <div class="project-header">
            <h3 class="project-title">${project.name}</h2>
            <div class="spacer"></div>
            <a class="project-link" href="${project.link}">
                <span class="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
        <p class="project-authors">By: ${project.author}</p>
        <p class="project-description">${project.description}</p>
        <div class="spacer"></div>
        <div class="project-footer">
            <span class="project-version">Version: ${project.version}</span>
            <span class="project-tag">${project.tag}</span>
        </div>
    `;

    projectList.append(div)
    div.style.cssText += `
        transform: translateY(-3%);
        opacity: 0;
        animation:project-ease-in 1000ms ease-out ${animDelay}ms;
        animation-fill-mode: forwards;
    `;
    animDelay += 80;
}