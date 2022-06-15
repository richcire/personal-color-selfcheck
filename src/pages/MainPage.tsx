import { useState } from "react";
import styled from "styled-components";
import { questions } from "../QuestionData";

const Container = styled.div`
  height: 70vh;
  width: 80vw;
  background-color: #ecf0f1;

  bottom: 0;
  position: fixed;
  border-radius: 100px;
  text-align: center;
`;

const Question = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 15px;
  font-size: 5rem;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BtnContainer = styled.div`
  display: flex;
  height: 40%;
  line-height: normal;
  align-items: center;
  justify-content: space-evenly;
`;
const BtnOne = styled.div`
  font-size: 2rem;
`;
const BtnTwo = styled.div`
  font-size: 2rem;
`;

type questionIdxType =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14;

function MainPage() {
  const [questionIdx, setQuestionIdx] = useState<questionIdxType>(1);

  const onAnswerBtnClicked = (BtnType: "a" | "b") => {
    const nextQuestionIdx = questions[questionIdx]["A"][BtnType][1];
    if (typeof nextQuestionIdx === "number") {
      setQuestionIdx(nextQuestionIdx as questionIdxType);
    } else {
      console.log(nextQuestionIdx);
    }
  };

  return (
    <Container>
      <Question>{questions[questionIdx]["Q"]}</Question>
      <BtnContainer>
        <BtnOne onClick={() => onAnswerBtnClicked("a")}>one</BtnOne>
        <BtnTwo onClick={() => onAnswerBtnClicked("b")}>two</BtnTwo>
      </BtnContainer>
    </Container>
  );
}

export default MainPage;
