'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-[#0b1c2c] text-white px-6 py-10 md:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:underline">➤ About Us</Link></li>
            <li><Link href="/products" className="hover:underline">➤ Products</Link></li>
            <li><Link href="/faq" className="hover:underline">➤ FAQ</Link></li>
            <li><Link href="/contact" className="hover:underline">➤ Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">CUSTOMER SERVICE</h3>
          <ul className="space-y-3 text-sm">
            <li><Link href="/account" className="hover:underline">➤ My Account</Link></li>
            <li><Link href="/track-order" className="hover:underline">➤ Track Order</Link></li>
            <li><Link href="/terms" className="hover:underline">➤ Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy" className="hover:underline">➤ Privacy Policy</Link></li>
            <li><Link href="/shipping-policy" className="hover:underline">➤ Shipping & Delivery</Link></li>
            <li><Link href="/refund-policy" className="hover:underline">➤ Cancellation & Refund</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">GET IN TOUCH</h3>
          <div className="text-sm space-y-3">
            <p className="flex items-start gap-2"><MdLocationOn className="text-xl mt-1" /> Canada</p>
            <p className="flex items-center gap-2"><MdPhone className="text-xl" /> +1(416)841-9642</p>
            <p className="flex items-center gap-2"><MdEmail className="text-xl" /> info.aays@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex gap-5 mb-4 md:mb-0">
          <a href="https://www.facebook.com/profile.php?id=61575327271070" className="hover:text-blue-300" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://www.instagram.com/info.aays/" className="hover:text-pink-400" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.youtube.com/@info_AAYS" className="hover:text-red-500" aria-label="YouTube"><FaYoutube /></a>
        </div>
        <p className="text-center text-white/70">&copy; 2025 Your Store | Built with ❤️ for You</p>
      </div>
    </footer>
  );
}