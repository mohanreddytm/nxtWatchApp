import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => (props.isLight ? "#f9f9f9" : "#181818")};
  display: flex;
  width: 85vw;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const TrendingContainer = styled.div`
  background-color: ${(props) => (props.isLight ? "#f1f5f9" : "#212121")};
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const TrendingHeading = styled.h1`
  color: ${(props) => (props.isLight ? "#080808" : "#f4f4f4")};
  font-size: 24px;
  font-weight: 600;
`;

export const TrendingIconCont = styled.div`
  background-color: ${(props) => (props.isLight ? "#e2e8f0" : "#181818")};
  padding: 16px 18px;
  margin-left: 16px;
  margin-right: 12px;
  border-radius: 26px;
`;
