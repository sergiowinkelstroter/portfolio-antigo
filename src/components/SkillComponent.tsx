import Image, { StaticImageData } from "next/image";

interface SkillComponentProps {
  image: StaticImageData;
  title: string;
}

export const SkillComponent = ({ image, title }: SkillComponentProps) => {
  return (
    <div className="flex flex-col w-[180px] md:w-[200px] h-auto rounded-lg  md:shadow-xl md:dark:shadow-white md:dark:shadow p-5 hover:scale-105 ease-in duration-300 hover:cursor-pointer">
      <h3 className="text-xl ">{title}</h3>

      <div className="flex flex-col mt-8 gap-4 text-start">
        <div className="m-auto ">
          <Image src={image} width={100} height={120} alt="" />
        </div>
      </div>
    </div>
  );
};
