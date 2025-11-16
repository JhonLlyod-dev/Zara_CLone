import { useState } from 'react'
import { allProducts } from '../assets/Data';
import {Product} from '../Pages/Products';
import { Bookmark, Minus, Plus } from 'lucide-react';

export default function Cart() {

  const items = allProducts.slice(0, 3);

  const items2 = allProducts.slice(4, 10);

  const [count, setCount] = useState(1);

  const [tab, setTab] = useState(1);

  return (
    <div className="mt-22 p-5">

      <div className="flex flex-col px-20">
        <ul className="font-light text-sm flex gap-8 border-b border-gray-300 pb-2">
          <li onClick={()=> setTab(1)} className={`tab p-0.5 px-2 ${tab === 1 ? "bg-black text-white" : "bg-white/90 text-black"}`}>SHOPPING BAG [2]</li>
          <li onClick={()=> setTab(2)} className={`tab p-0.5 px-2 ${tab === 2 ? "bg-black text-white" : "bg-white/90 text-black"}`}>FAVORITES</li>  
        </ul>

        <div className='px-10 py-5'>
          {tab === 1 && 
            <div className='flex flex-col gap-2'>
              <h1 className='font-zara'>My Cart</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full bg-white"
                  >
                        {/* Product Card */}
                        <Product index={index} item={item} />

                        {/* Quantity + Variant Row */}
                        <div className="w-full flex items-center justify-between px-2 mt-2">

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-1">

                            {/* Minus */}
                            <button
                              onClick={() => setCount(count - 1)}
                              className="cursor-pointer text-black hover:bg-black hover:text-white 
                                        text-[10px] font-light transition 
                                        py-[2px] px-[6px] border border-gray-300"
                            >
                              <Minus size={14} strokeWidth={1} />
                            </button>

                            {/* Count */}
                            <span className="w-7 border border-gray-300 text-[10px] py-[2px] 
                                            flex items-center justify-center">
                              {count}
                            </span>

                            {/* Plus */}
                            <button
                              onClick={() => setCount(count + 1)}
                              className="cursor-pointer text-black hover:bg-black hover:text-white 
                                        text-[10px] font-light transition 
                                        py-[2px] px-[6px] border border-gray-300"
                            >
                              <Plus size={14} strokeWidth={1} />
                            </button>

                          </div>
                          {/* Color + Size */}
                          <div title='edit' className="tab p-0.5 font-light text-xs text-gray-700">
                            Gray | M
                          </div>

                        </div>
                      </div>
                    ))}
              </div>

              <div className="fixed bottom-10 left-20 right-20 z-10 
                bg-black border border-gray-300 shadow-sm 
                px-8 py-5 flex items-center justify-between gap-6">

                {/* Left Text */}
                <p className="text-sm font-light text-white leading-tight max-w-[70%]">
                  By continuing, I declare that I have read and accept the Purchase Conditions 
                  and understand Zara's Privacy and Cookie Policy.
                </p>

                {/* Right Button */}
                <div className=" text-white flex-center gap-8">
                  <div className="flex items-start gap-2">
                    <span className="text-sm font-zara">Total:</span>
                    <div className='flex flex-col gap-1'>
                      <span className="text-sm font-zara text-white">7,995.00 PHP</span>
                      <span className="text-xs font-light text-white">* including VAT</span>
                    </div>
                  </div>
                  <button
                    className="flex items-center gap-2 text-sm font-light transition
                              cursor-pointer hover:bg-white hover:text-black
                              py-2 px-8 border border-white"
                  >
                    CONTINUE
                  </button>
                </div>

              </div>

              <div className='mt-30 flex flex-col  gap-10'>
                <h1 className='font-light'>You may also like </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {items2.map((item, index) => (
                      <Product index={index} item={item} />
                  ))}
                </div>

              </div>

            </div>

          }
          {tab === 2 && 
            <div className='flex flex-col gap-2'>
              <h1 className='font-zara'>My Lists</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-full bg-white"
                  >
                        {/* Product Card */}
                        <Product index={index} item={item} />

                        {/* Quantity + Variant Row */}
                        <div className="w-full flex items-center justify-between mt-2">
                          <div className='flex-center gap-1 w-[60%]'>
                          <button className='flex-1 text-xs px-2 font-light transition hover:bg-black hover:text-white py-1 border border-gray-400'>
                            REMOVE
                          </button>
                          <button className='flex-1 text-xs px-2 font-light transition hover:bg-black hover:text-white py-1 border border-gray-400'>
                            ADD
                          </button>
                          </div>
                          <Bookmark size={16} strokeWidth={1} fill='black'/>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}