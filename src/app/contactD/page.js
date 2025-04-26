"use client";
import { Instagram, Linkedin, Dribbble } from "lucide-react";
import { AiFillBehanceSquare } from "react-icons/ai"; // Corrected Behance icon import

export default function contactD() {
    return (
        <footer className="bg-[#1c1c1c] text-white py-6 px-4 text-center border-t border-gray-700">
            <div className="text-orange-500 text-xl font-semibold mb-2">UJELA GAJANAYAKA</div>

            <nav className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-300 mb-3">
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">About me</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact me</a>
            </nav>

            <div className="flex justify-center gap-4 mb-3">
                {/* Social Icons */}
                <a href="#" className="hover:text-orange-500 transition">
                    <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-orange-500 transition">
                    <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-orange-500 transition">
                    <Dribbble size={20} />
                </a>
                <a href="#" className="hover:text-orange-500 transition">
                    <AiFillBehanceSquare size={20} /> {/* Corrected Behance icon */}
                </a>
            </div>

            <div className="text-sm text-gray-400 mb-1">
                <p>
                    <i className="fas fa-envelope mr-2" />
                    UjelaGajanayaka@gmail.com
                </p>
                <p>
                    <i className="fas fa-phone mr-2" />
                    +94 77 3585443
                </p>
            </div>

            <hr className="my-3 border-gray-600" />

            <p className="text-xs text-gray-500">
                create by @UJELA.GAJANAYAKA Softwear Engneer
            </p>
        </footer>
    );
}