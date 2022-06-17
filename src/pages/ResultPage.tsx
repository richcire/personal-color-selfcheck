import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";
import { result } from "../Result";
import {
  fallWarmData,
  springWarmData,
  summerCoolData,
  winterCoolData,
} from "../ResultsSample";

const Intro = styled.h2`
  padding-top: 20px;
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 2rem;
  height: 8%;
`;

const Result = styled.div`
  font-size: 5rem;
  height: 12%;
`;

const Explanation = styled.div`
  background-color: whitesmoke;
  width: 50%;
  font-size: 1.2rem;
  border-radius: 20px;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const GoBackBtn = styled.div`
  position: fixed;
  top: 5%;
  right: 5%;
`;

function ResultPage() {
  const { id } = useParams();
  const [resultData, setResultData] = useRecoilState(result);

  const navigate = useNavigate();

  let koreanResult = "봄 웜";
  let explanation = "";

  const onGoBackBtnClicked = () => {
    navigate("/");
  };

  if (id === "springWarm") {
    koreanResult = "봄 웜";
  } else if (id === "summerCool") {
    koreanResult = "여름 쿨";
    setResultData(summerCoolData);
  } else if (id === "fallWarm") {
    koreanResult = "가을 웜";
    setResultData(fallWarmData);
  } else {
    koreanResult = "겨울 쿨";
    setResultData(winterCoolData);
  }

  return (
    <>
      <Intro>당신의 퍼스널 컬러 결과는...</Intro>
      <Result>{koreanResult}</Result>
      <Explanation>{resultData.explanation}</Explanation>

      <CardContainer />
      <GoBackBtn onClick={onGoBackBtnClicked}>다시 하기</GoBackBtn>
    </>
  );
}

export default ResultPage;
