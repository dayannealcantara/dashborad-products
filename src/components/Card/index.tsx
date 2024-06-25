
import { CardContainer, CardTitle, CardValue } from "./style";

interface CardProps {
  title: string;
  value: string | number;
}

const Card = ({ title, value }: CardProps) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardValue>{value}</CardValue>
  </CardContainer>
);

export default Card;
