import pencil from "@/assets/bi_pencil-square.svg";
import hart from "@/assets/heart.svg";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function GetBlood() {
  return (
    <section className="mt-10 lg:mt-40 max-w-7xl w-full mx-auto px-6">
      <h2 className="text-2xl text-center mb-3 font-bold md:text-4xl md:text-left">
        How to get Blood?
      </h2>

      <div className="grid grid-cols-1 place-items-center gap-y-6 py-6 lg:grid-cols-3 w-full  mt-10">
        <div className="flex  lg:col-span-3 lg:-translate-x-32 lg:mx-auto ">
          <div className="border-8 border-black rounded-full w-[126px] h-[126px] flex  justify-center text-4xl pt-6 pr-6 font-bold">
            1
          </div>
          <div className="shadow-[0px_4px_100px_2px_rgba(202,202,202,0.25)] rounded-full -ml-24  w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-white flex justify-center items-center z-10">
            <div className="flex flex-col items-center">
              <h3>
                <FaMagnifyingGlass size={50} />
              </h3>
              <p className="rounded-full text-center p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, sit alias,
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="border-8 border-black rounded-full w-[126px] h-[126px] flex  justify-center text-4xl pt-6 pr-6 font-bold">
            2
          </div>
          <div className="shadow-[0px_4px_100px_2px_rgba(202,202,202,0.25)] rounded-full -ml-24  w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-white flex justify-center items-center z-10">
            <div className="text-center flex flex-col items-center">
              <h3>
                <Image src={pencil} alt="Pencil Icon" />
              </h3>
              <p className="rounded-full  p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, sit alias, iusto iure saepe eius asperiores quam,
                ipsam assumenda neque aliquid
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <Image src={hart} alt="Hart image" />
        </div>

        <div className="flex ">
          <div className="border-8 border-black rounded-full w-[126px] h-[126px] flex  justify-center text-4xl pt-6 pr-6 font-bold">
            3
          </div>
          <div className="shadow-[0px_4px_100px_2px_rgba(202,202,202,0.25)] rounded-full -ml-24  w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-white flex justify-center items-center s  z-10">
            <div className="text-center flex flex-col items-center">
              <h3>
                <Image src={pencil} alt="Pencil Icon" />
              </h3>
              <p className="rounded-full  p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, sit alias, iusto iure saepe eius asperiores quam,
                ipsam assumenda neque aliquid
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
