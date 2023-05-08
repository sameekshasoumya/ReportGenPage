import React, { useState } from 'react';
import imgByDonor from './OIP.jpg';
import imgByAgent from './OIP.jpg';
import './Home.css';

const Home = () => {

  const [Block1,setBlock1] = useState("1. This block contains the first part of data flow, like when the donor placed the pickup order");
  const Block2 = "2. This is the image uploaded by donor(initial state) :";
  const Block4 = "2. This is the image uploaded by agent(final state) :";
  const [Block3,setBlock3] = useState("3. This block can contain when (date) agent picked up the item");

  return (
    <div className='body'>
        <div className='b1'>
        <div
          className='block'>
        {Block1}
        </div>
        </div>
        
        <div className='b1'>
        <div className='block'>
            {Block2}
            <br></br>
            <img src={imgByDonor}></img></div>
        </div>
       <div className='b1'>
       <div
          className='block'
        >
           {Block3}
        </div>
       </div>

       <div className='b1'>
        <div
          className='block'>
        {Block4}
        <br></br>
        <img src={imgByAgent}></img>
        </div>
        </div>
    </div>
  );
}

export default Home;
