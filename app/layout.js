import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/style.css";
// import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { cormorant, dmSans } from "@/lib/font";
export const metadata = {
  title: "Anh Nguyễn An",
  description: "Công Ty TNHH Thương Mại XNK Nguyễn An",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        {/* <meta
          name="google-site-verification"
          content="pNlabxxd4V_pwX3sNj1nEVAHR96Yi_2TMttiH6HFR_c"
        /> */}
        <meta name="google-site-verification" content="vGxYKAt_Ni_-ao5YMJLZFHwzR3N2wZH7zflOZ5sLN0Y" />
      </head>
      <body>{children}</body>
    </html>
  );
}
