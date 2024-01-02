// Get the project-list element
const projectList = document.getElementById("portfolio-display");
let animDelay = 0;

const div = document.createElement("portfolio");
div.className = "portfolio";
div.classList.add("portfolio-view");

div.innerHTML = `
    <div class="project-header">
    <h3 class="project-title" style="font-size: 26px;">Portfolio</h2>
    <div class="spacer"></div>
    <a class="project-link" href="https://sirjain.artstation.com" target="_blank">
        <span class="material-symbols-outlined" style="font-size: 22px;">open_in_new</span>
    </a>
    </div>
    <p class="project-description" style="font-size: 18px;">My portfolio containing my best 3D modeling work, with effective media and descriptions.</p>
    <div class="spacer" style="margin-top: 25px;"></div>
`

projectList.append(div);

div.style.cssText += `
    transform: translateY(-3%);
    opacity: 0;
    animation:project-ease-in 1000ms ease-out ${animDelay}ms;
    animation-fill-mode: forwards;
`;

animDelay += 120;