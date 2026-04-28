// =========== 2nd way of data fetching ========== //

// const getPosts = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json();
// }



// =========== 3rd way of data fetching ========== //

// const getPosts = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json();
//     }
//     catch (err) {
//         throw new Error('Failed to fetch posts')
//     }
// }



// =========== 4th way of data fetching ========== //

const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    return res.json();
}



const PostsPage = async () => {
    // =========== 1st way of data fetching ========== //

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    const posts = await getPosts();

    return (
        <div>
            <h2 className="text-2xl text-center">{posts.length} Posts are coming soon</h2>
        </div>
    );
};

export default PostsPage;