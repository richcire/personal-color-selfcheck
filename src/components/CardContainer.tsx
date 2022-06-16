import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  height: 60%;
  width: 100%;
`;

const Card = styled.div`
  height: 90%;
  border-radius: 20px;
`;

const CardImg = styled.img`
  border-radius: 20px;
  height: 50%;
`;
const CardBody = styled.div``;

function CardContainer() {
  return (
    <Container>
      {Array.from({ length: 5 }, (x, i) => i).map((element) => (
        <Card key={element}>
          <CardImg src="https://www.ifamily.co.kr/image/arda/result/graph_spring_wl.jpg" />
          <CardBody>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardBody>
        </Card>
      ))}
    </Container>
  );
}

export default CardContainer;
