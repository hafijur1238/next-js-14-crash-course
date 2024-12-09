import GetAllPosts from '@/lib/getAllPosts';
import Link from 'next/link';


export default async function Posts() {

    const posts = await GetAllPosts();
    console.log(posts);

    return (
        <div className='mt-6'>
            <h1>All Posts</h1>

            <ul>
                {posts.map(post => (<li key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}
