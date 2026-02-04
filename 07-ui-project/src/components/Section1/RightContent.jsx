import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3  p-6 flex flex-nowrap gap-10 overflow-x-auto rounded-4xl'>
      {props.users.map((elem,idx)=>{
        return <RightCard key={idx} color={elem.color} img={elem.img}  id={idx} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
