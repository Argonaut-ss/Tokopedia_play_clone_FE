import { Button } from "@chakra-ui/react";
import React from "react";

function ButtonCategory(props) {
  const condition = {
    active: {
      color: "tokopedia.green.primary",
      borderColor: "tokopedia.green.primary",
      bg: "tokopedia.green.second",
    },
    normal: {
      color: "white",
    },
  };

  const isActive = props.isActive ? condition.active : condition.normal;

  return (
    <Button
      {...props}
      {...isActive}
      variant="outline"
      borderRadius={16}
      _hover={{ bg: "none" }}
      _active={{
        color: "tokopedia.green.primary",
        borderColor: "tokopedia.green.primary",
        bg: "tokopedia.green.second",
      }}
    >
      {props.children}
    </Button>
  );
}

export default ButtonCategory;