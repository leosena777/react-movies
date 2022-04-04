import { Container, Content, Image, Title } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
}

const Card = ({ id, title, imageUrl }: CardProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={`https://image.tmdb.org/t/p/w500${imageUrl}`} />
      <Content>
        <Title>{title}</Title>
        <Button onClick={() => navigate(`details/${id}`)}>Detalhes</Button>
      </Content>
    </Container>
  );
};

export default Card;
