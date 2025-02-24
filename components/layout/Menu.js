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
        <li>
          <Link href="/room-1">Sản Phẩm</Link>
        </li>
        <li>
          <Link href="/events">Tuyển dụng</Link>
        </li>
        {/* <li className="dropdown">
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
        </li> */}
        <li>
          <Link href="/contact">Liên Hệ</Link>
        </li>
      </ul>
    </>
  );
}
