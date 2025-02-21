import Image from "next/image";
import React from "react";
import { Kelly_Slab } from "next/font/google";
const kelly = Kelly_Slab({
  weight: ["400"],
  subsets: ["latin"],
});import Testimonial from "../../public/Testimonial.png";
import Link from "next/link";
const footer = () => {
  return (
    <div>
      <section className="my-10 place-items-center hidden md:block">
        <Image className="" src={Testimonial} alt="logo" width={1600} height={200} />
      </section>
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <Link href="/">
            <h1 className={`${kelly.className} text-5xl`}>
               <span className="text-[#FF5B36]">K</span>aizen
            </h1>
          </Link>
          <p>
            Project: Kaizen
            <br />
            By ArcaneBytes @2025
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default footer;
