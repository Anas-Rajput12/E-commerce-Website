'use client'
import {useRouter} from "next/navigation"

export default function Custom404() {
  const route = useRouter();

  return (
   <>
   <div className="h-screen w-screen flex flex-col mt-48 items-center gap-6">
   <h2 className="text-4xl font-semibold">Page | Not Found</h2>
   <p className="text-red-800 font-[400] tracking-[1px] ">Sorry, the page you are looking for is not found.</p>
   <button onClick={()=>route.push('/')} className="px-8 py-3 bg-blue-500 text-white font-[700] rounded-sm shadow-black shadow-md hover:bg-green-700 hover:transition-colors ">
   Back to Home
    </button>
   </div>
   
   </>
  )
}
