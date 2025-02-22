import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { cormorant, dmSans } from '@/lib/font'
export const metadata = {
    title: 'Anh Nguyễn An',
    description: 'Công Ty TNHH Thương Mại XNK Nguyễn An',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
            <body>{children}</body>
        </html>
    )
}
