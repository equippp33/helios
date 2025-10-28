import Link from "next/link";


import { HydrateClient } from "~/trpc/server";


import Navbar from "../gallery/navbar";

import Footer from "../_components/footer";
import Contact from "../_components/contact";









export default async function Home() {
  

  return (
    <HydrateClient>
      <main className="bg-[#EFFAFF] h-fit">
       <Navbar/> 
       <section >
        <div className="pt-10"><Contact /></div>
      </section>
       
      </main>
    </HydrateClient>
  );
}