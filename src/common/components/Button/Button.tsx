import styled from "styled-components";
import { HTMLProps, forwardRef } from "react";

export type ButtonVariants = "primary" | "secondary";

type BaseButtonProps = Pick<
  HTMLProps<HTMLButtonElement>,
  "className" | "disabled" | "id" | "style" | "type" | "onClick"
>;
type ButtonProps = BaseButtonProps & {
  label: string;
  variant?: ButtonVariants;
};

const ButtonStyled = styled.button`
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;

  label {
    font-size: 16px;
    font-weight: 400;
  }

  &:hover {
    filter: brightness(90%);
  }
`;

const backgroundMap: { [K in ButtonVariants]: string } = {
  primary: "blue",
  secondary: "ccc",
};
const colorMap: { [K in ButtonVariants]: string } = {
  primary: "white",
  secondary: "black",
};

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      label,
      style,
      type = "button",
      variant = "primary",
      ...rest
    } = props;

    const background = backgroundMap[variant];
    const color = colorMap[variant];

    return (
      <ButtonStyled ref={ref} {...rest} style={{ ...style, background, color }}>
        {label}
      </ButtonStyled>
    );
  }
);
