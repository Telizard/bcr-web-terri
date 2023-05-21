import { Hero, Footer } from "../../components";

import { Features } from "./components/Features";
import { WhyUs } from "./components/WhyUs";
import { Testimonial } from "./components/Testimonial";
import { Cta } from "./components/Cta";
import { Faq } from "./components/Faq";
import { Sidebar } from "./components/Sidebar";

export const Home = () => {
  return (
    <div className="pb-5">
      <Hero />
      <Features />
      <WhyUs />
      <Testimonial />
      <Cta />
      <Faq />
      <Footer />
      <Sidebar />
    </div>
  );
};
