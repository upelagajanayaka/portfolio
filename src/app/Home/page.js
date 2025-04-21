"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function landing() {
    return (
        <div className="text-center">
            <h1 className="text-center text-2xl font-bold">I design and build clean websites</h1>
            <p className="text-center mt-4">
                Write anything here something about yourself to showcase what actually you doing or targeting etc.
            </p>
            <div className="flex justify-between mt-6 mx-auto max-w-sm">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Hire me</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Download CV</button>
            </div>
        </div>
    );
}