import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Navbar />
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </div>
  );
}
