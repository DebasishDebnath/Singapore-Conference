import React, { useState, useEffect } from 'react'
import SidebarCard from './SidebarCard'

const content1=[
  {Date: 'April 20th, 2026', Detail: 'Full Paper Submission Deadline'},
  {Date: 'May 5th, 2026', Detail: 'Notification of Acceptance'},
  // {Date: 'May 15th - 22nd, 2026', Detail: 'Early Bird Registration'},
  // {Date: 'May 10th, 2026', Detail: 'Camera Ready Paper Submission'},
  {Date: 'May 15th, 2026', Detail: 'Author Registration Deadline'},
  {Date: 'June 9th, 10th  & 11th, 2026', Detail: 'Conference Dates'},
];

const content2=[{Date: '', Detail: 'Best Paper Award Will be Given for Each track.'}];

function Sidebar() {
  const [timeLeft, setTimeLeft] = useState("00 days 00 hrs 00 mins 00 sec");

  useEffect(() => {
    const targetDate = new Date("June 9, 2026 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft("00 days 00 hrs 00 mins 00 sec");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days < 10 ? `0${days}` : days} days ${hours < 10 ? `0${hours}` : hours} hrs ${minutes < 10 ? `0${minutes}` : minutes} mins ${seconds < 10 ? `0${seconds}` : seconds} sec`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const content3 = [{ Date: "", Detail: timeLeft }];

  return (
    <div className='flex flex-col gap-10 w-full'>
      <SidebarCard title='Important Deadlines' content={content1}/>
      <SidebarCard title='Announcements' content={content2}/>
      <SidebarCard title='Time left for the Conference' content={content3}/>
    </div>
  )
}

export default Sidebar
