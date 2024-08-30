import styled from "styled-components";

export const InitialCont = styled.div`
  background-color: ${(props) => (props.isLight ? "#f9f9f9" : "#212121")};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const MainCont = styled.div`
  background-color: ${(props) => (props.isLight ? "#ffffff" : "#0f0f0f")};
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.19);
`;
export const LabelElementFirst = styled.label`
  color: ${(props) => (props.isLight ? "#475569" : "#ffffff")};
  font-size: 10px;
  font-weight: 500;
  margin-bottom: 4px;

  margin-top: 16px;
`;
export const InputContent = styled.input`
  background-color: transparent;
  border: 1.5px solid ${(props) => (props.isLight ? "#e2e8f0" : "#313131")};
  font-size: 12px;
  color: ${(props) => (props.isLight ? "#000000" : "#ffffff")};
  font-weight: 400;
  border-radius: 2px;
  padding: 8px 16px;
`;
export const LabelShow = styled.label`
  color: ${(props) => (props.isLight ? "#0f0f0f" : "#ffffff")};
  font-size: 10px;
  font-weight: 500;
  margin-top: 0px;
  margin-left: 0px;
`;
