import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  /* display: flex;
  justify-content: baseline;
  justify-items: center;
  row-gap: 45px;
  column-gap: 60px;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fit, 40%);
  row-gap: 45px;
  column-gap: 55px;
  justify-content: center;
`;

const Home = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Home;
