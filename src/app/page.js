import Collaborator from "@/components/home/collaborator/Collaborator";
import GetBlood from "@/components/home/getBlood/GetBlood";
import Hero from "@/components/home/hero/Hero";
import MIssion from "@/components/home/mission/MIssion";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  return (
<<<<<<< HEAD
    <main>
      <div className="min-h-[70svh] flex items-center max-w-7xl mx-auto">
        <div className="w-1/2 hidden md:block md:absolute top-0 -z-0 left-0">
          <Image src={heroBG} alt="hero image" className="" />
        </div>
        <div className="w-full md:flex justify-end">
          <div className="md:hidden">
            <LottieBlood width={150} />
          </div>
          <div className="px-4 text-center md:w-1/2 mt-10 lg:text-right md:text-right ">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#3C3C3C]">
              Save Life Donate Blood{" "}
            </h1>
            <p className="my-6 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the  standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="btn btn-neutral font-bold lg:text-2xl">
              Get Blood Now
            </button>
          </div>
        </div>
      </div>
    </main>
=======
    <>
      <main className="grid grid-cols-1">
        <Hero />
        <MIssion />
        <Collaborator />
        <GetBlood />
      </main>
      <Footer />
    </>
>>>>>>> main
  );
}
