import Banner from "@/components/Banner";
import Image from "next/image";
import Logos from "../components/Logos";
import IdeaGrid from "@/components/IdeaGrid";
export default function Home() {
  return (
    <div>
      <Banner />
      <Logos />
      <IdeaGrid />
    </div>
  );
}
