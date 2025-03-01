import Link from "next/link"


export default function Features() {
    return (
        <>
        
        <section className="section-padding">
      <div className="gray-bg p_absolute l_0 b_0 r_0 h_340"></div>
      <div className="auto-container">
        <div className="section_heading text-center mb_60">
          <span className="section_heading_title_small">Kỹ Thuật Cây Trồng</span>
          <h2 className="section_heading_title_big">Giải Pháp Tối Ưu</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
              <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/sau-rieng.jpg" alt="" /></div>
              <h4 className="feature-1-title">Kỹ thuật trên cây <br/> Sầu riêng </h4>
              <p className="feature-1-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
              <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="#"><i className="icon-5"></i></Link></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
              <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/cam-sanh.jpg" alt="" /></div>
              <h4 className="feature-1-title">Kỹ thuật trên cây <br/> Cam sành</h4>
              <p className="feature-1-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
              <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="#"><i className="icon-5"></i></Link></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="feature-1-block text-center wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
              <div className="feature-1-image hvr-img-zoom-1"><img src="assets/images/resource/thanh-long.jpg" alt="" /></div>
              <h4 className="feature-1-title">Kỹ thuật trên cây <br/> Thanh Long</h4>
              <p className="feature-1-text">Amet minim mollit no duis sit enim <br /> aliqua dolor do amet officia.</p>
              <div className="feature-1-link"><Link className="feature-1-link-btn hvr-zoom-1 hvr-zoom-1-primary" href="#"><i className="icon-5"></i></Link></div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
