import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Contacto = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default Contacto;
