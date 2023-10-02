'use strict';

const works = document.querySelector('.categories--works');
const workProjects = document.querySelectorAll('.work--project');
const worksContainer = document.querySelector('.works');

works.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;
  if (filter == null) return;

  handleActiveSelection('category--selected', e.target);
  filterProjects(worksContainer, workProjects, filter);
});

const projects = document.querySelector('.categories--projects');
const projectProjects = document.querySelectorAll('.project--project');
const projectsContainer = document.querySelector('.projects');

projects.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter;
  if (filter == null) return;

  handleActiveSelection('project--selected', e.target);
  filterProjects(projectsContainer, projectProjects, filter);
});

function handleActiveSelection(classname, target) {
  const active = document.querySelector('.' + classname);
  active.classList.remove(classname);
  target.classList.add(classname);
}

function filterProjects(container, projects, filter) {
  container.classList.add('anim-out');
  projects.forEach((project) => {
    if (filter === 'all' || filter === project.dataset.type) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
  setTimeout(() => {
    container.classList.remove('anim-out');
  }, 250);
}
