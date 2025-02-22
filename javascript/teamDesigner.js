class Designer {
    constructor(name, role, image) {
      this.name = name;
      this.role = role;
      this.image = image;
    }
  }
  
  const teamDesigner = [
    new Designer('David Cohen', 'CEO', './img/teams-page/david-cohen.svg'),
    new Designer('James Anderson', 'HR Manager', './img/teams-page/games-anderson.svg'),
    new Designer('Olivia Martinez', 'CEO', './img/teams-page/olivia-martinez.svg'),
    new Designer("Liam Johnson", "Business Analyst", './img/teams-page/johnson.svg'),
    new Designer("Ava Thompson", "Marketing Specialist", './img/teams-page/thompson.svg'),
    new Designer("Ethan Carter", "CEO", './img/teams-page/carter.svg'),
    new Designer("Sophia Miller", "Project Manager", './img/teams-page/miller.svg'),
    new Designer("Noah Wilson", "Marketing Specialist", './img/teams-page/wilson.svg'),
  ];

const designerList = document.querySelector('#designerList');

teamDesigner.forEach(designer => {
    const listItem = document.createElement('li');
    listItem.classList.add('designer-item');
    listItem.setAttribute('data-aos', 'fade-up');
    listItem.setAttribute('data-aos-delay', '300');
    listItem.setAttribute('data-aos-duration', '1000');

    listItem.innerHTML = `
        <a href="#">
            <div class="designer-img">
                <img src="${designer.image}" alt="${designer.name}">
            </div>
            <div class="designer-info">
                <h4>${designer.name}</h4>
                <p>${designer.role}</p>
            </div>
        </a>
    `;
    designerList.appendChild(listItem);
});






