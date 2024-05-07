import classes from './PostList.module.css';
import {useLoaderData} from 'react-router-dom';

import Post from './Post';

function PostList() {
    const posts = useLoaderData();
    return (
        <>
            {
                posts.length > 0 && (
                    <ul className={classes.post}>
                        {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                        ))}
                    </ul>
                )}

            {
                posts.length === 0 && (
                    <div style={{ textAlign: 'center', color: 'black' }}>
                        <h2>There are no Posts yet.</h2>
                        <p>Start adding some</p>
                    </div>
                )}
        </>
    );
}

export default PostList;