import Banner from "@/components/Banner";
import Image from "next/image";
import Logos from "../components/Logos";
import IdeaGrid from "@/components/IdeaGrid";
import Marketing from "@/components/Marketing";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Banner />
      <Logos />
      <IdeaGrid />
      <Marketing />
      <Testimonial />
      <Footer />
    </div>
  );
}
