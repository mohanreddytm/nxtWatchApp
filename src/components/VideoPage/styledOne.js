import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${(props) => (props.isLight ? "#f9f9f9" : "#181818")};
  display: flex;
  flex-direction: column;
  width: 85vw;
  align-items: center;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  color: ${(props) => (props.isLight ? "#181818" : "#f1f1f1")};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
  margin-top: 24px;
`;

export const ViewsTimeCont = styled.div`
  color: #64748b;
  display: flex;
  align-items: center;

  font-size: 12px;
  font-weight: 500;
`;

export const LikeDislikeCont = styled.ul`
  color: ${(props) => (props.isLight ? "#475569" : "#94a3b8")};
  display: flex;
  font-size: 12px;
  font-weight: 500;
  margin-right: 0px;
  padding-right: 0px;

  align-items: center;
  padding: 0px;
  margin: 0px;
`;

export const ProfileName = styled.h1`
  color: ${(props) => (props.isLight ? "#1e293b" : "#e2e8f0")};
  font-size: 12px;
  font-weight: 500;
  margin-top: 0px;
`;

export const Subscribers = styled.p`
  color: #64748b;
  font-size: 10px;
  font-weight: 400;
  margin-top: 0px;
  padding-top: 0px;
`;
export const Description = styled.p`
  color: ${(props) => (props.isLight ? "#475569" : "#cbd5e1")};
  font-size: 12px;
  font-weight: 500;
`;
