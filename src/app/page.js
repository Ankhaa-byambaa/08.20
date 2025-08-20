import { Card, Introduction, Navigation } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <Navigation></Navigation>
        <Introduction></Introduction>
        <Card></Card>
        <Footer></Footer>
      </div>
    </>
  );
}
