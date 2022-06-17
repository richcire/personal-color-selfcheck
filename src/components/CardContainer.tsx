import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { result } from "../Result";
import { ICard } from "../ResultsSample";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  height: 60%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

const Card = styled.div`
  height: 90%;
  border-radius: 20px;
  width: 18%;
  background-color: whitesmoke;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const CardImg = styled.img`
  border-radius: 20px;
  height: 50%;
  width: 100%;
`;
const CardBody = styled.div`
  padding: 10px;
  overflow-y: scroll;
  font-size: 1rem;
  line-height: normal;
`;

function CardContainer() {
  const resultData = useRecoilValue(result);

  const cardDataArray: ICard[] = [
    resultData.cardOne,
    resultData.cardTwo,
    resultData.cardThree,
    resultData.cardFour,
    resultData.cardFive,
  ];

  return (
    <Container>
      {cardDataArray.map((card, index) => (
        <Card key={index}>
          <CardImg src={card.cardImg} />
          <CardBody>{card.cardContent}</CardBody>
        </Card>
      ))}
    </Container>
  );
}

export default CardContainer;
