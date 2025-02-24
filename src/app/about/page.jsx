"use client";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import NavBar from "../components/NavBar";
import Bounded from "../components/Bounded";

const directors = [
  {
    name: "John Smith",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    bio: "15+ years of experience in interior design and architecture. Visionary leader passionate about creating innovative workspaces.",
  },
  {
    name: "Sarah Johnson",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in project management and client relations with a background in commercial interior design.",
  },
];

const architects = [
  {
    name: "David Chen",
    role: "Senior Architect",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in sustainable design and smart office solutions.",
  },
  {
    name: "Emily Brown",
    role: "Interior Architect",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in creating ergonomic and aesthetically pleasing workspaces.",
  },
  {
    name: "Michael Lee",
    role: "Technical Architect",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    bio: "Specializes in technical planning and 3D visualization.",
  },
  {
    name: "Lisa Wang",
    role: "Design Architect",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    bio: "Creative expert in modern office design and space optimization.",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    url: "https://instagram.com/jbsdesigns",
    color: "hover:text-pink-500",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    url: "https://facebook.com/jbsdesigns",
    color: "hover:text-blue-500",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://linkedin.com/company/jbsdesigns",
    color: "hover:text-blue-700",
  },
];

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <NavBar />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
            alt="Office Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Jbs Interiors
            </h1>
            <p className="text-xl text-gray-200">
              Transforming spaces into extraordinary experiences since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-gray-300 text-lg">
              From our humble beginnings in 2012, we've grown into one of the
              most trusted names in office interior design. Our commitment to
              excellence and innovation has helped us transform over 150
              workspaces across 10+ cities worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                year: "2010",
                title: "Founded",
                description:
                  "Started with a vision to revolutionize office spaces",
              },
              {
                year: "2015",
                title: "Expansion",
                description: "Expanded operations to 5 major cities",
              },
              {
                year: "2023",
                title: "Innovation",
                description: "Launched sustainable design solutions",
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-8 rounded-xl"
              >
                <div className="text-blue-500 text-4xl font-bold mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-400">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Directors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Leadership
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the visionaries behind jbs Designs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {directors.map((director, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl overflow-hidden"
              >
                <div className="aspect-[16/9]">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {director.name}
                  </h3>
                  <p className="text-blue-500 mb-4">{director.role}</p>
                  <p className="text-gray-400">{director.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Architects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The talented professionals who bring our visions to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architects.map((architect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-xl overflow-hidden"
              >
                <div className="aspect-square">
                  <img
                    src={architect.image}
                    alt={architect.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {architect.name}
                  </h3>
                  <p className="text-blue-500 mb-3">{architect.role}</p>
                  <p className="text-gray-400 text-sm">{architect.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white mb-8">
                Get in Touch
              </h2>

              <div className="flex items-start space-x-4">
                <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-1">Visit Us</h3>
                  <p className="text-gray-400">
                    123 Design Street, Creative District
                    <br />
                    Bengaluru,Karnataka 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-1">Email Us</h3>
                  <a
                    href="mailto:info@jbsdesigns.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@jbsdesigns.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-blue-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-1">Call Us</h3>
                  <a
                    href="tel:+919355963892"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +91 93559 63892
                  </a>
                </div>
              </div>

              <div className="flex space-x-6 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803752859509!2d72.8270803!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e123f8d27b%3A0x5a7fc44f5e8a4e4a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645678901234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
