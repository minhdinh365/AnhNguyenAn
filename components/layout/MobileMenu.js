"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="fal fa-times" />
        </div>
        <nav className="menu-box">
          <div style={{ marginBottom: 50 }}></div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li className={isActive.key == 1 ? "current" : ""}>
                  <Link href="/" onClick={handleMobileMenu}>
                    Trang chủ
                  </Link>
                </li>
                <li className={isActive.key == 2 ? "current" : ""}>
                  <Link href="/about-us" onClick={handleMobileMenu}>
                    Giới thiệu
                  </Link>
                </li>

                <li className={isActive.key == 5 ? "current" : ""}>
                  <Link href="/products" onClick={handleMobileMenu}>
                    Sản phẩm
                  </Link>
                </li>
                {/* <li
                  className={
                    isActive.key == 6 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#" onClick={handleMobileMenu}>
                    Sự kiện
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 6 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/blog" onClick={handleMobileMenu}>
                        Blog Grid
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-2" onClick={handleMobileMenu}>
                        Blog Standard
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details" onClick={handleMobileMenu}>
                        Blog Details
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(6)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li> */}
                <li className={isActive.key == 3 ? "current" : ""}>
                  <Link href="/events" onClick={handleMobileMenu}>
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/#">
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};

export default MobileMenu;
