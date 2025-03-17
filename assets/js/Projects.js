document.addEventListener('DOMContentLoaded', function () {
    const javaButton = document.getElementById('JavaButton');
    const projectsContainer = document.getElementById('JavaProjectsContainer');
    const projectList = projectsContainer.querySelector('.ProjectList'); // Seleciona a div ProjectList dentro de projectsContainer
    
    javaButton.addEventListener('click', function () {
        projectsContainer.classList.toggle('active');
        
        // Verifica se os projetos já foram carregados
        if (!projectsContainer.hasAttribute('data-loaded')) {
            loadProjects(projectList); // Passa o elemento ProjectList para a função loadProjects
            projectsContainer.setAttribute('data-loaded', 'true');  // Marca o container como carregado
        }
    });

    function loadProjects(projectList) {
        const projects = [
            { title: 'Projeto 1', description: 'Descrição do projeto 1' },
            { title: 'Projeto 2', description: 'Descrição do projeto 2' },
            { title: 'Projeto 3', description: 'Descrição do projeto 3' },
            { title: 'Projeto 4', description: 'Descrição do projeto 4' }
        ];

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('Project');
            projectElement.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.description}</p>
            `;
            projectList.appendChild(projectElement); // Agora os projetos são adicionados dentro da ProjectList
        });
    }
});
