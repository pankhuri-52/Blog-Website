import React from 'react';
import './style.css';
import Card from '../UI/Card';

const BlogPost = (props) => {
    return (
           <div className="blogPostContainer">
               <Card>
                   <div className="blogHeader">
                        <span className="blogCategory">Featured</span>
                        <h1 className="postTitle">Fitness Mantra to Live Fit Life</h1>
                        <span className="postedBy">posted on July 21,2016 by Sora Blogging Tips</span>
                   </div>
                   <div className="postImageContainer">
                     <img src={require("../../blogPostImages/memories-from.jpg")} alt="post Image" />
                   </div>
               </Card>
           </div>
    );
}
export default BlogPost;