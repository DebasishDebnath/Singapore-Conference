import React from 'react'
import Heading from '../components/Heading.jsx'
import SidebarCard from '../components/SidebarCard.jsx'

const content1=[
  {Date: 'September 15th 2024', Detail: 'Paper Submission Deadline'},
  {Date: 'September 30th 2024', Detail: 'Notification of Acceptance'},
  {Date: 'October 15th 2024', Detail: 'Camera Ready Submission'},
  {Date: 'November 1st 2024', Detail: 'Early Bird Registration Deadline'},
  {Date: 'November 15th 2024', Detail: 'Conference Dates: 20th-22nd November 2024'},
];

function Home() {
  return (
    <div>
      {/* <Heading title1='Welcome to' title2='SENSE-SG'/> */}
      {/* <SidebarCard title='Important Deadlines' content={content1}/> */}
      
    </div>
  )
}

export default Home
