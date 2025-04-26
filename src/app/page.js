"use client";

import { motion } from "framer-motion";
import Navbar from "./navigation/page";
import Landing from "./home/page";
import About from "./about/page";
import Project from "./project/page";
import Contact from "./contact/page";
import ContactD from "./contactD/page";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import DarkModeToggle from "./darckmode/page"; // Correct import path
const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Home() {
  return (
    <div className="bg-[#1c1c1c] text-white scroll-smooth">
      <SmoothCursor />
      {/* Navigation Bar */}
      <>
        <Navbar />
        <div className="absolute top-4 right-4">
          <DarkModeToggle /> {/* Add the Dark Mode Toggle */}
        </div>
        <main className="pt-20">
          {/* Page content here */}
        </main>
      </>
      {/* Landing Section */}
      <motion.section
        id="landing"
        className="min-h-screen flex items-center justify-center px-4 py-16 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <Landing />
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-8 border-t border-gray-800 bg-[#222]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
          <About />
        </div>
      </motion.section>

      {/* Project Section */}
      <motion.section
        id="project"
        className="py-20 px-4 sm:px-8 border-t border-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white"></h2>
          <Project />
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-8 border-t border-gray-800 bg-[#222]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Me</h2>
          <Contact />
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="bg-[#1c1c1c] border-t border-gray-800 py-12">
        <div className="max-w-5xl mx-auto">
          <ContactD />
        </div>
      </footer>
    </div>
  );
}