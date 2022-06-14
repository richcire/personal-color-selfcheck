import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Title = styled.div`
  margin-top: 80px;
  font-size: 8em;
`;

const StartBtn = styled.button`
  margin-top: 300px;
  height: 130px;
  width: 250px;
  border-radius: 10px;
  font-size: 3em;
`;

function StartPage() {
  const navigate = useNavigate();
  const onStartBtnClicked = () => {
    navigate("/main");
  };

  return (
    <>
      <Title>퍼스널 컬러 자가진단</Title>
      <StartBtn onClick={onStartBtnClicked}>시작하기</StartBtn>
    </>
  );
}

export default StartPage;
