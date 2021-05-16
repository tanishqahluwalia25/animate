import styled from "styled-components";
import { motion } from "framer-motion";

// images
import freshersPic from "../assets/freshers.jpg";
import Hero from "../components/Hero";
import Gallary from "../components/Gallary";
import Image from "../components/Image";

const Home = () => {
  return (
    <Main>
      {/* <Image img={freshersPic} text={'lorem ipsum'}/> */}
      <Hero />
      <Gallary />
    </Main>
  );
};

export default Home;

const Main = styled.div`
  background-image: ${(props) => props.img};
  background-size: cover;
  scroll-snap-type: mandatory;
  /* scroll-snap-points-y: repeat(300px); */
  scroll-snap-type: y mandatory;
`;
