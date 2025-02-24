import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { RECRUIT } from "@/utils/constant";
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Tuyển Dụng">
        <div>
          <section className="section-padding">
            <div className="auto-container">
              <div className="row">
                {/* Repeat this block for each event */}
                {RECRUIT.map((item, index) => (
                  <div key={index} className="col-lg-12">
                    <div
                      className="event-1-block align-items-center d-flex wow fadeInLeft"
                      data-wow-delay=".2s"
                      data-wow-duration=".8s"
                    >
                      <div className="event-1-image">
                        <Link href="/contact">
                          <img
                            src={item.image}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="event-1-bottom-content">
                        <h4 className="event-1-title mb_5">
                          <Link href="/contact">
                            {item.jobName}
                          </Link>
                        </h4>
                        <p className="event-1-meta-info mb_15">
                          {item.address}
                        </p>
                        <p>
                          {item.requirements}
                        </p>
                        <div className="link-btn">
                          <Link href="/contact" className="btn-1 btn-alt">
                            Liên hệ ngay<span></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* End of event block */}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
