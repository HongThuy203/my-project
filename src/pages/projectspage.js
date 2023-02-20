import projectList from "@/components/projectList";
const projectspage = () => {
    // return ` <div class="container"> <div class="row">
    // ${projectList({ projects })}
    // </div></div>`;
    return `
    <!--====================Projects====================-->
    <!-- <section class="section trick" id="trick">
      <h2 class="section__title">Dự án của tôi</h2>
  
      <div class="trick__container container grid">
        <div class="trick__content">
          <img src="./img/trick-treat1-img.png" alt="" class="trick__img">
          <h3 class="trick__title">Lorem</h3>
          <span class="trick__subtitle">ipsum</span>
          <span class="trick__price">$11.99</span>
          <button class="button trick__button">
            <i class='bx bxl-figma '>Preview</i>
          </button>
          <button class="button trick__button">
            <i class='bx bxl-github '></i>
          </button>
        </div>
        </div>
        </section>
        <a class="center" href="#">
          <h5 class="center">XEM THÊM TRÊN GITHUB CỦA TÔI</h5>

    `
};

export default projectspage;