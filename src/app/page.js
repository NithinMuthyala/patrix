import Companies from "@/components/Companies/Companies";
import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";




const Home = () => {
  return <>
  <Navbar/>
  <Hero/>
  <Companies/>
  <Services/>
  <Portfolio/>
  <ContactUs/>
  <Footer/>
  </>
};

export default Home;