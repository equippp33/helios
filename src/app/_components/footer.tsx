import React from "react";
import Image from "next/image"; // If not using Next.js, replace with <img>
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-12 gap-8 max-w-7xl mx-auto">
        {/* Left side: Logo */}
        <div className="flex justify-center md:justify-start md:w-1/3">
    <Image
      src="/images/logo.svg"
      alt="Helios Shipping & Trading"
      width={200}
      height={200}
      className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
    />
        </div>
      
        {/* Right side: Columns and Map */}
        <div className="flex flex-col md:flex-row w-full justify-end md:w-2/3 gap-8">
          {/* Links section */}
          <div className="flex flex-row gap-12   ">
            {/* Company links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/aboutus" className="hover:text-yellow-400">About us</Link></li>
                <li><Link href="contactus" className="hover:text-yellow-400">Contact us</Link></li>
                <li><Link href="services" className="hover:text-yellow-400">Services</Link></li>
              </ul>
            </div>
      
            {/* Follow us */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow us</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-yellow-400">Twitter</Link></li>
                <li><Link href="#" className="hover:text-yellow-400">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-yellow-400">Facebook</Link></li>
                <li><Link href="#" className="hover:text-yellow-400">Instagram</Link></li>
              </ul>
            </div>
          </div>
      
          {/* Address / Map section */}
          <div className="md:w-1/3">
            <h3 className="text-white font-semibold mb-4">Address</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9978.626800196336!2d83.28022958363601!3d17.686657180933253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761555510103!5m2!1sen!2sin"                
                className="w-full h-32 rounded-md border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>


      {/* Divider */}
      <div className="border-t border-gray-700" />

      {/* Bottom section */}
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 Helios Ltd. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-yellow-400">Terms & Conditions</a>
          <span>•</span>
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
