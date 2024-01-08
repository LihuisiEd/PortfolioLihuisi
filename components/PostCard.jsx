'use client'

export default function PostCard({ post }) {
    return (
        <div>

                <h3>{post.title}</h3>
                <p>{post.body}</p>
            <button className="rounded-lg bg-purple-600 px-4 py-2" onClick={() => {
                alert('click funcionando')
            }}>CLick me!</button>
        </div>
    )
}