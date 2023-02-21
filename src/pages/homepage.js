import footer from "@/components/footer";
import header from "@/components/header";
import aboutpage from "./aboutpage";
import contactpage from "./contactpage";
import projectspage from "./projectspage";

const homepage = () => {
  return /*html*/`
    ${header()}
  <!--==================== HOME ====================-->
   <section class="home container" id="home">
      <div class="swiper home-swiper">
        <div class="swiper-wrapper"> 
  <!--==== HOME SLIDER 1 ====-->
   <section class="swiper-slide">
            <div class="home__content grid">
              <div class="home__group">
                <img type="module" src="./img/mpt.jpg" alt="ẢNH" class="home__img">
              </div>

              <div class="home__data">
                <h3 class="home__subtitle">#Xin chào, tôi là Triệu Hồng Thúy</h3>
                <h1 class="home__title">TÔI LÀ<br>FRONT-END<br> DEVELOPER</h1> 

  <div class="home__buttons">
    <a target="_blank" href="https://drive.google.com/file/d/15LkYcQZlWmeblHKHli9rF7hzpXgyWYwx/view?usp=share_link"
      class="button">Dowload CV</a>
    <a href="/aboutpage" class="button--link button--flex">Giới thiệu về tôi <i
        class='bx bx-right-arrow-alt button__icon'></i></a>
  </div>
  </div>
  </div>

  </div>
  </section> 
    ${aboutpage()}
    ${projectspage()}
    ${contactpage()}
    ${footer()}
   `
}

export default homepage;