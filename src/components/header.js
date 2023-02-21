const header = () => {
  return /*html*/`<header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">
        <img src="./img/logo.png" alt="" class="nav__logo-img">
        Hồng Thúy
      </a>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="/" class="nav__link active-link">Trang chủ</a>
          </li>
          <li class="nav__item">
            <a href="/aboutpage" class="nav__link">Giới thiệu</a>
          </li>


          <li class="nav__item">
            <a href="/projectspage" class="nav__link">Dự án</a>
          </li>
          <li class="nav__item">
            <a href="/blogpage" class="nav__link">Bài viết</a>
          </li>

          <a href="/contactpage" class="button button--ghost">Liên hệ</a>
        </ul>

        <div class="nav__close" id="nav-close">
          <i class='bx bx-x'></i>
        </div>


      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class='bx bx-grid-alt'></i>
      </div>

    </nav>
  </header>
  
  
        
        
        `
}



export default header