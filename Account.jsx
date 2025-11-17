import { useState } from 'react'
export default function Account() {

    const [selectedTab, setSelectedTab] = useState(0);

    const tabs = ["PURCHASES", "NOTIFICATIONS", "PAYMENT METHOD", "PROFILE", "SETTINGS"]
  return (
    <div className="mt-22 p-5">

      <div className="flex flex-col px-20">
        <ul className="font-light text-sm flex gap-8 border-b border-gray-300 pb-2">
          {tabs.map((tab, index) => (
            <li onClick={()=> setSelectedTab(index)} className={`tab p-0.5 px-2 ${selectedTab === index ? "bg-black text-white" : "bg-white/90 text-black"}`}>{tab}</li>
          ))}
        </ul>

        <div className=''>
            
        </div>
      </div>
    </div>
  )
}