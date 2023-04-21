import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import { Experience } from "./components/Experience";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <Experience />
    </div>
  );
}
