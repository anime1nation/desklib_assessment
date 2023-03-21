import AskQue from "./components/askque/AskQue";
import Expertise from "./components/expertise/Expertise";
import Features from "./components/features/Features";
import HomeWork from "./components/home-work-sol/HomeWork";
import Reader from "./components/reader/Reader";
import SmartStudy from "./components/smartstudy/SmartStudy";

export default function Home() {
  return (
    <>
      <AskQue />
      <SmartStudy />
      <Expertise />
      <Features />
      <HomeWork />
      <Reader />
    </>
  );
}
