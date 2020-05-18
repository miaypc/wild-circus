import React from "react";
import Nav from "../Components/Nav";
import styled from "styled-components";
import bg from "../Img/bg.jpg";
import Gallery from "../Components/Gallery";
import Footer from "../Components/Footer";

const BackgroundImg = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${bg});
  height: 50vh;
`;

function HomePage() {
  return (
    <div>
      <Nav />
      <BackgroundImg />
      <Gallery />
      <Footer />
    </div>
  );
}

export default HomePage;
