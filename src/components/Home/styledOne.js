import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  height: 95vh;
`;
export const MainLeftCont = styled.ul`
  background-color: ${(props) => (props.isLight ? "#ffffff" : "#313131")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  padding: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
`;
export const MainRightCont = styled.div`
  background-color: ${(props) => (props.isLight ? "#f9f9f9" : "#181818")};
  display: flex;
  width: 85vw;
  flex-direction: column;

  overflow-y: scroll;
`;
export const SearchEngine = styled.input`
  background-color: transparent;
  border: 1px solid ${(props) => (props.isLight ? "#cccccc" : "#606060")};
  padding: 4px 8px;
  font-size: 10px;
  color: ${(props) => (props.isLight ? "#181818" : "#ffffff")};

  font-weight: 500;
  height: 25px;
  width: 20vw;
`;
export const SearchIconCont = styled.label`
  background-color: ${(props) => (props.isLight ? "#cccccc" : "#424242")};

  color: ${(props) => (props.isLight ? "#313131" : "#cccccc")};

  border: 1px solid ${(props) => (props.isLight ? "#cccccc" : "#606060")};
  padding: 4px 8px;
  font-size: 10px;

  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconCont = styled.li`
  color: ${(props) => (props.isLight ? "#35383f" : "#f1f1f1")};

  color: ${(props) => (props.one ? "red" : null)};

  background-color: ${(props) => (props.one ? "#e2e8f0" : null)};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 8px 0px;
`;
export const MainHeadings = styled.h1`
  color: ${(props) => (props.isLight ? "#35383f" : "#f1f1f1")};
  color: ${(props) => (props.one ? "#080808" : null)};
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
`;

export const LowerLeftCont = styled.div`
  color: ${(props) => (props.isLight ? "#1e293b" : " #ebebeb")};
`;

export const NoSearchHeading = styled.h1`
  color: ${(props) => (props.isLight ? "#231f20" : "#ffffff")};
  font-size: 16px;
  font-weight: 500;
`;
export const NoSearchPara = styled.p`
  color: ${(props) => (props.isLight ? "#383838" : "#909090")};
  font-size: 12px;
  font-weight: 500;
`;
