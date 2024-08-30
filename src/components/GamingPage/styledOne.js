import styled from "styled-components";

export const MainHeading = styled.h1`
  color: ${(props) => (props.isLight ? "#231f20" : "#f1f5f9")};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0px;
`;

export const MiniOne = styled.p`
  color: #94a3b8;
  font-size: 12px;
  font-weight: 500;
  margin-top: 6px;
`;
