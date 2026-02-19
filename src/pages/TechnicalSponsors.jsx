import React from 'react'
import Heading from '../components/Heading'
import SponsorCard from '../components/SponsorCard'

const sponsorsData = [
  { imgSrc: "/c2iot.avif", title: "IEM Centre of Excellence for Cloud Computing & IoT" },
];

function TechnicalSponsors() {
  return (
     <div className="max-w-7xl mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 md:items-start items-center w-full">
      <Heading title1="Technical" title2="Sponsors" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sponsorsData.map((sponsor, index) => (
          <SponsorCard
            key={index}
            imgSrc={sponsor.imgSrc}
            title={sponsor.title}
          />
        ))}
      </div>
    </div>
  )
}

export default TechnicalSponsors
