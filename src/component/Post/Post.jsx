import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({postData}) => {
    const { id, body,title}= postData;

    const navigate =useNavigate();
    
    const handleNavigate=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div>
            <h5>Id : {id}</h5>
            <p>Name : {title}</p>
            <Link to={`/post/${id}`}>Post Ditails</Link>
            {/* <Link to={`/post/${id}`}><button>Post Ditails</button></Link> //another sestem link with */}
            <button onClick={handleNavigate}>Post Ditails</button>
        </div>
    );
};

export default Post;