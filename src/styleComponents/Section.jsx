import styled from "styled-components";

const Section = styled.section`
  position: relative;
  & button {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
  }
`;
export default Section;
