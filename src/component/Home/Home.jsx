import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Frist from '../Frist/Frist';
import './Home.css'
const Home = () => {
    const navigate =useNavigation();
 
    return (
        <div>
           
            <Header></Header>
            <div>{navigate.state=== 'loading' ? 'loading....' : ''}</div>
            
            <Outlet></Outlet>
        </div>
    );

    };
export default Home;