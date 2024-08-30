import styled from "styled-components";

export const MainHeading = styled.h1`
  color: ${(props) => (props.isLight ? "#1e293b" : "#f9f9f9")};
  font-size: 14px;
  font-weight: 500;
  height: 1.7;
  margin-bottom: 4px;
`;
export const SubHeading = styled.p`
  color: ${(props) => (props.isLight ? "#1e293b" : "#cccccc")};
  font-size: 12px;
  font-weight: 400;
  margin: 4px 0px;
  margin-right: 4px;
`;
