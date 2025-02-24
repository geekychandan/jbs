'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ProjectGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = ['all', 'kitchen', 'bedroom', 'living', 'office'];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3',
      category: 'kitchen',
      title: 'Modern Kitchen Design',
      location: 'WhiteField'
    },
    {
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3',
      category: 'bedroom',
      title: 'Luxury Master Bedroom',
      location: 'Kadugudi'
    },
    {
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3',
      category: 'living',
      title: 'Contemporary Living Room',
      location: 'MG Road Bangalore'
    },
    {
      image: 'https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3',
      category: 'office',
      title: 'Home Office Setup',
      location: 'Bangalore'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3',
      category: 'kitchen',
      title: 'Minimalist Kitchen',
      location: 'Sarjapura'
    },
    {
      image: 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixlib=rb-4.0.3',
      category: 'bedroom',
      title: 'Kids Bedroom Design',
      location: 'Hyderabad'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="project-gallery py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Project Gallery
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Explore our latest interior design projects
          </motion.p>
          
          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full capitalize transition-all duration-300 transform ${
                  activeFilter === filter
                    ? 'bg-blue-500 text-white shadow-lg scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-blue-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="gallery-item group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden rounded-xl">
                {/* Project Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.15 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGallery;
