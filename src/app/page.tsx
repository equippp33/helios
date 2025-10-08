import Link from "next/link";
import '../styles/globals.css';

import { HydrateClient } from "~/trpc/server";
import Sec1 from "./_components/sec1";
import Sec2 from "./_components/sec2";
import Navbar from "./_components/navbar";
import Sec3 from "./_components/sec3";
import Footer from "./_components/footer";


export default async function Home() {
  

  return (
    <HydrateClient>
      <main>
       <Navbar/>
       <section className="flex items-center justify-center min-h-screen bg-cover bg-center "
                style={{ backgroundImage: "url('/ship.svg')" }}>
                <Sec1/>
       </section>
       <section><Sec2/></section>
       <section><Sec3/></section>
       <section><Footer/></section>
      </main>
    </HydrateClient>
  );
}
