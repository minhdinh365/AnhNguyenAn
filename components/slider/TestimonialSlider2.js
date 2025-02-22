"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
};
export default function TestimonialSlider2() {
  return (
    <>
      <Swiper {...swiperOptions} className="swiper-container two-item-carousel">
        <SwiperSlide className="slide">
          <div className="testimonial-1-block">
            <div className="testimonial-1-quote-icon">
              <i className="icon-18"></i>
            </div>
            <p className="testimonial-1-review-desc">
              "Từ khi sử dụng phân bón của công ty, cây trồng của tôi phát triển
              mạnh mẽ hơn hẳn. Đất đai trở nên màu mỡ, cây xanh tươi và năng
              suất tăng đáng kể. Tôi rất hài lòng với chất lượng sản phẩm và
              chắc chắn sẽ tiếp tục tin dùng trong thời gian tới."
            </p>
            <h4 className="testimonial-1-name">Trần Văn A</h4>
            <p className="testimonial-1-designation">Cần Thơ</p>
            <div className="testimonial-1-author-thumb">
              <img src="assets/images/resource/testimonial-2.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-1-block">
            <div className="testimonial-1-quote-icon">
              <i className="icon-18"></i>
            </div>
            <p className="testimonial-1-review-desc">
              "Trước đây, vườn cây của tôi thường xuyên bị sâu bệnh, nhưng từ
              khi dùng thuốc bảo vệ thực vật của công ty, vấn đề này đã được
              giải quyết triệt để. Sản phẩm an toàn, dễ sử dụng và mang lại hiệu
              quả cao. Nhờ đó, tiết kiệm được nhiều thời gian và công sức."
            </p>
            <h4 className="testimonial-1-name">Nguyễn Văn B</h4>
            <p className="testimonial-1-designation">An Giang</p>
            <div className="testimonial-1-author-thumb">
              <img src="assets/images/resource/testimonial-3.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="testimonial-1-block">
            <div className="testimonial-1-quote-icon">
              <i className="icon-18"></i>
            </div>
            <p className="testimonial-1-review-desc">
              "Không chỉ giúp cây trồng phát triển khỏe mạnh, sản phẩm của công
              ty còn thân thiện với môi trường. Tôi rất yên tâm khi sử dụng vì
              biết rằng mình đang bảo vệ cây cối mà không gây hại đến đất đai và
              nguồn nước. Đây thực sự là lựa chọn tuyệt vời."
            </p>
            <h4 className="testimonial-1-name">Nguyễn Thị A</h4>
            <p className="testimonial-1-designation">Tiền Giang</p>
            <div className="testimonial-1-author-thumb">
              <img src="assets/images/resource/testimonial-1.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
