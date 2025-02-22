import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
      <div className="footer-1-middle">
          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex-center">
              <div className="contact-widget-1 mb_30">
                <div className="footer-widget-title"><h4>Liên Hệ Ngay</h4></div>
                <ul className="contact-widget-1-list">
                  <li><span>Địa chỉ:</span> 1069 Quốc Lộ 1A, phường Bình Trị Đông A, Q. Bình Tân, TP.HCM</li>
                  <li><span>Phone:</span><Link href="tel:0798586677">0798.586.677</Link></li>
                </ul>
                <ul className="footer-social-icon d-flex align-items-center">
                  <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></Link></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </footer>

        </>
    )
}
