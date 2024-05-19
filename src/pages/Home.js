import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import { Container } from "../global-styles";
import Services from "../components/Services/Services";
import { useNavigate } from "react-router-dom";
// Hero features content carousel
const Home = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  });
  return (
    <Container>
      <Hero />
      <Services />
    </Container>
  );
};

export default Home;
