import React from 'react';
import './style.css';
import BlogPost from '../../components/blogPost';
import Sidebar from '../../components/Sidebar';

const Post = (props) => {

    console.log(props);
    return (
        <section className="container">
            <BlogPost {...props} />
            <Sidebar />
        </section>
    );
}
export default Post;