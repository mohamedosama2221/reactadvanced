import React from "react";
import { StyledButton, StyledButtonLabel } from "./Button.style";

const Button = ({ children, ...props }) => {
  // const { bg, color, children, mainButton } = props;
  return (
    <div>
      <StyledButton {...props}>
        {children}
        <StyledButtonLabel className="work">Color</StyledButtonLabel>
        <StyledButtonLabel work>Color</StyledButtonLabel>
      </StyledButton>
    </div>
  );
};

export default Button;
