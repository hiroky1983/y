import Image from "next/image";

const Img = ({ src }: { src: string }) => {
  return (
    <div className="flex justify-center">
      <Image src={src} alt="image" width={96} height={96} />
    </div>
  );
};

export default Img;
