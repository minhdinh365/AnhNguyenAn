import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { PRODUCTS } from "../../utils/constant";
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Chúng Tôi Có">
        <div>
          <section className="section-padding">
            <div className="auto-container">
              <div className="row">
                {PRODUCTS.map((room, index) => (
                  <div key={index} className={`col-lg-4 col-md-6`}>
                    <div
                      className={`room-1-block wow fadeInUp`}
                      data-wow-delay=".2s"
                      data-wow-duration={room.animationDuration}
                    >
                      <div className="room-1-image hvr-img-zoom-1">
                        <img src={room.imageSrc} alt="" />
                      </div>
                      <div className="room-1-content">
                        <p className="room-1-meta-info">
                          <span className="theme-color">{room.net}</span>
                          {room.weight}
                        </p>
                        <h4 className="room-1-title mb_20">
                          <Link href={`/product-details/${room.id}`}>
                            {room.title}
                          </Link>
                        </h4>
                        <p className="room-1-text mb_30">{room.description}</p>
                        <div className="link-btn">
                          <Link
                            href={`/product-details/${room.id}`}
                            className="btn-1 btn-alt"
                          >
                            Chi Tiết<span></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
