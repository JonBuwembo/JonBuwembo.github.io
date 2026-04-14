import data from './techstack.js'

const {icons, techStack} = data;

function renderTechStack(containerId, category) {

    const container = document.getElementById(containerId);
    
    const items = techStack[category]; // list of lists
    
    // iterate through all the items.
    // if it exists within a certain category, then place in that category (with its html)

    items.forEach(item => {
        const badge = document.createElement('div');
        badge.className = 'tech-badge';

        const svgicon = icons[item.icon];

        badge.innerHTML = `
        <div class="tech-icon">${svgicon}</div>   
        <span class="tech-name"> ${item.name}</span>   
        `;  

        container.appendChild(badge);
        
    });
    // HTML

    /**
     * Each icon
     * <div class="tech-badge"> <--- need to create this element.
     *      <div class="tech-icon">
     *      </div>
     *      <span class="tech-name"> icon name</span>
     * </div>
     */
}

renderTechStack("languages", "languages");
renderTechStack("frameworks", "frameworks");
renderTechStack("tools", "tools");