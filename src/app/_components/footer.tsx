import React from "react";
import Image from "next/image"; // If not using Next.js, replace with <img>


export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* Top section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src='/logo.svg'
            alt="Helios Shipping & Trading"
            width={200}
            height={200}
          />
        </div>

        {/* Company links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">About us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact us</a></li>
            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">Twitter</a></li>
            <li><a href="#" className="hover:text-yellow-400">LinkedIn</a></li>
            <li><a href="#" className="hover:text-yellow-400">Facebook</a></li>
            <li><a href="#" className="hover:text-yellow-400">Instagram</a></li>
          </ul>
        </div>

        {/* Map / Address */}
        <div>
          <h3 className="text-white font-semibold mb-4">Address</h3>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=chamra,+india&output=embed"
              className="w-full h-32 rounded-md border-0"
              loading="lazy"
            ></iframe>
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
