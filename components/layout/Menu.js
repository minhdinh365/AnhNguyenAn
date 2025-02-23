import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      <ul className="navigation clearfix">
        <li>
          <Link href="/">Trang Chủ</Link>
        </li>
        <li>
          <Link href="/about-us">Giới Thiệu</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Sản Phẩm</Link>
          <ul>
            <li>
              <Link href="/room-1">Room Style 01</Link>
            </li>
            <li>
              <Link href="/room-2">Room Style 02</Link>
            </li>
            <li>
              <Link href="/room-details">Room Details</Link>
            </li>
            <li className="dropdown">
              <Link href="#">Giảm Giá</Link>
              <ul>
                <li>
                  <Link href="/packages">Sản Phẩm Giảm Giá</Link>
                </li>
                <li>
                  <Link href="/package-details">
                    Chi tiết sản phẩm giảm giá
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/events">Tuyển dụng</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Sự Kiện</Link>
          <ul>
            <li>
              <Link href="/blog">Blog Grid</Link>
            </li>
            <li>
              <Link href="/blog-2">Blog Standard</Link>
            </li>
            <li>
              <Link href="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Liên Hệ</Link>
        </li>
      </ul>
    </>
  );
}
