import React from 'react'
import Background from '../assets/images/cars.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 bg-black bg-opacity-75 text-white rounded'>Welcome to your car Inventory! To view, add, update your cars, click the inventory tab!</h3>
        </div>
    </div>
  )
}

export default Home