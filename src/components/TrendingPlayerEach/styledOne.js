import styled from "styled-components";

export const MainContainer = styled.li`
  display: flex;
  width: 70vw;
  margin: 16px 0px;
`;

export const MainHeading = styled.h1`
  color: ${(props) => (props.isLight ? "#181818" : "#ebebeb")};
  font-size: 16px;
  font-weight: 500;
`;

export const MiniOnes = styled.p`
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0px;
`;
