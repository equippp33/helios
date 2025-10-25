import Link from "next/link";


import { HydrateClient } from "~/trpc/server";
import Sec1 from "./sec1";

import Navbar from "../_components/navbar";

import Footer from "../_components/footer";
import SectionShowcase from "./supplysec2";
import Contact from "../_components/contact";









export default async function Home() {
  

  return (
    <HydrateClient>
      <main className="bg-[#EFFAFF]">
       <Navbar/>
       <section className="flex items-center w-full justify-center min-h-screen bg-cover bg-center "
                style={{ backgroundImage: "url('/ship.svg')" }}>
                <Sec1/>
       </section>
       <section><SectionShowcase/></section>
       <section><Contact /></section>
       
       <section><Footer/></section>
      </main>
    </HydrateClient>
  );
}