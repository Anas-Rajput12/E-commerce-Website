import Image from "next/image";
export default function Icons() {
  return (
    <>
      <ul className="flex gap-5 ">
        <li>
          <Image src={"/Images/facebook.png"} alt="" width={24} height={24} />
        </li>
        <li>
          <Image src={"/Images/instagram.png"} alt="" width={24} height={24} />
        </li>

        <li>
          <Image src={"/Images/twitter2.png"} alt="" width={24} height={19} />
        </li>
      </ul>
    </>
  );
}
