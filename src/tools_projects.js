const projects = [
    {
        "name": "Citation Generator",
        "description": "A small tool that allows you to generate a citation for a website (following the APA formatting)!",
        "version": "1.0.3",
        "link": "citation_generator",
        "tag": "Web Page"
    }
]

// Get the project-list element
const projectList = document.getElementById("project-list");
let animDelay = 0;

// Iterate and display each project
for (const project of projects) {
    const div = document.createElement("misc-project");
    div.className = "misc-project";
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