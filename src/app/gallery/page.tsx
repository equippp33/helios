import Link from "next/link";


import { HydrateClient } from "~/trpc/server";
import Sec1 from "./sec1";

import Navbar from "./navbar";

import Footer from "../_components/footer";
import Imagesection from "./Imagesec";
import Contact from "../_components/contact";









export default async function Home() {
  

  return (
    <HydrateClient>
      <main className="bg-[#EFFAFF]">
       <section className="h-[100px]"><Navbar/></section>
       
       <section><Imagesection/></section>
       <section><Contact /></section>
       <section><Footer/></section>
      </main>
    </HydrateClient>
  );
}