import Link from "next/link";


import { HydrateClient } from "~/trpc/server";
import Sec1 from "./sec1";

import Navbar from "../_components/navbar";

import Footer from "../_components/footer";
import Ourmission from "./ourmission";
import Sec7 from "../_components/sec7";
import Companies from "../_components/sec9";







export default async function Home() {
  

  return (
    <HydrateClient>
      <main className="bg-[#EFFAFF]">
       <Navbar/>
       <section className="flex items-center justify-center min-h-screen bg-cover bg-center "
                style={{ backgroundImage: "url('/ship.svg')" }}>
                <Sec1/>
       </section>
       <section><Ourmission/></section>
       <section><Sec7/></section>
       <section className="flex w-full justify-center mt-15 mb-10 items-center p-4"><Companies/></section>
       <section><Footer/></section>
      </main>
    </HydrateClient>
  );
}