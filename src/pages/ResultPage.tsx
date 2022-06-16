import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";

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

  const [koreanResult, setKoreanResult] = useState("봄 웜");

  useEffect(() => {
    if (id === "summerCool") {
      setKoreanResult("여름 쿨");
    } else if (id === "fallWarm") {
      setKoreanResult("가을 웜");
    } else if (id === "winterCool") {
      setKoreanResult("겨울 쿨");
    }
  }, []);

  return (
    <>
      <Intro>당신의 퍼스널 컬러 결과는...</Intro>
      <Result>{koreanResult}</Result>
      <Explanation>explanation</Explanation>

      <CardContainer></CardContainer>
    </>
  );
}

export default ResultPage;
