import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {

const [open, setOpen]=useState(false);

const Links = navigationData.map((route) => (
  <Link key={route.id} route={route}></Link>
));

  return (
    <nav className="flex justify-between mx-10 mt-4">
      <span className="flex gap-4" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"> </X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}

        <ul
          className={`md:hidden absolute z-5  duration-1000
           ${open ? "top-8" : "-top-40"}
         bg-amber-200`}
        >
          {Links}
        </ul>

        <h3>My Navbar</h3>
      </span>

      <ul className="hidden md:flex gap-4 justify-between ">{Links}</ul>

      {/* <ul className="flex">
          {navigationData.map((route) => (
            <li className="mr-10">
              <a href="/">{route.name}</a>
            </li>
          ))}
        </ul> */}

      {/* <li className='mr-10'><a href="/">Home</a></li>
            <li className='mr-10'><a href="/about">About</a></li>
            <li className='mr-10'><a href="/blog">Blog</a></li> */}
      <button>Sign In</button>
    </nav>
  );
};

export default NavBar;
