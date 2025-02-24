import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";


// Lazy load the components
const Header = React.lazy(() => import("./sections/Header/Header"));
const About = React.lazy(() => import("./sections/About/About"));
const Stats = React.lazy(() => import("./sections/Numbers/Stats"));
const Services = React.lazy(() => import("./sections/Services/Services"));
const Faqs = React.lazy(() => import("./sections/FAQs/Faqs/Faqs"));
const Testimonials = React.lazy(() => import("./sections/testimonials/Testimonials"));
const Contact = React.lazy(() => import("./sections/Contact/Contact"));
const Footer = React.lazy(() => import("./sections/Footer/Footer"));
const Overlay = React.lazy(() => import("./components/Overlay"));

import "./index.css"; // Keep the styles as is
import LocationList from "./sections/Gallery/LocationList";
import LocationGallery from "./sections/Gallery/LocationGallery";

const Home = () => (
  <>
    <Suspense fallback={<Loading />}>
      <Overlay />
    </Suspense>

    <Suspense fallback={<Loading />}>
      <Header />
    </Suspense>

    <Suspense fallback={<Loading />}>
      <About />
    </Suspense>

    <Suspense fallback={<Loading />}>
      <Stats />
    </Suspense>
   

    <Suspense fallback={<Loading />}>
      <Services />
    </Suspense>

    <Suspense fallback={<Loading />}>
      <LocationList />
    </Suspense>
    
    <Suspense fallback={<Loading />}>
      <Faqs />
    </Suspense>

    <Suspense fallback={<Loading />}>
      <Testimonials />
    </Suspense>

    <Suspense fallback={<Loading />}>
      <Contact />
    </Suspense>

    <Suspense fallback={<Loading />}>
      <Footer />
    </Suspense>
  </>
);

export const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/location/:name" element={<LocationGallery />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
