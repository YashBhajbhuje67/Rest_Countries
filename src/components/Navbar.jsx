import React from 'react'

const Navbar = () => {
  return (
    <div className='border px-10 py-4 flex justify-between'>
      <div className='font-bold font-xl'>Where in the world?</div>
      <div className=' flex gap-2'>
        <img src='' alt='image of dark'/>
        <div>Dark Mode</div>
      </div>
    </div>
  )
}

export default Navbar