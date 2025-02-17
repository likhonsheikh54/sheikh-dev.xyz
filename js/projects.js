const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'Full-stack online shopping platform',
        image: 'public/images/project1.jpg',
        techStack: ['React', 'Node.js', 'MongoDB'],
        liveLink: 'https://example.com',
        githubLink: 'https://github.com/example'
    },
    // Add more projects here
];

function createProjectCard(project) {
    return `
        <article class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.techStack.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.liveLink}" class="btn" target="_blank">View Live</a>
                <a href="${project.githubLink}" class="btn" target="_blank">GitHub</a>
            </div>
        </article>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }

    // Add intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('section-animate');
        observer.observe(card);
    });
});
