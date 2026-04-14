import projects from './projects.js'

function getProjectId() {
    const params =  new URLSearchParams(window.location.search);
    const paramProject = params.get('project');

    if (paramProject) {
        return paramProject;
    }

    const hash = window.location.hash.slice(1);
    if (hash) return hash;

    return null;
}

function renderProject(projectId) {
    const project = projects[projectId]
    const container = document.getElementById('project-content');

    if(!project) {
        container.innerHTML =`
        <div class="not-found">
            <h1> 404 </h1>
            <h2>Project Not Found </h2>
            <p>The project "${projectId}" doesn't exist.</p>

            <br></br>
            <a href="index.html" class="btn btn-primary">Back to Projects</a>
        </div>`;

        document.title = "Project Not Found"
        return;
    }

    // display the project page with html here
    container.innerHTML = 
    `<div class="project-hero">
        <h1 class="project-title">${project.title}</h1>
        <p class="project-subtitle">${project.subtitle} </p>

        <div class="project-meta">
            <div class="meta-item">
                <span class="meta-label">Duration</span>
                <span class="meta-label">${project.duration}</span>
            </div>
        </div>

        <div class="skills-section">
            <h3 class="section-heading">Technologies Used</h3>
            <div class="skills-list">
                ${project.skills.map(skill =>
                    `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    </div>

    <img src="${project.image}" alt="${project.title}" class="project-image">

    <div class="content-section">
        <h2>Project Overview</h2>
        <p>${project.overview}</p>
    </div>

    <div class="content-section">
        <h2>Key Features</h2>
        <ul>
            ${project.features.map(afeature => `<li>${afeature}</li>`).join('')}
        </ul>
    </div>

    <div class="content-section">
        <h2>Challenges</h2>
        <p>${project.challenges}</p>
    </div> `;
    
    document.title = `${project.title} - Project Details`

}

const projectId = getProjectId();
renderProject(projectId);

// hash change
window.addEventListener('hashchange', () => {
    renderProject(getProjectId());
});