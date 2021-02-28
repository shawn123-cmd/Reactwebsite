import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/laptop.png';
import Common from './Common';

const Home =()=>{
    return(
        <>
       <Common
          name='Grow Your Bussiness With' 
        imgsrc={web} 
        visit='/services' 
        btname='Get Started'
       />
        </>
    );
};
export default Home;