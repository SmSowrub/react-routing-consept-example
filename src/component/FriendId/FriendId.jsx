import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendId = () => {
    const friends =useLoaderData();
    const {name,id,phone}=friends
    console.log(friends);
    return (
        <div>
            <h3> Id : {id}</h3>
            <p>Name : {name}</p>
            <small>{phone}</small>
        </div>
    );
};

export default FriendId;