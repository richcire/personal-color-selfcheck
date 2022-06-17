import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";
import {
  fallWarmData,
  springWarmData,
  summerCoolData,
  winterCoolData,
} from "../ResultData";

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

const Card = styled.div``;

function ResultPage() {
  const { id } = useParams();

  let koreanResult = "봄 웜";
  let explanation = "";

  if (id === "springWarm") {
    koreanResult = "봄 웜";
    explanation = springWarmData.explanation;
  } else if (id === "summerCool") {
    koreanResult = "여름 쿨";
    explanation = summerCoolData.explanation;
  } else if (id === "fallWarm") {
    koreanResult = "가을 웜";
    explanation = fallWarmData.explanation;
  } else {
    koreanResult = "겨울 쿨";
    explanation = winterCoolData.explanation;
  }

  return (
    <>
      <Intro>당신의 퍼스널 컬러 결과는...</Intro>
      <Result>{koreanResult}</Result>
      <Explanation>{explanation}</Explanation>

      <CardContainer></CardContainer>
    </>
  );
}

export default ResultPage;
