import hart from "@/assets/heart.svg";
import Image from "next/image";

export default function GetBlood() {
  return (
    <section className="mt-10 lg:mt-40 max-w-7xl w-full mx-auto px-6">
      <h2 className="text-2xl text-center mb-3 font-bold md:text-4xl md:text-left">
        How to get Blood?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-[800px]">
        <div className="relative lg:col-span-3 lg:-translate-x-32 lg:mx-auto ">
          <div className="border-8 border-black rounded-full w-[126px] h-[126px] flex  justify-center text-4xl pt-6 pr-6 font-bold">
            1
          </div>
          <div className="shadow-[0px_4px_100px_2px_rgba(202,202,202,0.25)] rounded-full absolute top-0 left-10  w-[350px] bg-white flex justify-center items-center h-[350px] z-10">
            <div className="text-center">
              <h3>icon</h3>
              <p className="rounded-full  p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, sit alias, iusto iure saepe eius asperiores quam,
                ipsam assumenda neque aliquid ad ea minima itaque pariatur
                veritatis? Minus, doloremque consectetur?
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="border-8 border-black rounded-full w-[126px] h-[126px] flex  justify-center text-4xl pt-6 pr-6 font-bold">
            2
          </div>
          <div className="shadow-[0px_4px_100px_2px_rgba(202,202,202,0.25)] rounded-full absolute top-0 left-10  w-[350px] bg-white flex justify-center items-center h-[350px] z-10">
            <div className="text-center">
              <h3>icon</h3>
              <p className="rounded-full  p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, sit alias, iusto iure saepe eius asperiores quam,
                ipsam assumenda neque aliquid ad ea minima itaque pariatur
                veritatis? Minus, doloremque consectetur?
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={hart} alt="Hart image" />
        </div>
        <div className="relative">
          <div className="border-8 border-black rounded-full w-[126px] h-[126px] flex  justify-center text-4xl pt-6 pr-6 font-bold">
            3
          </div>
          <div className="shadow-[0px_4px_100px_2px_rgba(202,202,202,0.25)] rounded-full absolute top-0 left-10  w-[350px] bg-white flex justify-center items-center h-[350px] z-10">
            <div className="text-center">
              <h3>icon</h3>
              <p className="rounded-full  p-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus, sit alias, iusto iure saepe eius asperiores quam,
                ipsam assumenda neque aliquid ad ea minima itaque pariatur
                veritatis? Minus, doloremque consectetur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
