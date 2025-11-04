
import Link from "next/link";
import '../styles/globals.css';

import { HydrateClient } from "~/trpc/server";
import Hero from "./_components/hero";
import About from "./_components/about";
import Navbar from "./_components/navbar";

import Footer from "./_components/footer";
import Industrialsection from "./_components/Industrialpartner";
import Offerings from "./_components/offerings";
import Shipbuilding from "./_components/shipbuilding";
import Quality from "./_components/quality";
import Solutions from "./_components/solutions";
import Licenses from "./_components/licenses";
import CircularSec from "./gallery/CircularSec";
import Contact from "./_components/contact";
import Imagesection from "./_components/Imagesection";
import Certifications from "./_components/certifications";
import Groups from "./_components/groups";






export default async function Home() {
  

  return (
    <HydrateClient>
      <main className="bg-white">
       <Navbar/>
       <section className="flex items-center justify-center min-h-screen bg-cover bg-center "
                style={{ backgroundImage: "url('/ship.svg')" }}>
                <Hero/>
       </section>
       <section><About /></section>
       <section><Imagesection /></section>
       <section><Industrialsection /></section>
       <section><Offerings /></section>
       <section><CircularSec /></section>
       <section><Shipbuilding /></section>
       <section><Quality /></section>
       <section><Solutions /></section>
       
       <section className="flex w-full justify-center items-center"><Certifications /></section>
       <section className="flex w-full justify-center items-center"><Licenses /></section>
       <section><Contact /></section>
       <section><Footer /></section>
      </main>
    </HydrateClient>
  );
}
