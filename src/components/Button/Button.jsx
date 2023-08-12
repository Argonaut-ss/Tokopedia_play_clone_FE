import React from "react";

function Button() {
  return (
    <Button
      color="white"
      variant="outline"
      borderRadius={16}
      _hover={{ bg: "none" }}
      _active={{
        color: "tokopedia.green.primary",
        borderColor: "tokopedia.green.primary",
        bg: "tokopedia.green.second",
      }}
    >
      Live
    </Button>
  );
}

export default Button;
