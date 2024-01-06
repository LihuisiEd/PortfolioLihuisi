import PostCard from "@/components/PostCard";
async function loadPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    return data;
}

async function Posts() {
    const posts = await loadPosts();

    return (
        <div>
            {posts.map((post) =>(
                <PostCard post={post} key={post.id}></PostCard>
            ))}

        </div>
        
    )
}

export default Posts;