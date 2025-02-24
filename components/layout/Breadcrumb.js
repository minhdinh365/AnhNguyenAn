import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div className="page-title" style={{ backgroundImage: "url(assets/images/background/background-about.jpg)",objectFit: "fill" }}>
                <div className="auto-container">
                    <h1>{breadcrumbTitle}</h1>
                </div>
            </div>
        </>
    )
}
