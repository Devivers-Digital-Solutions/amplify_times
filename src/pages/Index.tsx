
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-genesis-black text-genesis-white">
      <Navigation />
      <Hero />
      {/* {/* <About /> */}
      <Services />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer /> */}
    </div>
  );
};

export default Index;
