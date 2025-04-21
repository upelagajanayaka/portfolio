"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

export default function landing() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ textAlign: "center" }}>I design and build clean websites</h1>
            <p style={{ textAlign: "center" }}>
                Write anything here something about yourself to showcase what actually you doing or targeting etc.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px auto", maxWidth: "300px" }}>
                <button>Hire me</button>
                <button>Download CV</button>
            </div>
        </div>
    );
}