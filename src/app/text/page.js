"use client";
import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";

export default function tex() {
    return (
        <div className="relative bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600 min-h-screen flex items-center justify-center">
            {/* Image Section */}
            <MagicCard>
                <div className="absolute inset-y-10 left-20 w-1/3 border-4 bg-zinc-800 rounded-lg shadow-md p-4">
                    <img
                        src="/images/my1.png"
                        alt="About Me"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </MagicCard>

            {/* Text Section */}
            <div className="absolute inset-y-10 right-20 w-1/3 bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-4">About Me</h1>
                <p className="text-left mb-4">
                    I'm Ujela Gajanayaka, a passionate web developer with a love for creating beautiful and functional websites.
                    I specialize in front-end development, using the latest technologies to bring designs to life.
                </p>
                <ul className="list-disc text-left mb-4">
                    <li>2nd Year HND Student</li>
                    <li>1st Year A/Ls Student</li>
                    <li>18 years old</li>
                    <li>Lives in Sri Lanka</li>
                </ul>
                <p className="text-left">
                    I am currently pursuing my HND in Information Technology at the University of Colombo School of Computing (UCSC).
                    I am also a first-year student in the Advanced Level (A/L) program. I am 18 years old and live in Sri Lanka.
                </p>
            </div>
        </div>
    );
}