import Link from "next/link";
import '../styles/globals.css';

import { HydrateClient } from "~/trpc/server";
import Sec1 from "./_components/sec1";
import Sec2 from "./_components/sec2";
import Navbar from "./_components/navbar";
import Sec3 from "./_components/sec3";
import Footer from "./_components/footer";
import Sec4 from "./_components/sec4";
import Sec5 from "./_components/sec5";
import Sec6 from "./_components/sec6";
import Sec7 from "./_components/sec7";
import Sec8 from "./_components/sec8";



export default async function Home() {
  

  return (
    <HydrateClient>
      <main className="bg-[#EFFAFF]">
       <Navbar/>
       <section className="flex items-center justify-center min-h-screen bg-cover bg-center "
                style={{ backgroundImage: "url('/ship.svg')" }}>
                <Sec1/>
       </section>
       <section><Sec2/></section>
       <section><Sec3/></section>
       <section><Sec4/></section>
       <section><Sec5/></section>
       <section><Sec6/></section>
       <section><Sec7/></section>
       <section><Sec8/></section>
       
       <section><Footer/></section>
      </main>
    </HydrateClient>
  );
}
