import Comments from '@/app/components/comments';
import GetPostComment from '@/lib/getAllPostComment';
import GetAllPosts from '@/lib/getAllPosts';
import GetPost from '@/lib/getPost';
import { Suspense } from 'react';


export async function generateMetadata({ params }) {
    const { id } = params;
    const post = await GetPost(id);
    return {
        title: post.title,
        description: post.body,
    };
}


export default async function PostPage({ params }) {

    const { id } = params;
    const postPromise = GetPost(id);
    const commentsPromise = GetPostComment(id);

    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    const post = await postPromise;

    return (
        <div className="mt-6">
            <h2 className='text-blue-600'>{post.title}</h2>
            <p className='mt-4'>{post.body}</p>
            <hr />
            <Suspense fallback="<h1>Loading Comments ...</h1>">
                <Comments promise={commentsPromise} />
            </Suspense>

        </div>
    )
}

export async function generateStaticParams() {
    const posts = await GetAllPosts();

    return posts.map((post) => ({
        id: post.id.toString(),
    }))
}
