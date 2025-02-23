import Link from "next/link";
export default function About() {
  return (
    <>
      <section className="section-padding gray-bg pt-0">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-1-image-wrap mb_30 p_relative">
                <div
                  className="about-1-shape-1"
                  data-parallax='{"y": -50}'
                ></div>
                <div className="about-1-image-1 hvr-img-zoom-1">
                  <img src="assets/images/resource/about-us.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="section_heading mb_20">
                <span className="section_heading_title_small">
                  Về Chúng tôi
                </span>
                <h2 className="section_heading_title_big">
                Công Ty TNHH<br />  Thương Mại XNK <br /> Anh Nguyễn An
                </h2>
              </div>
              <p className="aboout-1-desc mb_30">
                Chúng tôi tự hào là
                một trong những đơn vị dẫn đầu trong lĩnh vực sản xuất và cung
                cấp các sản phẩm phân bón hữu cơ sinh học tại Việt Nam. Với sứ
                mệnh mang lại giải pháp nông nghiệp bền vững và thân thiện với
                môi trường, Anh Nguyễn An không ngừng nghiên cứu và phát triển
                những sản phẩm phân bón chất lượng cao, đáp ứng nhu cầu đa dạng
                của bà con nông dân trên toàn quốc. Chúng tôi cam kết đồng hành
                cùng khách hàng trên hành trình xây dựng nền nông nghiệp xanh,
                hiệu quả và bền vững.
              </p>
              <div className="about-1-btn mb_30">
                <Link href="/about" className="btn-1">
                  Xem chi tiết<span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
