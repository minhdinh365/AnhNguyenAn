import Link from "next/link";
import { PRODUCTS } from "@/utils/constant";
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
            {PRODUCTS.map((room, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="room-1-block wow fadeInUp"
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
                        Mua ngay <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
