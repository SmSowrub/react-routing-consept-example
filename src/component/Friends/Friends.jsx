import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <h3>Show all friends : {data.length} </h3>
            {
                data.map(allFriends =><Friend key={allFriends.id} allFriends={allFriends}></Friend> )
            }
        </div>
    );
};

export default Friends;