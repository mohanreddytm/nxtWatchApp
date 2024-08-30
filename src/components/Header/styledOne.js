import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => (props.isLight ? "#ffffff" : "#313131")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px 0px 32px;
  min-width: 350px;
`;

export const LogoutButton = styled.button`
  color: ${(props) => (props.isLight ? "#3b82f6" : "#f1f6f9")};
  background-color: transparent;
  border: 1.5px solid ${(props) => (props.isLight ? "#3b82f6" : "#f1f6f9")};
  border-radius: 2px;
  font-weight: 500;

  padding: 4px 8px;
`;

export const PopupContainer = styled.div`
  background-color: ${(props) => (props.isLight ? "#f9f9f9" : "#212121")};
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
`;

export const PopupHeading = styled.h1`
  color: ${(props) => (props.isLight ? "#3b82f6" : "#ffffff")};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 16px;
`;
