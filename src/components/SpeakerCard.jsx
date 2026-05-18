import React from 'react'

function SpeakerCard({imageSrc="", name="", description=""}) {
  return (
    <div className='border border-gray-300 p-4 flex flex-col gap-2 items-center rounded-3xl justify-start shadow-md'>
        <div><img src={imageSrc} alt={name} className='h-56 w-56 rounded-2xl object-cover'/></div>
        <div className='px-12 py-2 justify-center flex bg-blue-theme rounded-3xl text-white text-md font-medium w-fit mt-2'><h2 className='text-center'>{name}</h2></div>
        <p className='text-md font-medium text-center text-gray-700 p-2'>
            {description}
        </p>
      
    </div>
  )
}

export default SpeakerCard
