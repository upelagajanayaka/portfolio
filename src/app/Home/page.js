"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { PulsatingButton } from "@/components/magicui/pulsating-button";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";


export default function landing() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-black">
            <span className="pointer-events-none z-10 whitespace-pre-wrap bg-amber-300 bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
                Hello I'M UJELA GAJANAYAKA
            </span>

            <div className="relative z-10 text-center">
                <h1 className="text-amber-50fuchsia-500 font-bold text-amber-400">I design and build clean websites</h1>
                <p className="text-[20px] mt-20 font-bold text-amber-50"> "
                    Write anything here something<br></br> about yourself to showcase what actually you doing or targeting etc.
                </p>
                <div className="flex justify-between mt-4 mx-auto max-w-xs">

                    <InteractiveHoverButton className="text-amber-700">Hire me</InteractiveHoverButton>
                    <ShimmerButton className="text-amber-300">Contact</ShimmerButton>
                </div>
            </div>



            <RetroGrid />
        </div>
    );
}