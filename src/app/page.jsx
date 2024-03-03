import AutoSlider from "./components/AutoSlider";
import AboutMe from "./components/AboutMe";
import Featured from "./components/Featured";
import SlideShow from "./components/SlideShow";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="z-10 font-mono ">
        <AutoSlider className="mb-10"/>
        <SlideShow/>
        <Featured />
        <AboutMe/>
      </div>
    </main>
  );
}
