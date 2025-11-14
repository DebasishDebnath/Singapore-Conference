import React from 'react'

function SpeakerCard({imageSrc="", name="", description=""}) {
  return (
    <div className='flex flex-col rounded-3xl border border-gray-200 poppins-italic p-6 items-center gap-2 w-2/3'>
        <div><img src={imageSrc} alt={name}/></div>
        <div className='px-12 py-2 justify-center flex bg-blue-theme rounded-3xl text-white text-md font-medium w-fit mt-2'><h2>{name}</h2></div>
        <p className='text-md font-medium text-gray-700 p-2'>
            {description}
        </p>
      
    </div>
  )
}

export default SpeakerCard
