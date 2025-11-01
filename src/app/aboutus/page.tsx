import Link from "next/link";


import { HydrateClient } from "~/trpc/server";
import Sec1 from "./hero";

import Navbar from "../_components/navbar";

import Footer from "../_components/footer";
import Ourmission from "./ourmission";
import Quality from "../_components/quality";
import Companies from "../_components/licenses";
import Contact from "../_components/contact";







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
       <section><Quality /></section>
       <section className="flex w-full justify-center mt-15 mb-10 items-center p-4"><Companies/></section>
       <section><Contact/></section>
       <section><Footer/></section>
      </main>
    </HydrateClient>
  );
}