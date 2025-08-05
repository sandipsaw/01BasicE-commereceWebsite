import React from 'react'
import Nav from './components/Nav'
import Mainroutes from './Routes/Mainroutes'

const App = () => {
  return (
    <div className='w-screen h-screen bg-gray-700 text-gray-900 font-semibold text-2xl '>
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App