import { useState } from 'react'
import { ReceiptText,CaptionsOff,CreditCard } from 'lucide-react';
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
        <div className='flex-center flex-col font-light '>
          {selectedTab === 0 &&
            <div className='mt-20 flex flex-col gap-4'>
              <h1 className='font-zara'>ONLINE</h1>
              <ReceiptText size={25} strokeWidth={1} />
              <p>YOU HAVE NOT PLACED ANY ORDERS YET</p>
            </div>
          }
          {selectedTab === 1 &&
            <div className='mt-20 flex flex-col gap-4'>
              <CaptionsOff size={25} strokeWidth={1} />
              <h1 className='font-zara'>NO NOTIFICATIONS</h1>
              <p>YOU HAVE NOT PLACED ANY ORDERS YET</p>
            </div>
          }
          {selectedTab === 2 &&
            <div className='mt-20 flex flex-col gap-4'>
              <CreditCard size={25} strokeWidth={1} />
              <p>YOU HAVE NOT YET ADDED A PAYMENT METHOD</p>

              <button className='font-light text-sm text-black w-fit border-[.5px] transition border-black  hover:bg-black hover:text-white px-6 p-3'>
                ADD
              </button>
            </div>
          }
          {selectedTab === 3 &&
            <div className='mt-20 w-full px-10 font-light text-sm flex flex-col gap-4'>
              <h1 className='font-light text-xl' >GEORGE BUGWAK</h1>
              
              <span>ADDRESSES</span>
              <span>MY MEASUREMENTS</span>
              <div className='flex flex-col gap-1'>
                <span>EMAIL</span>
                <span>Georgebugwak@gmail.com</span>
              </div>

              <span>ADD PASSWORD</span>
              <button className='font-light text-sm text-black w-fit border-[.5px] transition border-black  hover:bg-black hover:text-white px-6 p-3'>
                SIGNOUT
              </button>
              <button className='mt-10 font-light text-sm text-black w-fit border-[.5px] transition border-black  hover:bg-black hover:text-white px-6 p-3'>
                DELETE ACCOUNT
              </button>
              
            </div>
          }
          {selectedTab === 4 &&
            <div className='mt-20 font-light  flex flex-col gap-8'>
              <div className='flex gap-1 flex-col'>
                <h1 className=''>NEWSLETTER</h1>
                <p>Select your interests and receive the latest news and trends each week</p>
              </div>

              <div className='flex gap-1 flex-col'>
                <h1 className=''>COOKIES SETTINGS</h1>
                <p>Configure your privacy preferences</p>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}