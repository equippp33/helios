import Link from "next/link";


import { HydrateClient } from "~/trpc/server";
import Sec1 from "./hero";

import Navbar from "../_components/navbar";

import Footer from "../_components/footer";









export default async function Home() {
  

  return (
    <HydrateClient>
      <main className="bg-[#EFFAFF]">
       <Navbar/>
       <section className="flex items-center justify-center min-h-screen bg-cover bg-center "
                style={{ backgroundImage: "url('/ship.svg')" }}>
                <Sec1/>
       </section>
       
       
       <section><Footer/></section>
      </main>
    </HydrateClient>
  );
}