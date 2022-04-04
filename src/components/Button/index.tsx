import { ButtonBase } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return <ButtonBase {...props} />;
}
