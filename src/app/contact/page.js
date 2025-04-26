'use client';
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        timeline: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission (email, API, etc.)
        console.log('Form submitted:', formData);
    };

    return (
        <section className="bg-[#121212] py-16 px-4 text-white">
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Contact me</h2>
                <p className="text-gray-400">Cultivating Connections: Reach Out And Connect With Me</p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded-md w-full text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                    <option value="">Service Of Interest</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Branding">Branding</option>
                </select>

                <input
                    type="text"
                    name="timeline"
                    placeholder="Timeline"
                    className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.timeline}
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Project Details..."
                    className="bg-[#1c1c1c] border border-gray-700 px-4 py-3 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 resize-none"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <div className="sm:col-span-2 text-right">
                    <AnimatedSubscribeButton className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                        <span>Send</span>
                        <span>thanks!</span>
                    </AnimatedSubscribeButton>

                </div>
            </form>
        </section>
    );
}
