"use cache";
import { Suspense } from "react";
import { GetSayHello } from "./api/route";
import Link from "next/link";
import Img from "./components/image";
import { getName } from "./api/name/name";

const fetchData = async () => {
  const [name, sayHello] = await Promise.all([
    await getName("/"),
    await GetSayHello(),
  ]);
  return { name, sayHello };
};

export default async function Home() {
  const { name, sayHello } = await fetchData();

  return (
    <div className="flex flex-col items-center gap-4">
      <Suspense fallback={<div>Loading...</div>}>
        <div>Home page {sayHello}</div>
      </Suspense>
      <div className="flex justify-center">
        <Link href="/about" className="border-gray-100 border-2 rounded-md p-2">
          to About page
        </Link>
      </div>
      <Suspense
        fallback={
          <div className="animate-pulse bg-orange-300 w-24 h-24 rounded-md" />
        }
      >
        <Img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s1048/onepiece01_luffy.png" />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <div>{name}</div>
      </Suspense>
    </div>
  );
}
