
import { useParams, useNavigate } from 'react-router-dom'
import { allProducts } from '../assets/Data';
import { useEffect, useState } from 'react';
import { ArrowLeft, Minus, Plus, Bookmark } from 'lucide-react';

import { Product } from './Products';



export default function View() {

  const {id} = useParams();

  const navigate = useNavigate();

  const product = allProducts.find((item) => item.id === id);

  const interests = allProducts.filter((item) => item.category === product.category && item.collection === product.collection && item.id !== product.id);

  const [selectedImage, setSelectedImage] = useState(product.photos[0]);

  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    setSelectedImage(product.photos[0]);
  }, [product]);

  const [count, setCount] = useState(1);
  return(
    <div className='relative  flex-center flex-col gap-16 w-full mt-22'>
      <button onClick={() => navigate("/products/all")} className=' tab absolute top-4 left-8  text-black'>
        <ArrowLeft  size={25} strokeWidth={.5}/>
      </button>

      <div className='flex-center justify-between  items-start flex-row gap-20 mt-5  px-60'>

        <div className='flex-1  flex-center items-start flex-col gap-2 '>

          <img className='w-sm object-cover shadow-md ' src={selectedImage} alt="" />
          <div className='grid grid-cols-4 gap-2'>
            {product.photos.map((item, index) => {
              return(
                <img key={index} className={`${selectedImage === item ? "border border-gray-400" : ""} h-20 w-30 object-cover`} src={item} alt="" onClick={() => setSelectedImage(item)}/>
              )
            })
            }
          </div>
            
        </div>

        <div className="flex-1   flex-center  flex-col gap-4 p-4">
          {/* Product Title & Price */}
          <div className="mt-20 w-full flex flex-col gap-2">
            <div className='flex justify-between items-center'>
              <span className='text-sm font-light'>{product?.collection}</span>
              <Bookmark size={20} strokeWidth={1} fill='yellow' />
            </div>
            <h1 className="text-2xl font-light text-gray-900">{product.name}</h1>
            <span className="text-xl font-zara text-gray-700">{product.price}</span>
            <span className="text-sm font-light text-gray-500">SKU: 123312 | Color: Amber</span>
          </div>
          
          <ul className='flex gap-4 w-full justify-end'>
            {["XL", "L", "M", "S"].map((item, index) => {
              return(
                <li key={index} onClick={() => setSelectedSize(item)}
                className={`tab text-xs font-light transition py-1 px-3 border-[.5px] border-gray-300 ' ${selectedSize === item ? "bg-black text-white" : " text-black"}`}>{item}</li>
              )
            })
            }
          </ul>

          <div className=" w-full flex justify-end items-center gap-2">
            <button onClick={()=> setCount(count-1)} 
              className='cursor-pointer text-black hover:bg-black hover:text-white text-xs font-light transition py-1 px-3 border-[.5px] border-gray-300'>
              <Minus size={15} strokeWidth={1} />
            </button>
            <span className='w-10 border-[.5px] border-gray-300 text-xs py-1  flex-center '>{count}</span>
            <button onClick={()=> setCount(count+1)} 
              className='cursor-pointer text-black hover:bg-black hover:text-white text-xs font-light transition py-1 px-3 border-[.5px] border-gray-300'>
                <Plus size={15} strokeWidth={1}/>
            </button>
          </div>
          <button className=' font-light  text-sm text-gray-500 w-full border-[.5px] transition border-gray-300 hover:bg-black hover:text-white p-3'>
            ADD
          </button>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 my-4"></div>

          {/* Product Description */}
          <div className="text-gray-700 space-y-2">
            <h2 className="font-zara">Product Description</h2>
            <p className='font-light'>{product.productInfo}</p>
          </div>

          {/* Materials */}
          <div className="text-gray-700 space-y-2 w-full">
            <h2 className=" font-zara">Materials</h2>
            {product.materials && (
              <ul className="font-light">
                {Object.entries(product.materials).map(([key, value]) => (
                  <li key={key}>
                    <span className="">{key.toUpperCase() }:</span> {value.toUpperCase()}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>


      {/* // Product Title & Price */}
      <div className='w-full flex flex-col  px-20'>
        <h1 className='font-light text-sm pt-4'>YOU MAYBE INTERESTED IN</h1>
        <div className='w-full grid grid-cols-5 gap-8 px-5 py-10'>
          {interests.map((item, index) => {
            return(
              <Product index={index} item={item} />
            )
          })
          }
        </div>
        <div className='w-full flex-center'>

          <button onClick={() => navigate("/products/all")} className='font-light text-sm text-gray-500 w-fit border-[.5px] transition border-gray-300 hover:bg-black hover:text-white px-6 p-3'>
            FIND MORE
          </button>

        </div>

      </div>

    </div>
  );



}
