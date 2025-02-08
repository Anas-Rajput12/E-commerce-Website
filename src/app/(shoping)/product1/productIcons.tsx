import { IoMdEye } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";

export default function ProductIcons() {
  return (
    <>
    <div className="h-[44px] flex items-center gap-2">
   <div className="flex items-center w-[40px] h-[40px]"><CiHeart  className="text-2xl"/> </div> 
   <div className="flex items-center w-[40px] h-[40px]"> <BsCart  className="text-2xl"/> </div>
   <div className="flex items-center w-[40px] h-[40px]"><IoMdEye  className="text-2xl"/> </div> 

    </div>
    
    </>
  )
}
