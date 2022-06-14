import styled from "styled-components";

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

function MainPage() {
  return (
    <Container>
      <Question>Hello</Question>
      <BtnContainer>
        <BtnOne />
        <BtnTwo />
      </BtnContainer>
    </Container>
  );
}

export default MainPage;
