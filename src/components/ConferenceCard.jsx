import React from 'react'
import image1 from '../assets/chatgptBg.png'

function ConferenceCard({imageSrc="", title="", trackChair=[], researchTopic=[]}) {
  return (
    <div className="flex flex-col rounded-3xl border border-gray-200 w-fit poppins-italic">
      <div className="rounded-t-2xl">
        <img src={image1} alt="Conference Banner" />
      </div>
      <div className="p-6 text-xs flex flex-col gap-10">
        <h1 className='text-2xl text-[#6E6E6E] font-bold poppins-italic'>{title} </h1>
        <div className='flex flex-col gap-3'>
            <h2 className='text-xl text-[#4A7BFF] font-bold poppins-italic pb-2'>Track Chair</h2>
            {trackChair.map((chair, index) => (
                <div key={index} className='text-sm text-[#102768] font-bold'> {chair}</div>
            ))}
        </div>
        <div className='flex flex-col gap-3'>
            <h2 className='text-xl text-[#4A7BFF] font-bold poppins-italic pb-2'>Research Topic</h2>
            {researchTopic.map((chair, index) => (
                <div key={index} className='text-sm text-[#102768] font-medium'> {chair}</div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default ConferenceCard
