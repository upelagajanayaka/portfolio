'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Website Design', 'App Mobile Design', 'App Desktop', 'Branding'];

const projects = [
    {
        id: 1,
        title: 'Black Portfolio',
        category: 'Website Design',
        image: '/projects/project1.jpg',
    },
    {
        id: 2,
        title: 'Mountain View',
        category: 'App Mobile Design',
        image: '/projects/project2.jpg',
    },
    {
        id: 3,
        title: 'Creative Portfolio',
        category: 'Branding',
        image: '/projects/project3.jpg',
    },
    // Add more...
];

export default function project() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section className="bg-[#121212] py-16 px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Portfolio</h2>

            <div className="flex justify-center flex-wrap gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium ${activeCategory === cat
                            ? 'bg-orange-500 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            } transition`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div
                layout
                className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            >
                {filteredProjects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#1c1c1c] rounded-xl overflow-hidden shadow-lg border border-gray-800"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-60 object-cover"
                        />
                        <div className="p-4 text-white">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-400">{project.category}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
