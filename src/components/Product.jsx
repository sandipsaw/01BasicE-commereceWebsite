import React from 'react'
import { useNavigate, } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate()
  
  const navigateHandler =(name) =>{
    navigate(`/product/detail/${name}`)
  }
  return (
    <>
      <div className='m-10 text-3xl '>Products</div>
      <div className='flex gap-10 pl-25 flex-wrap'>

        <div className='mt-2 border w-[20%] p-2 rounded bg-gray-600 border-gray-600'>
        <h2 className='text-center'>Shoes</h2>
        <img src='https://tse1.mm.bing.net/th/id/OIP.v4mbTq6Q_8qVN5MYI8XOEgHaFG?pid=Api&rs=1&c=1&qlt=95&w=172&h=118' className="w-full p-2" />
        <p className='text-xl'>Find and download free graphic resources for product images, such as mockups,  banners and labels. Browse millions of photos, vectors and PSD files for commercial </p>
        <div className='flex justify-around mt-2 text-xl'><button className='border rounded px-1 bg-blue-600 text-white border-blue-600'>Buy Now</button>
        <button onClick={()=> navigateHandler('Shoes')} className='border rounded px-1 bg-green-600 text-white border-green-600'>Show More</button></div>
        </div>

        <div className='mt-2 border w-[20%] p-1 rounded bg-gray-600 border-gray-600'>
        <h2 className='text-center'>Camera</h2>
        <img src='https://tse1.mm.bing.net/th/id/OIP.lTmSRLPfVUJxz76w1rT8eQHaEX?pid=Api&rs=1&c=1&qlt=95&w=201&h=118' className="w-full p-2" />
        <p className='text-xl'>Find and download free graphic resources for product images, such as mockups,  banners and labels. Browse millions of photos, vectors and PSD files for commercial use</p>
        <div className='flex justify-around mt-2 text-xl'><button className='border rounded px-1 bg-blue-600 text-white border-blue-600'>Buy Now</button>
        <button onClick={() => navigateHandler('Camera')} className='border rounded px-1 bg-green-600 text-white border-green-600'>Show More</button></div>
        </div>

      <div className='mt-2 border w-[20%] p-1 rounded bg-gray-600 border-gray-600'>
        <h2 className='text-center'>Accounts</h2>
        <img src='https://tse1.mm.bing.net/th/id/OIP.NzW9GLJ9ij-PUn2BfqblYAHaE8?pid=Api&rs=1&c=1&qlt=95&w=165&h=110' className="w-full p-2 object-cover" />
        <p className='text-xl'>Find and download free graphic resources for product images, such as mockups,  banners and labels. Browse millions of photos, vectors and PSD files for commercial use</p>
        <div className='flex justify-around mt-2 text-xl'><button className='border rounded px-1 bg-blue-600 text-white border-blue-600'>Buy Now</button>
        <button onClick={()=>navigateHandler('Accounts')} className='border rounded px-1 bg-green-600 text-white border-green-600'>Show More</button></div>
      </div>
        <div className='mt-2 border w-[20%] p-2 rounded bg-gray-600 border-gray-600'>
        <h2 className='text-center'>Shoes</h2>
        <img src='https://tse1.mm.bing.net/th/id/OIP.v4mbTq6Q_8qVN5MYI8XOEgHaFG?pid=Api&rs=1&c=1&qlt=95&w=172&h=118' className="w-full p-2" />
        <p className='text-xl'>Find and download free graphic resources for product images, such as mockups,  banners and labels. Browse millions of photos, vectors and PSD files for commercial </p>
        <div className='flex justify-around mt-2 text-xl'><button className='border rounded px-1 bg-blue-600 text-white border-blue-600'>Buy Now</button>
        <button onClick={()=> navigateHandler('Shoes')} className='border rounded px-1 bg-green-600 text-white border-green-600'>Show More</button></div>
        </div>

        
      </div>
    </>
  )
}

export default Product