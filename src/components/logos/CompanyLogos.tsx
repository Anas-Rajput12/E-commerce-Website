import Image from "next/image"

export default function CompanyLogos() {
  return (
    <>
     {/* company logos  */}
                <div className="mx-auto max-w-[1050px] h-[174px] flex justify-around items-center "> 
                  <Image src='/Images/logo1.png' alt='Company Logo' width={103} height={34}/>
                  <Image src='/Images/logo2.png' alt='Company Logo' width={83} height={58}/>
                  <Image src='/Images/logo3.png' alt='Company Logo' width={102} height={74}/>
                  <Image src='/Images/logo4.png' alt='Company Logo' width={103} height={42}/>
                  <Image src='/Images/logo5.png' alt='Company Logo' width={104} height={62}/>
                  <Image src='/Images/logo6.png' alt='Company Logo' width={104} height={74}/>
                </div>
    </>
  )
}
