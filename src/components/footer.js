const footer = () => {
    return /*html*/`
    <section class="section newsletter">
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
      <span class="footer__copy">Designed and made by Hong Thuy &#169; 2023</span>
    </div>
  </section>
  <footer class="footer section">
    <div class="footer__container container grid">

  </footer>`
}

export default footer