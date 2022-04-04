import { Container } from "./styles";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return <Container>{title}</Container>;
};

export default Header;
