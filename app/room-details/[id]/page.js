"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { PRODUCT_DETAILS } from "../../../utils/constant";
export default function RoomDetails({ params }) {
  const { id } = params;

  const product = PRODUCT_DETAILS.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <Layout headerStyle={2} footerStyle={1}>
        <h2 className="mb_40" style={{ textAlign: "center" }}>
          Không Tìm Thấy Sản Phẩm
        </h2>
      </Layout>
    );
  }

  return (
    <>
      <Layout headerStyle={2} footerStyle={1}>
        <div>
          <section className="section-padding">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 pe-lg-35">
                  <div className="single-post">
                    <span className="section_heading_title_small">
                      Liên hệ mua ngay
                    </span>
                    <h2 className="mb_40">{product.name}</h2>
                    <p
                      className="mb_20"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></p>
                    <div className="mb_60">
                      <img src={product.image} alt="" />
                    </div>
                    <h3 className="fs_40 mb_30">Thành phần chính:</h3>
                    <p
                      className="mb_20"
                      dangerouslySetInnerHTML={{
                        __html: product.items.join(" "),
                      }}
                    ></p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="widget mb_40 gray-bg p_40">
                    <div className="booking-form-3">
                      <form className="hotel-booking-form-1-form d-block">
                        <div className="form-group">
                          <h3 className="fs_40 mb_30">Công dụng:</h3>
                          <ul className="list-2 mb_70">
                            {product.skills.map((itemName, index) => (
                              <li key={index}>
                                <i className="icon-23"></i>
                                {itemName}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="form-group">
                          <h3 className="fs_40 mb_30">Hướng dẫn sử dụng:</h3>
                          <ul className="list-2 mb_70">
                            {product.notes.map((note, index) => (
                              <li key={index}>
                                <i className="icon-23"></i>
                                {note}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="form-group mb-0">
                          <Link href="/contact" className="btn-1">
                            Mua ngay<span></span>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
