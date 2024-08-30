import styled from "styled-components";

export const NoVideosHeading = styled.h1`
  color: ${(props) => (props.isLight ? "#080808" : "#ffffff")};
  font-size: 16px;
  font-weight: 600;
  margin-top: 26px;
  margin-bottom: 0px;
`;

export const NoVideosPara = styled.p`
  color: ${(props) => (props.isLight ? "#475569" : "#f9f9f9")};
  font-size: 14px;
  font-weight: 500;
`;
