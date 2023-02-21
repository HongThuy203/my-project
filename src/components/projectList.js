const projectList = (projects) => {
    return `${projects.map((projects) => {

        return `
        
        <div class="trick__content ">
        <img src="./img/trick-treat1-img.png" alt="" class="trick__img">
        <h3 class="trick__title"><a class="trick__title href="/projects/${projects.id}">${projects.name}</a></h3>
        <span class="trick__subtitle">${projects.author}</span>
        <span class="trick__price">HTML/css</span>
        <button class="button trick__button">
          <i class='bx bxl-figma '>Preview</i>
        </button>
        <button class="button trick__button">
          <i class='bx bxl-github '></i>
        </button>
      </div>
         `;

    }).join("")}
    `;
}

export default projectList;