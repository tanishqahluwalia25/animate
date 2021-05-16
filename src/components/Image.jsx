import styled from "styled-components";

const Img = styled.img`
  /* position: absolute; */
  height:5rem;
`;
const Text = styled.div`
  position: relative;
  top: 0px;
  padding: 1rem;
  /* display: hidden; */
  background: #00000051;
  height: 100%;
  width: 100%;
  color: #fff;
  font-size: 2rem;
`;

const Image = ({ img, text }) => {
  return (
    <div>
      <Img src={img} alt="" />
      {/* <Text>{text}</Text> */}
    </div>
  );
};

export default Image;
