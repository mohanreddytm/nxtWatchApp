import styled from "styled-components";

const MainContainer = styled.ul`
  background-color: ${(props) => (props.isLight ? "#f9f9f9" : "#181818")};
  display: flex;
  width: 85vw;
  flex-wrap: wrap;
  align-items: center;
  overflow-y: scroll;
  margin: 0px;
`;

export default MainContainer;
