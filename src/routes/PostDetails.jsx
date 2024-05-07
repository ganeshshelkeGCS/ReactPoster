import {useLoaderData, Link} from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './PostDetails.module.css';

function PostDetails() {

    const post = useLoaderData();

    if(!post) {
        return (
            <Modal>
                <main className={classes.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the request post could not be found.</p>
                    <p>
                        <Link to="..">
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <main className={classes.details}>
                <p className={classes.author}>{post.author}</p>
                <p classname={classes.text}>{post.text}</p>
            </main>
        </Modal>
    );
}

export default PostDetails;

export async function loader({params}) {
    const response = fetch('http://localhost:8080/posts/' + params.id);
    const resData = await response.json();
    return resData.posts;
}

