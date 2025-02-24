
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Liên Hệ">
                <div>
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="section_heading mb_40">
                        <span className="section_heading_title_small">Liên hệ thông qua</span>
                        <h2 className="section_heading_title_big">Công ty TNHH Thương Mại XNK <br /> Anh Nguyễn An</h2>
                        </div>
                        <ul className="contact-info-1 d-flex flex-wrap mb_40">
                        <li>
                            <h4 className="fs_20 mb_10"><i className="icon-27 mr_10 fs_18"></i>Trụ sở chính</h4>
                            <p>069 Quốc Lộ 1A, phường Bình Trị Đông A, Q. Bình Tân, TP.HCM</p>
                        </li>
                        <li>
                            <h4 className="fs_20 mb_10"><i className="icon-28 mr_10 fs_18"></i>Phone</h4>
                            <p><Link href="tel:0798586677">0798.586.677</Link></p>
                        </li>
                        <li>
                            <h4 className="fs_20 mb_10"><i className="icon-29 mr_10 fs_15"></i>Email</h4>
                            <p><Link href="mailto:support@example.com">support@example.com</Link></p>
                        </li>
                        </ul>
                        <div className="row no-gutters">
                        <div className="col-lg-5">
                            <div className="form-alt form-alt3 with-shadow">
                            <form method="post" id="contact-form">
                                <div className="row">
                                <div className="form-group col-md-12">
                                    <input type="text" name="form_name" placeholder="Tên của bạn" required />
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" name="email" placeholder="Email của bạn" required />
                                </div>

                                <div className="form-group col-md-12">
                                    <input type="text" name="form_subject" placeholder="Tiêu đề" required />
                                </div>

                                <div className="form-group col-md-12">
                                    <textarea name="form_message" placeholder="Nội dung"></textarea>
                                </div>
                                <div className="form-group col-md-12">
                                    <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" />
                                    <button className="btn-1" type="submit" data-loading-text="Please wait...">Submit Now <i className="flaticon-right-arrow-1"></i><span></span></button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="map mb_30">
                            <iframe
                                title="Google Map"
                                src="https://maps.google.com/maps?q=1069+Qu%E1%BB%91c+L%E1%BB%99+1A%2C+ph%C6%B0%E1%BB%9Dng+B%C3%ACnh+Tr%E1%BB%8B+%C4%90%C3%B4ng+A%2C+Q.+B%C3%ACnh+T%C3%A2n%2C+TP.HCM&t=k&z=16&ie=UTF8&iwloc=&output=embed"
                                width="600" height="535" frameBorder="0" style={{ border: 0, width: '100%' }} allowFullScreen="" aria-hidden="false" tabIndex="0"
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}