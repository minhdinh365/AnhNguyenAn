import Link from "next/link";
export default function Room() {
  return (
    <>
      <section className="section-padding">
        <div className="auto-container">
          <div className="section_heading text-center mb_55">
            <span className="section_heading_title_small">Mua Bán</span>
            <h2 className="section_heading_title_big">Sản Phẩm</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="room-1-block wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration=".8s"
              >
                <div className="room-1-image hvr-img-zoom-1">
                  <img src="assets/images/resource/palmyran.png" alt="" />
                </div>
                <div className="room-1-content">
                  <p className="room-1-meta-info">
                    <span className="theme-color">Thể tích:</span> 500ml
                  </p>
                  <h4 className="room-1-title mb_20">
                    <Link href="/room-details">Palmyran</Link>
                  </h4>
                  <p className="room-1-text mb_30">
                    Dưỡng bông, chống rụng, chống nứt, chống thối trái, bóng trái
                  </p>
                  <div className="link-btn">
                    <Link href="/room-details" className="btn-1 btn-alt">
                      Mua ngay <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="room-1-block wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration=".8s"
              >
                <div className="room-1-image hvr-img-zoom-1">
                  <img src="assets/images/resource/boron-vinaf24.png" alt="" />
                </div>
                <div className="room-1-content">
                  <p className="room-1-meta-info">
                    <span className="theme-color">Thể tích:</span> 500ml
                  </p>
                  <h4 className="room-1-title mb_20">
                    <Link href="/room-details">Boron vinaf24</Link>
                  </h4>
                  <p className="room-1-text mb_30">
                    Tăng sức sống cho hoa, giảm rụng hoa, sửa trái, cân bằng dinh dưỡng
                  </p>
                  <div className="link-btn">
                    <Link href="/room-details" className="btn-1 btn-alt">
                      Mua ngay <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="room-1-block wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration=".8s"
              >
                <div className="room-1-image hvr-img-zoom-1">
                  <img src="assets/images/resource/phospho-gel.png" alt="" />
                </div>
                <div className="room-1-content">
                  <p className="room-1-meta-info">
                    <span className="theme-color">Thể tích:</span>250ml
                  </p>
                  <h4 className="room-1-title mb_20">
                    <Link href="/room-details">Phospho gel</Link>
                  </h4>
                  <p className="room-1-text mb_30">
                    phân hóa mầm hoa, kích thích ra bông đồng loạt, tăng tỉ lệ đậu trái
                  </p>
                  <div className="link-btn">
                    <Link href="/room-details" className="btn-1 btn-alt">
                      Mua ngay <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="room-1-block wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration=".8s"
              >
                <div className="room-1-image hvr-img-zoom-1">
                  <img src="assets/images/resource/selika-kplus.png" alt="" />
                </div>
                <div className="room-1-content">
                  <p className="room-1-meta-info">
                    <span className="theme-color">Thể tích:</span>500ml
                  </p>
                  <h4 className="room-1-title mb_20">
                    <Link href="/room-details">Selika K+</Link>
                  </h4>
                  <p className="room-1-text mb_30">
                    Diệt nấm, sâu hại, vi khuẩn, tăng cường chịu hạn, mặn, nhiệt độ cao
                  </p>
                  <div className="link-btn">
                    <Link href="/room-details" className="btn-1 btn-alt">
                      Mua ngay <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="room-1-block wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration=".8s"
              >
                <div className="room-1-image hvr-img-zoom-1">
                  <img src="assets/images/resource/amino-forte.png" alt="" />
                </div>
                <div className="room-1-content">
                  <p className="room-1-meta-info">
                    <span className="theme-color">Thể tích:</span>500ml
                  </p>
                  <h4 className="room-1-title mb_20">
                    <Link href="/room-details">Amino forte</Link>
                  </h4>
                  <p className="room-1-text mb_30">
                    To trái, đâm chồi, bóng lá, tăng sức sống, đề kháng cây
                  </p>
                  <div className="link-btn">
                    <Link href="/room-details" className="btn-1 btn-alt">
                      Mua ngay <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
