import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const Posts=useLoaderData()
    console.log(Posts);
    return (
        <div>
            {
                Posts.map(postData =><Post key={postData.id} postData={postData}></Post>)
            }
        </div>
    );
};

export default Posts;