"use client";

import { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState("#");

  const links = [
    { href: "#", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed w-full top-3 z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/10 backdrop-blur rounded-full">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setActive(href)}
            className={`nav-item ${
              active === href
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};
