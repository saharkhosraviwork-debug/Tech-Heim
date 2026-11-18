import { useState } from "react";
import LandingPage from "./components/pages/landing/LandingPage";
import Container from "./components/common/container";
import Footer from "./components/layout/footer/Footer";

export default function App() {
  return (
    <>
    <Container>
      <LandingPage/>
    </Container>
     <Footer/>
     </>
  );
}
