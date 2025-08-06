import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Servicedetail = () => {
    const navigate = useNavigate()
    const params = useParams()
    return (
        <div className='p-2'>
            <h3 className='text-3xl'>More Services for id :{params.id}</h3>
            <h5 className='mt-1'>Choose us</h5>
            <button onClick={() => navigate('/service')} className='border text-white rounded px-1 bg-red-400 border-red-400 mt-1'>Go Back</button>
        </div>
    )
}

export default Servicedetail