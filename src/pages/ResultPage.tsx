import { useParams } from "react-router-dom";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";

const Intro = styled.h2``;
const Result = styled.div``;
const Explanation = styled.div``;

const Card = styled.div``;

function ResultPage() {
  const { result } = useParams();

  return (
    <>
      <Intro>당신의 퍼스널 컬러 결과는...</Intro>
      <Result>봄 웜</Result>
      <Explanation>explanation</Explanation>

      <CardContainer></CardContainer>
    </>
  );
}

export default ResultPage;
