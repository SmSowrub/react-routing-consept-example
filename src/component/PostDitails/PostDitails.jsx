import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDitails = () => {
    const PostDitails = useLoaderData();
    const {body, title, id}=PostDitails;

    const navigate =useNavigate();

    const handleNavigate=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>ID:{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleNavigate}> Go Back</button>
        </div>
    );
};

export default PostDitails;