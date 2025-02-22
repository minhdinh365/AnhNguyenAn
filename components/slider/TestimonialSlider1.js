"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 7000,
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
      slidesPerView: 1,
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
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
};
export default function TestimonialSlider1() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="swiper-container single-item-carousel"
      >
        <SwiperSlide className="swiper-slide">
          <div
            className="project-1-image"
            style={{
              backgroundImage: "url(assets/images/resource/hoi-cho-nong-san.jpg)",
            }}
          >
            <div className="project-1-block">
              <span className="section_heading_title_small">Sự kiện</span>
              <h2 className="section_heading_title_big fs_50 mb_20">
                Hội Chợ Nông Sản
              </h2>
              <p className="mb-0">
                Sự kiện thường niên quy tụ hàng trăm nhà nông Trưng bày các sản
                phẩm nông nghiệp chất lượng cao Cơ hội kết nối và tìm kiếm đối
                tác kinh doanh.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="project-1-image"
            style={{
              backgroundImage: "url(assets/images/resource/hoi-thao-canh-tac.jpg)",
            }}
          >
            <div className="project-1-block">
              <span className="section_heading_title_small">Sự kiện</span>
              <h2 className="section_heading_title_big fs_50 mb_20">
                Hội Thảo Canh Tác
              </h2>
              <p className="mb-0">
                Chuyên gia hướng dẫn kỹ thuật trồng trọt tiên tiến Cập nhật xu
                hướng nông nghiệp hữu cơ bền vững Giúp bà con nâng cao hiệu quả
                sản xuất nông sản.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="project-1-image"
            style={{
              backgroundImage: "url(assets/images/resource/ngay-hoi-giong-moi.jpg)",
            }}
          >
            <div className="project-1-block">
              <h2 className="section_heading_title_big fs_50 mb_20">
                Ngày Hội Giống Mới
              </h2>
              <p className="mb-0">
                Giới thiệu giống cây trồng năng suất cao, kháng bệnh Thử nghiệm
                thực tế và chia sẻ kinh nghiệm từ nhà nông Cung cấp thông tin về
                kỹ thuật canh tác hiện đại.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
