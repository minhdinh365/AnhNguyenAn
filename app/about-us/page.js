"use client";
import TestimonialSlider2 from "@/components/slider/TestimonialSlider2";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Về Chúng Tôi"
        hiddenFooter={true}
      >
        <section className="section-padding">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section_heading mb_20">
                  <span className="section_heading_title_small">
                    Về Anh Nguyên An
                  </span>
                  <h2 className="section_heading_title_big">
                    Tiên Phong Trong Nông Nghiệp Bền Vững
                  </h2>
                </div>
                <p className="aboout-1-desc mb_30">
                  Chúng tôi tự hào là một trong những đơn vị tiên phong trong
                  lĩnh vực nghiên cứu, sản xuất và cung cấp các sản phẩm phân
                  bón hữu cơ sinh học tại Việt Nam. Với nhiều năm kinh nghiệm và
                  đội ngũ chuyên gia giàu tâm huyết, chúng tôi luôn đặt chất
                  lượng và sự an toàn lên hàng đầu, mang đến cho bà con nông dân
                  những giải pháp dinh dưỡng tối ưu cho cây trồng.
                  <br />
                  Sứ mệnh của chúng tôi là góp phần xây dựng một nền nông nghiệp
                  bền vững, thân thiện với môi trường và mang lại giá trị kinh
                  tế cao cho người nông dân. Để đạt được điều đó, chúng tôi
                  không ngừng đầu tư vào nghiên cứu, ứng dụng công nghệ tiên
                  tiến và cải tiến quy trình sản xuất nhằm tạo ra những sản phẩm
                  phân bón chất lượng cao, đáp ứng đầy đủ nhu cầu đa dạng của
                  từng loại cây trồng và điều kiện canh tác khác nhau.
                  <br />
                  Chúng tôi cam kết đồng hành cùng bà con nông dân trên khắp cả
                  nước, không chỉ cung cấp sản phẩm mà còn hỗ trợ kỹ thuật, tư
                  vấn giải pháp canh tác hiệu quả nhằm nâng cao năng suất và
                  chất lượng nông sản. Với tầm nhìn dài hạn, chúng tôi tin rằng
                  sự phát triển của doanh nghiệp phải song hành với lợi ích của
                  khách hàng, cộng đồng và hệ sinh thái nông nghiệp.
                  <br />
                  Hãy cùng chúng tôi xây dựng một nền nông nghiệp xanh – bền
                  vững – hiệu quả, góp phần bảo vệ môi trường và tạo ra giá trị
                  lâu dài cho thế hệ mai sau!
                </p>
              </div>
              <div className="col-lg-6 ps-lg-5">
                <div className="about-2-image-wrap mb_30 p_relative">
                  <div className="about-2-shape-1">
                    <img src="assets/images/shape/pattern-1.png" alt="" />
                  </div>
                  <div className="about-2-image-1" data-parallax='{"y": -20}'>
                    <img src="assets/images/resource/cam-about.jpg" alt="" />
                  </div>
                  <div className="about-2-image-2" data-parallax='{"y": 20}'>
                    <img src="assets/images/resource/down-about.jpg" alt="" />
                  </div>
                  <div className="about-2-video-area">
                    <div className="about-2-video-btn">
                      <div className="video-btn">
                        <VideoPopup />
                      </div>
                    </div>
                    <p className="about-2-video-title">
                      Xem Video <br /> Về Chúng Tôi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-4">
                <div className="section_heading mb_20">
                  <span className="section_heading_title_small">
                    22/01/2025
                  </span>
                  <h2 className="section_heading_title_big">
                    Cảm Nghĩ
                    <br /> Khách Hàng
                  </h2>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="testimonial-1-block-wrap">
                  <div className="testimonial-1-shape-1">
                    <img src="assets/images/shape/pattern-1.png" alt="" />
                  </div>
                  <div className="content-box">
                    {/*Theme Carousel*/}
                    <TestimonialSlider2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
