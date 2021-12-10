const getProjectDetails = (project) => {
  const projectDetails = {
    Portfolio: {
      name: 'My Portfolio',
      details: ['PORTFOLIO', 'Front-end', '2021'],
      description:
        'I’m a software developer! I can help you build a product, feature or website Look through some of my work and experience. I created this website as a student at Microverse.',
      image:
        '<img src="./assets/images/portfolio-large.png" alt="My portfolio" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://rtonata88.github.io/my-portfolio/',
      source: 'https://github.com/rtonata88/my-portfolio',
    },

    Safaris: {
      name: 'Namibia Safaris',
      details: ['Namibia Safaris', 'Front-end', '2021'],
      description:
        'We are a tour operator company based in Namibia with over 20 years experience in creating long lasting memories Safari Holidays in Namibia. Our passionate team – who have nothing but love for nature and travel – is keenly focused on making your trip memorable. We offer specific personalized wishes and preferences, while we strife to provide an excellent service resulting in unforgettable and most compelling experiences.',
      image:
        '<img src="./assets/images/Namibia-safaris-large.png" alt="Tonic project screenshot" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://rtonata88.github.io/namibia_safaris/',
      source: 'https://github.com/rtonata88/namibia_safaris',
    },

    Todo: {
      name: 'TODO App',
      details: ['TODO App', 'Front-end', '2021'],
      description:
        'A simple app that displays your todo tasks with basic features such add, delete, mark complete, mark incomplete, etc.',
      image:
        '<img src="./assets/images/todo-large.png" alt="Tonic project screenshot" class="popup-project-image" id="popup-project-image">',
      technologies: ['HTML', 'Javascript', 'CSS'],
      live_server: 'https://rtonata88.github.io/todo/dist/',
      source: 'https://github.com/rtonata88/todo',
    },
  };

  return projectDetails[project];
};

const closeMenu = document.querySelectorAll('.mobile-menu-toggle');

closeMenu.forEach((element) => {
  element.addEventListener('click', () => {
    const overlay = document.querySelector('.menu-overlay');
    overlay.classList.toggle('hide-menu');

    const hamburgerMenu = document.querySelector('.mobile-menu');
    hamburgerMenu.classList.toggle('hide-hamburger');
  });
});

const popup = document.getElementById('popup');

const seeProjectButton = document.querySelectorAll('.see-project-button');
seeProjectButton.forEach((element) => {
  element.addEventListener('click', () => {
    popup.style.display = 'block';

    const projectDetails = getProjectDetails(element.id);
    document.getElementById('popup-project-title').innerHTML = projectDetails.name;
    let details = '';

    Object.keys(projectDetails.details).forEach((key) => {
      details += `<span class="client-name">${projectDetails.details[key]}</span> `;
      details += ' <i class="fas fa-circle divider"></i> ';
    });

    document.getElementById('popup-project-info').innerHTML = details;
    document.getElementById('popup-project-image-holder').innerHTML = projectDetails.image;
    document.getElementById('popup-project-description').innerHTML = projectDetails.description;

    let popupProjectStack = '';
    Object.keys(projectDetails.technologies).forEach((key) => {
      popupProjectStack += `<span class="label">${projectDetails.technologies[key]}</span>`;
    });

    document.getElementById('popup-project-stack').innerHTML = popupProjectStack;
    document.getElementById('see-live-btn').addEventListener('click', () => {
      window.location.href = projectDetails.live_server;
    });

    document.getElementById('see-source-btn').addEventListener('click', () => {
      window.location.href = projectDetails.source;
    });
  });
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  popup.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
};
