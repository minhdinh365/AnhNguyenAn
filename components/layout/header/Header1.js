import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header header-style-one ${scroll ? "fixed-header" : ""}`}>
                
                <div className="header-upper">
                    <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                        <div className="logo-box">
                            <div className="logo" style={{ width: '300px' }}>
                                <Link href="/">
                                    <img className="img-logo" src="/assets/images/logo.png" alt="" />
                                </Link>
                                <span className="logo-text">Anh Nguyễn</span>
                                <p className="hotline-head">Hotline: 0798.586.677</p>
                            </div>
                        </div>
                        <div className="middle-column">
                            <div className="nav-outer">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <img src="assets/images/icons/icon-bar-2.png" alt="" />
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <Menu />
                            </div>
                            </nav>
                            </div>
                        </div>
                        <div className="right-column d-flex align-items-center">
                            <button type="button" className="theme-btn search-toggler">
                            <li className="search-box-outer search-toggler" onClick={handlePopup}><i className="icon-1"></i></li>
                            </button>
                            <div className="header-link-btn">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Header Upper */}
                
                {/* End Header Upper*/}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="header-upper">
                        <div className="auto-container">
                        <div className="inner-container d-flex align-items-center justify-content-between">
                            {/* Logo */}
                            <div className="logo-box">
                            <div className="logo" style={{ width: '300px' }}>
                                <Link href="/">
                                    <img className="img-logo" src="assets/images/logo.png" alt="" />
                                </Link>
                                <span className="logo-text">Anh Nguyễn</span>
                                <p style={{paddingLeft: 10}}>Hotline: 0798.586.677</p>
                            </div>
                            </div>
                            <div className="middle-column">
                            {/* Nav Box */}
                            <div className="nav-outer">
                                {/* Mobile Navigation Toggler */}
                                <div className="mobile-nav-toggler">
                                <img src="assets/images/icons/icon-bar-2.png" alt="" />
                                </div>

                                {/* Main Menu */}
                                <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                                </nav>
                            </div>
                            </div>
                            <div className="right-column d-flex align-items-center">
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                {/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
        </>
    )
}
