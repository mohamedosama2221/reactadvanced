import React from "react";
import { StyledButton, StyledButtonLabel } from "./Button.style";

const Button = (props) => {
  const { bg, color, children, mainButton } = props;
  return (
    <div>
      <StyledButton bg={bg} color={color} mainButton={mainButton}>
        {children}
        <StyledButtonLabel className="work">Color</StyledButtonLabel>
        <StyledButtonLabel work>Color</StyledButtonLabel>
      </StyledButton>
    </div>
  );
};

export default Button;
