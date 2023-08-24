import {prefix} from "../../config/config";
import Image from "next/image";


export default function Home() {
  return (
    <>
    main Branch check
    <Image src={`${prefix}/next.svg`} alt="Vercel Logo" width={72} height={16} />
    </>
  )
}
