import { motion } from "framer-motion";
import styled from "styled-components";
import Masonry from "react-masonry-css";
import freshers from "../assets/freshers.jpg";
import { useEffect, useState } from "react";
import data from "../data/gallery";

const Image = styled(motion.img)`
  /* max-width: 300px; */
  margin: auto;
  /* height: 100%; */
  width: 90%;
  object-fit: cover;
  /* padding: 1rem; */
  padding: 1rem 0;
  margin: auto;
  margin-left: 2rem;
  border-radius: 15px;
`;

const Text = styled(motion.text)`
  position: relative;
  color: white;
  top: 0px;
`;

const ImageContainer = styled(motion.div)``;

const Gallary = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    setScrolling(true)
    return () => window.removeEventListener("scroll", onScroll);


  }, [scrollTop]);
  const imgTrans = {
    visible: { opacity: scrolling ? 1 : 0, y: scrolling ? 0 : 10 },
    hidden: { opacity: scrolling ? 0 : 1, y: scrolling ? 10 : 0 },
  };
  return (
    <div
      style={{
        background: "black",
      }}
    >
      <p className="display-3 text-center text-light">Some memories</p>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item, index) => (
          <ImageContainer>
            <Image
              src={item.img}
              variants={imgTrans}
              animate="visible"
              initial="hidden"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              transition={{ duration: 1 }}
            />
            {/* <Text>{item.text}</Text> */}
          </ImageContainer>
        ))}
      </Masonry>
    </div>
  );
};

export default Gallary;
