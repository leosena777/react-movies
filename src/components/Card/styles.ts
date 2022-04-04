import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 1px 12px #0000004d;
  border: 1px solid #ccc;
  padding: 8px;
  transition: 0.4s;
  transform: scale(1);

  &:hover {
    transform: scale(1.05);
    z-index: 100;
  }
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 12px;
`;

export const Title = styled.p`
  font-size: 22px;
  text-align: center;
  margin-bottom: 22px;
  color: #6a2061;
  font-weight: 200;
`;
