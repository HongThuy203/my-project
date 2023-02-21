import header from "@/components/header";
const contactpage = () => {
  return /*html*/ `
    ${header()};
    <section class="section newsletter">
    <div class="newsletter__container container">
      <h2 class="section__title">Góp ý & liên hệ</h2>
      <p class="newsletter__description">
        Nếu bạn muốn góp ý hoặc liên hệ với tôi, xin vui lòng điền vào form sau
      </p>

      <form action="" class="newsletter__form">
        <input type="text" placeholder="Nhập tên của bạn" class="newsletter__input">
        <br> <br>
        <input type="text" placeholder="Viết lời nhắn" class="newsletter__input">
      </form>
      <button class="button">
        Gửi
      </button>
    </div>
  </section>
  <<section class="section newsletter">
    <div class="newsletter__container container">
      <h2 class="section__title">Liên hệ tôi</h2>
      <form action="" class="newsletter__form">
        <div class="footer__content">
          <a href="#" class="footer__logo">
            <img src="./img/logo.png" alt="" class="footer__logo-img">
            Hồng Thúy
          </a>

          <p class="footer__link">Liên hệ với tôi qua số điện thoại: <a class="text-muted text-decoration-none "
              href="tel:0389 961 844">0389 961 844</a> hoặc liên hệ</p>

          <div class="footer__link">
            <a href="https://www.facebook.com/696f75HEX/" target="_blank" class="footer__social-link ">
              <i class='bx bxl-facebook'></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" class="footer__social-link">
              <i class='bx bxl-github'></i>
            </a>
            <a href="https://twitter.com/" target="_blank" class="footer__social-link">
              <i class='bx bxl-gmail'></i>
            </a>

          </div>
        </div>

      </form>
    </div>
  </section> 
</main>
    `;
}

export default contactpage