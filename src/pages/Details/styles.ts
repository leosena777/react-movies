import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 75px 0px;
`;

export const Title = styled.h1`
  position: absolute;
  bottom: 24px;
  color: #fff;
  z-index: 100000;
  text-shadow: 1px 1px 5px #000;
  font-weight: 700;
  text-align: center;
  font-size: 55px;
  width: 100%;
`;

export const BoxImage = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: inset 0 0px 97px 0 #000;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const Description = styled.p`
  font-size: 28px;
  font-weight: 200;
  text-align: center;
`;

export const Vote = styled.div`
  text-align: center;
  position: absolute;
  bottom: 10px;
  color: #fff;
  width: 100%;
  z-index: 1000000;
  font-size: 17px;
  text-shadow: 1px 1px 1px #000;
`;
