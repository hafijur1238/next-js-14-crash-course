import Link from "next/link";

export default function Blog() {

    const blogs = [
        {
            id: 1,
            title: "Blog - 1",
            description: "Blog 1 Description",
        },
        {
            id: 2,
            title: "Blog - 2",
            description: "Blog 2 Description",
        },
    ];

    return (
        <main className="mt-10">
            <div>Blogs .......</div>
            <ul>
                {blogs.map((blog) => (<li className="mt-5" key={blog.id}><Link href={`/blog/${blog.id}`}>{blog.title}</Link></li>))}
            </ul>
        </main>
    );
}