import React from 'react'

function SpeakerCard({imageSrc="", name="", description=""}) {
  return (
    <div className='flex flex-col rounded-3xl border-2 border-gray-200 poppins-italic p-6 items-center gap-4'>
        <div><img src={imageSrc} alt={name}/></div>
        <div className='px-12 py-2 justify-center flex bg-[#102768] rounded-3xl text-white text-md font-medium w-fit'><h2>{name}</h2></div>
        <p className='text-md'>
            {description}
        </p>
      
    </div>
  )
}

export default SpeakerCard
