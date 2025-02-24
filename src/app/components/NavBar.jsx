"use client";

import { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import clsx from "clsx";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = "/"; // Simulate current path (replace with usePathname if needed)

  const navItems = [
    { link: "/about", label: "About" },
    { link: "/services", label: "Services" },
    // { link: "/contact", label: "Contact" },
  ];

  return (
    // Fixed container that spans the full width and keeps the nav bar at the top.
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        aria-label="Main navigation"
        className="bg-slate-50 px-4 py-2 md:px-7 md:py-2 shadow-lg md:rounded-xl md:m-7 md:mt-4 mx-auto max-w-7xl"
      >
        <ul className="flex flex-col justify-between rounded-b-lg md:flex-row md:items-center md:rounded-xl">
          <div className="flex items-center justify-between w-full md:w-auto">
            <NameLogo name="JBS INTERIOR" />
            <button
              aria-expanded={open}
              aria-label="Open menu"
              className="block p-2 text-3xl text-slate-800 md:hidden"
              onClick={() => setOpen(true)}
            >
              <MdMenu />
            </button>
          </div>
          {/* Mobile Menu */}
          <div
            className={clsx(
              "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
              open ? "translate-x-0" : "translate-x-[100%]"
            )}
          >
            <button
              aria-label="Close menu"
              aria-expanded={open}
              className="fixed right-4 top-3 block p-2 text-3xl text-slate-800 md:hidden"
              onClick={() => setOpen(false)}
            >
              <MdClose />
            </button>
            {navItems.map(({ link, label }) => (
              <li key={label} className="first:mt-8">
                <Link
                  href={link}
                  className={clsx(
                    "group relative block overflow-hidden rounded px-3 text-3xl font-bold",
                    pathname === link ? "text-blue-600" : "text-slate-900"
                  )}
                  onClick={() => setOpen(false)}
                >
                  <span className="relative">{label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Button
                link="/estimates"
                label="estimate"
                className="ml-3 text-3xl"
              />
            </li>
          </div>
          <DesktopMenu navItems={navItems} pathname={pathname} />
        </ul>
      </nav>
    </div>
  );
}

function NameLogo({ name }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold  text-slate-900 flex items-center"
    >
      <img src="/jbslogo.png" alt="Logo" className="mr-2 w-9 h-9" />
      {name}
    </Link>
  );
}

function DesktopMenu({ navItems, pathname }) {
  return (
    <div className="hidden flex-row items-center gap-8 md:flex">
      {navItems.map(({ link, label }) => (
        <li key={label}>
          <Link
            href={link}
            className={clsx(
              "group relative block overflow-hidden rounded px-3 py-1 text-lg font-bold",
              pathname === link ? "text-blue-600" : "text-slate-900"
            )}
          >
            <span className="relative">{label}</span>
          </Link>
        </li>
      ))}
      <li>
        <Button
          link="/estimates"
          label="Estimate"
          className="ml-3 text-lg"
        />
      </li>
    </div>
  );
}

function Button({ link, label, className }) {
  return (
    <Link
      href={link}
      className={clsx(
        "px-4 py-2 bg-yellow-300 text-black rounded",
        className
      )}
    >
      {label}
    </Link>
  );
}
