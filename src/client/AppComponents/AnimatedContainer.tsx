import styled, {keyframes} from "styled-components";

// Animation for expanding
const expandAnimation = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;

// Animation for fading in children
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedContainer = styled.div`
  transform-origin: left;
  animation: ${expandAnimation} 500ms ease-out forwards;

  & > * {
    opacity: 0;
    animation: ${fadeInAnimation} 1s ease-out forwards;
    animation-delay: 500ms;
  }
`;

export default AnimatedContainer;
