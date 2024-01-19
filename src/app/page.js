import Collaborator from "@/components/home/collaborator/Collaborator";
import GetBlood from "@/components/home/getBlood/GetBlood";
import Hero from "@/components/home/hero/Hero";
import MIssion from "@/components/home/mission/MIssion";
import Footer from "@/components/shared/footer/Footer";

export default function Home() {
  console.log("test")
  return (
    <>
      <main className="grid grid-cols-1">
        <Hero />
        <MIssion />
        <Collaborator />
        <GetBlood />
      </main>
      <Footer />
    </>
  );
}
