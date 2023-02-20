import header from "@/components/header"

const aboutpage = () => {
    return /*html*/`
    ${header()}
    <section class="section about" id="about">
    <div class="about__container container grid">
      <div class="about__data">
        <h2 class="section__title about__title">Giới thiệu về<br>Hồng Thúy</h2>
        <p class="about__description ">Hiện tại mình đang là sinh viên kì 5 tại trường Cao đẳng FPT
          Polytechnich. Mình
          bắt đầu học lập trình từ tháng 8 năm 2022, phần lớn thời gian của mình từ lúc nhập trường đều dành cho việc
          học code.
          Ngoài việc học tập trên trường, mình thường tự học trên các website như w3school, F8, và các kênh
          Youtube,..
          như Online Tutoriers, OnlineCodelearn.
        </p>
        <b>Thông tin cơ bản: </b>
        <hr>
        <div class="about__description"> 
        <div class="container">
        <div class="row">
          <div class="col col-md-6">
            Học vấn:
          </div>
          <div class="col col-md-6">
            Cao đẳng FPT Polytechnic
          </div>
          <div class="col col-md-6">
            Địa chỉ:
          </div>
          <div class="col col-md-6">
            Cầu Giấy- Hà Nội
          </div>
        </div>
        <div class="row">
          <div class="col col-md-6">
            Số điện thoại:
          </div>
          <div class="col col-md-6">
            0389961844
          </div>

        </div>
      </div>
 <div class="footer__link">
</div>
    </div>
    <a href="#" class="button">Đọc thêm</a>
  </div>

  <img src="./img/myptr.jpg" alt="" class="about__img">
</div>
</section>
`
}

export default aboutpage