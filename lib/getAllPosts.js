export default async function GetAllPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=15",
        {
            next: {
                revalidate: 10,
            },
        }
    );

    if (!result.ok) {
        throw new Error("There was an Error fetching posts");
    }

    return result.json();
}