import Link from "next/link";
import { Suspense } from "react";
import Img from "../components/image";
import { getName } from "../api/name/name";

const page = async () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col items-center gap-4">
        <div>about</div>
        <div className="flex justify-center">
          <Link href="/" className="border-gray-100 border-2 rounded-md p-2">
            return Home page
          </Link>
        </div>
        <Suspense
          fallback={<div className="animate-pulse bg-orange-300 w-24 h-24" />}
        >
          <Img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkZ57Udi7AA5MRw4uzcx9M4R0J8PK03fIjZaaRlCLWBW5gBtnZpuCWLbao925kYGJy0HNcxEf9NcfbHFyuraKrY-4WhkFV01Ufut5cDeRpuiZ5cewk8CCQUD2v178dm67n_DqoHUrr_s-K/s1041/onepiece02_zoro_bandana.png" />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <div>{getName("/about")}</div>
        </Suspense>
      </div>
    </Suspense>
  );
};

export default page;
