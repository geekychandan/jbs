import  Hero  from "./components/Hero";
import React from "react";
import Tagline from "./components/Tagline";
import Services from "./components/Services";
import ProjectGallery from "./components/ProjectGallery";
import ClientLogos from "./components/ClientLogos";
import EstimationSteps from "./components/EstimationSteps";
import SolutionsSection from "./components/SolutionsSection";
import Contact from "./components/Contact";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import List from "./components/List";
import NavBar from "./components/NavBar";
import RoomTransformation from "./components/RoomTransformation";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero/>
      <List/>
       <Tagline/>
      <Services/> 
      <ProjectGallery/>
      <ClientLogos/>
      <EstimationSteps/>
      <SolutionsSection/>
      <RoomTransformation
        beforeImage="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        afterImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
        title="Experience the Transformation"
      />
      <VideoSection/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
