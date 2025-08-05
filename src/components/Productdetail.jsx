import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Productdetail = () => {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params);
    return (
        <div className='m-15'>
            <h3 className='text-3xl'>{params.name}</h3>
            <h5 className='mt-1'>Product detail</h5>
            <button onClick={() => navigate(-1)} className='border text-white rounded px-1 bg-red-400 border-red-400 mt-1'>Go Back</button>
        </div>
    )
}

export default Productdetail