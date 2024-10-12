"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="container flex flex-row justify-between bg-black-600 px-10">
      <div className="left-nav">
        <div className="logo-container max-w-[400px]">
          <Image
            src="https://www.committedltd.com/assets/image/logo.png"
            width={350}
            height={200}
            alt="logo"
          />
        </div>
      </div>
      <div className="right-nav flex flex-row items-center gap-14 text-gold-400">
        <div className="locale">
          <span>View In</span>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="US"
          />
          <ReactCountryFlag
            countryCode="BD"
            svg
            style={{
              width: "2em",
              height: "2em",
            }}
            title="BD"
          />
        </div>
        <ul className="nav-menu flex flex-row gap-4 uppercase">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/" ? "underline decoration-dashed" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "underline decoration-dashed" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "underline decoration-dashed" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/consultancy"
              className={`${
                pathname === "/consultancy" ? "underline decoration-dashed" : ""
              }`}
            >
              Student Consultancy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
