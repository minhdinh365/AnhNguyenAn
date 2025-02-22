'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 70000000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}
export default function Banner() {
    return (
        <>
            <section className="banner-section style-three">
                <Swiper {...swiperOptions} className="banner-carousel">                    
                    <SwiperSlide className="slide-item p_relative">
                      <div className="swiper-slide">
                        <div className="banner-feature-image d-none d-lg-block" style={{backgroundImage: 'url(assets/images/main-slider/banner-3.jpg)'}}></div>
                        <div className="content-outer">
                          <div className="content-box">
                            <div className="inner">
                              <h4>Anh Nguyễn</h4>
                              <h2>
                              Chất lượng hàng đầu<br />
                              Giải pháp tối ưu<br />
                              Nâng cao giá trị nông sản!
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                      <div className="swiper-slide">
                        <div className="banner-feature-image d-none d-lg-block" style={{backgroundImage: 'url(assets/images/main-slider/banner-3.jpg)'}}></div>
                        <div className="content-outer">
                          <div className="content-box">
                            <div className="inner">
                              <h4>Anh Nguyễn</h4>
                              <h2>
                              Dinh dưỡng toàn diện<br />
                              Cây khỏe, trái ngọt<br />
                              Mùa màng bội thu!
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    )
}