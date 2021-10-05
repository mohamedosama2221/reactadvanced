import React from "react";
import { AwesomeLink, Link } from "./Components/Button.style";
import Button from "./Components/Button";

const Styled = () => {
  return (
    <div>
      <Button bg="#fff" color="gray" children="Button 1" />
      <Button bg="#fff" color="gray" children="Button 1" />
      <Button color="white" children="hello World" />
      <Link color="#555" as="a">
        Inherited
      </Link>
      <Button bg="#fff" color="gray" children="Button 1" mainButton />
      <AwesomeLink href="http://www.google.com">Link</AwesomeLink>
    </div>
  );
};

export default Styled;
