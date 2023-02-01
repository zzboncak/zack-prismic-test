import React from "react";
import { asDate } from "@prismicio/helpers";

/**
 * @typedef {import("@prismicio/client").Content.NavbarSlice} NavbarSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavbarSlice>} NavbarProps
 * @param { NavbarProps }
 */
const Navbar = ({ slice }) => (
  <section>
    <span>{slice.primary.example_text}</span>
    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
    `}</style>
  </section>
);

export default Navbar;
