import React from 'react'
import sumit from '../assets/sumit.jpg'
const Card = (props) => {
    console.log(props.user);
    console.log(props.age);
    
  return (
    <div className='card'>
        <img src={props.img} alt="" />
        <h1>Hello {props.user}, {props.age}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      
    </div>
  )
}

export default Card
