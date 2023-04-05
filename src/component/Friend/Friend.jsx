import React from 'react';
import './Friends.css'
import { Link } from 'react-router-dom';
const Friend = ({allFriends}) => {
    const {name, email, phone, id}=allFriends
    console.log(allFriends);
    return (
        <div className='datas'>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
            <small>Phone : {phone}</small><br></br>
            <Link to={`/friend/${id}`}>Show details</Link>
        </div>
    );
};

export default Friend;