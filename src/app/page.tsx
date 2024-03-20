'use client'

import { useEffect, useState } from 'react';
import TimeElement from './components/time_element'
import { calculateRemainTime, useDateDiff } from './handler/time_handler';
import { getSettingsData } from './handler/config_handler';

const DATE_TIME_TRIP=(new Date(2024,3,23,14,0,0)).getTime();

const TRIP_NAME="BINH THUAN WEEKEND TRIP"

export default function Home() {
  const [remainSeconds,setRemainSeconds]=useState<number>(calculateRemainTime(DATE_TIME_TRIP)/1000);
  useEffect(()=>{
    const settings=getSettingsData();
    console.log(JSON.stringify(settings))
  },[])
  useEffect(()=>{
    const coundownTimer= setInterval(()=>{

      const newDiff=calculateRemainTime(DATE_TIME_TRIP)/1000
  
      setRemainSeconds(newDiff);
    },1000);
    return ()=>{

      clearInterval(coundownTimer);
    }
  },[]);

  const [days,hours,minutes,seconds]=useDateDiff(remainSeconds);
  
  return (

    <div className="w-full" >
      <div className=''
      // style={{backgroundImage:'url("/images/zoom_background.jpg")',}}
      >
        <img className='w-full absolute top-0 left-0' src={'/images/sparkling_background.jpg'} alt={''} />

        <div className='w-full absolute top-0 left-0 mt-60 flex justify-center'>
          <div className='flex flex-col items-center w-full mx-80 rounded-2xl bg-slate-300 bg-opacity-20  px-10 py-6 shadow-xl'>
            <h3 className='text-white font-thin text-6xl text-center'>{TRIP_NAME}</h3>
            <span className='text-white font-normal my-4'>
              Remains
            </span>
            <div className='flex justify-center'>
              <TimeElement field='Days' value={days}/>
              <TimeElement field='Hours' value={hours}/>
              <TimeElement field='Minutes' value={minutes}/>
              <TimeElement field='Seconds' value={seconds}/>

            </div>

          </div>

        </div>
      </div>

    </div>

  )
}
