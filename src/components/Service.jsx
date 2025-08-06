import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();
  const serviceHandler = (id) =>{
    navigate(`/service/detail/${id}`)
  }
  return (
    <div className=' ml-60 mt-4 mr-28 rounded text-center bg-gray-600 w-[60%] h-[70%] text-white pt-2 pb-4'>
     <h2 className='text-3xl text-gray-900'>Some Services</h2>

      <div className='flex flex-wrap gap-y-10 gap-x-15 justify-center mt-3 col-auto' >

        <div className='border w-[35%] rounded-[5%] border-gray-800 bg-gray-800'>
          <h1 className='text-xl mb-1 mt-2'>Fast Delivery</h1>
          <p className='text-lg'>Get your orders delivered within 2-3 days across India.</p>
          <button onClick={() => serviceHandler(1)} className='text-lg text-green-800 border border-blue-400 px-1 rounded bg-blue-400 mb-2'>See Detail</button>
        </div>
        

        <div className='border w-[35%] rounded-[5%] border-gray-800 bg-gray-800'>
          <h1 className='text-xl mb-1 mt-2'>24/7 Customer Support</h1>
          <p className='text-lg'>We are here to help you anytime, any day</p>
          <button onClick={() => serviceHandler(2)} className='text-lg text-green-800 border border-blue-400 px-1 rounded bg-blue-400 mb-2'>See Detail</button>
        </div>
        

        <div className='border w-[35%] rounded-[5%] border-gray-800 bg-gray-800'>
          <h1 className='text-xl mb-1 mt-2'>Easy Returns</h1>
          <p className='text-lg'>Not satisfied? Return the product within 7 days.</p>
          <button onClick={() => serviceHandler(3)} className='text-lg text-green-800 border border-blue-400 px-1 rounded bg-blue-400 mb-2'>See Detail</button>
        </div>

        <div className='border w-[35%] rounded-[5%] border-gray-800 bg-gray-800'>
          <h1 className='text-xl mb-1 mt-2'>Secure Payments</h1>
          <p className='text-lg'>All transactions are encrypted and safe.</p>
          <button onClick={() => serviceHandler(4)} className='text-lg text-green-800 border border-blue-400 px-1 rounded bg-blue-400 mb-2'>See Detail</button>
        </div>

        <div className='border w-[35%] rounded-[5%] border-gray-800 bg-gray-800'>
          <h1 className='text-xl mb-1 mt-2'>Quality Products</h1>
          <p className='text-lg'>We ensure all products are top-quality and authentic.</p>
          <button onClick={() => serviceHandler(5)} className='text-lg text-green-800 border border-blue-400 px-1 rounded bg-blue-400 mb-2'>See Detail</button>
        </div>

        <div className='border w-[35%] rounded-[5%] border-gray-800 bg-gray-800'>
          <h1 className='text-xl mb-1 mt-2'>Multiple Payment Options</h1>
          <p className='text-lg'>Pay using UPI, Card, Net Banking, or Cash on Delivery.</p>
          <button onClick={() => serviceHandler(6)}
           className='text-lg text-green-800 border border-blue-400 px-1 rounded bg-blue-400 mb-2'>See Detail</button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Service