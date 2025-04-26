"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function About() {
    return (
        <section className="bg-[#222] py-20 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex-shrink-0"
                >
                    <div className="bg-[#1c1c1c] rounded-3xl p-6 overflow-hidden w-[400px] h-[500px] flex items-center justify-center">
                        <Image
                            src="/images/sat.png" // Ensure this path is correct
                            alt="Profile"
                            width={400}
                            height={300}
                            className="object-cover rounded-2xl"
                        />
                    </div>
                </motion.div>

                <BoxReveal>

                    {/* Right side - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-white max-w-2xl"
                    >
                        <h2 className="text-4xl font-bold mb-4">About Me</h2>
                        <p className="text-gray-400 mb-6">
                            User Interface And User Experience And Also Video Editing
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            A software engineer, the modern-day architect of digital realms,
                            navigates the ethereal landscapes of code, sculpting intangible
                            structures that shape our technological world. With fingers poised
                            over keyboards like virtuoso pianists, they compose symphonies of
                            logic, their minds a labyrinth of algorithms and solutions...
                        </p>

                        <a
                            href="/cv.pdf"
                            download
                            className=" text-black font-semibold py-3 px-6 rounded-lg transition"
                        >
                            <InteractiveHoverButton>Download-CV</InteractiveHoverButton>
                        </a>
                    </motion.div>
                </BoxReveal>
            </div>
        </section>
    );
}