import Link from "next/link"

export const metadata = {
    title: "About Us",
    description: "This is a blog about Page",
};

export default function Aboutlayout({ children }) {
    return (
        <div>
            <nav className="mt-6 mb-6">
                <ul className="flex gap-3">
                    <li> <Link href="/about/mission">Mission</Link> </li>
                    <li> <Link href="/about/vision">Vision</Link> </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}
