import React from 'react'
import SidebarCard from './SidebarCard'

const content1=[
  {Date: 'April 2nd, 2026', Detail: 'Full Paper Submission'},
  {Date: 'May 15th, 2026', Detail: 'Acceptance Notification'},
  {Date: 'May 22nd, 2026', Detail: 'Early Bird Registration'},
  {Date: 'June 10th, 2026', Detail: 'Camera ready paper submission'},
  {Date: 'June 10th, 2026', Detail: 'Registration'},
  {Date: 'July 1st, 2nd & 3rd, 2026', Detail: 'Conference Date'},
];

const content2=[{Date: '', Detail: 'Best Paper Award Will be Given for Each track.'}];

const content3=[{Date: '', Detail: '231 days 23 hrs 03 mins 01 sec'}]

function Sidebar() {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <SidebarCard title='Important Deadlines' content={content1}/>
      <SidebarCard title='Announcements' content={content2}/>
      <SidebarCard title='Time left for the Conference' content={content3}/>
    </div>
  )
}

export default Sidebar
