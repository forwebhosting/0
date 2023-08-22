import React from 'react';
import styled, { keyframes } from 'styled-components';

const blue = '#6EC3EC';
const white = '#FFFFFF';
const darkGray = 'rgba(50, 50, 50, 1)';

const Container = styled.div`
  font-size: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  color: ${white};
  text-align: center;
`;

const Bar = styled.div`
  height: 0.3em;
  width: 30em;
  border-radius: 10px;
  background: transparent;
  box-shadow: inset 0px 0px 8px ${darkGray};
  overflow: hidden;
  padding: 5px;
`;

const load = keyframes`
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
    float: right;
  }
`;

const Progress = styled.div`
  height: inherit;
  border-radius: inherit;
  width: 0;
  background: ${blue};
  animation: ${load} 3s linear infinite;
  animation-delay: 2s;
`;

const ComingSoon = () => {
  return (
    <Container>
      <h3>COMING SOON</h3>
      <Bar>
        <Progress></Progress>
      </Bar>
    </Container>
  );
};

export default ComingSoon;
