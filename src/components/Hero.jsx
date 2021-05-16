import styled from "styled-components";
import { motion } from "framer-motion";
import planet1 from "../images/planet1.svg";
import planet2 from "../images/planet2.svg";
import planet3 from "../images/planet3.svg";
import planet4 from "../images/planet4.svg";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #13131341; */
  scroll-snap-align: start;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc(100vw / 2-1300px / 2);

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  margin: auto;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 5ren;
  }

  p {
    margin: 0;
    font-size: 4rem;
    line-height: 1.1;
    text-align: left;
  }
`;
const Button = styled(motion.a)`
  padding: 1rem 3rem;
  border: none;
  font-size: 1rem;
  border: 2px solid white;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: white;
  box-sizing: border-box;
  text-decoration: none;
`;
const Image = styled(motion.img)`
  position: absolute;
  height: 100%;
  width: 100%;
  max-width: 250px;
  max-height: 250px;
`;
const ColumnRight = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section className="hero">
      <Container>
        <ColumnLeft>
          <motion.p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
            }}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            Hello Love!
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5, delay: 3 }}
          >
            Happy Birthday
          </motion.p>
          <Button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
              backgroundColor: "#67f6e7",
              border: "none",
              color: "black",
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { duration: 5, delay: 5 },
            }}
            href="/"
          >
            Get Started
          </Button>
        </ColumnLeft>

        <ColumnRight>
          <Image
            src={planet1}
            whileTap={{
              scale: 0.95,
            }}
            drag={true}
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
          />
          <Image
            src={planet2}
            whileTap={{
              scale: 0.65,
            }}
            drag={true}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          />
          <Image
            src={planet3}
            whileTap={{
              scale: 0.65,
            }}
            drag={true}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
          />
          <Image
            src={planet4}
            whileTap={{
              scale: 0.65,
            }}
            drag={true}
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
