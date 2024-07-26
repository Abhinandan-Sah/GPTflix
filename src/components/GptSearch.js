import React from 'react'

const GptSearch = () => {
  return (
    <div className='bg-Login-backgroundImage bg-cover bg-center h-screen text-slate-50    flex justify-center   pt-32'>
      <form className='w-[80%] sm:w-3/4 md:w-3/4 lg-[60%] xl:w-1/2 h-10 grid grid-cols-12'>
        <input type='text' className='p-4 m-2 col-span-9 placeholder-gray-700 text-black' placeholder='What would you like to watch...?' />
        <button className='col-span-3 m-2 py-2  bg-red-700 rounded-lg'>Search</button>
      </form>
    </div>
  )
}

export default GptSearch