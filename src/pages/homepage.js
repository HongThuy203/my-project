import footer from "@/components/footer";
import header from "@/components/header";
import aboutpage from "./aboutpage";
import contactpage from "./contactpage";

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
                <img src="./img/myptr.jpg" alt="" class="home__img">
              </div>

              <div class="home__data">
                <h3 class="home__subtitle">#Xin chào, tôi là Triệu Hồng Thúy</h3>
                <h1 class="home__title">TÔI LÀ<br>FRONT-END<br> DEVELOPER</h1> -->
            <p class="home__description">Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                </p>

  <div class="home__buttons">
    <a target="_blank" href="https://drive.google.com/file/d/15LkYcQZlWmeblHKHli9rF7hzpXgyWYwx/view?usp=share_link"
      class="button">Dowload CV</a>
    <a href="#" class="button--link button--flex">Giới thiệu về tôi <i
        class='bx bx-right-arrow-alt button__icon'></i></a>
  </div>
  </div>
  </div>

  </div>
  </section> 
    ${aboutpage()}
    ${contactpage()}
    ${footer()}
   `
}

export default homepage;