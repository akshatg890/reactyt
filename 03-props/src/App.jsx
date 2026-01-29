import React from 'react'
import Card from './components/Card'
import sumit from './assets/sumit.jpg'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Sumit" age={22} img={sumit} />
      <Card user="Vaishu" age={21} img="https://images.unsplash.com/photo-1768898795093-28b2aca93cb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Rahul" age={25} img="https://images.unsplash.com/photo-1768928969717-c39ca2cf6ed7?q=80&w=1183&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      
    </div>
  )
}

export default App
