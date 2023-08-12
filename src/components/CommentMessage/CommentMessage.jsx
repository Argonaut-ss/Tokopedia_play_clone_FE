import { Box, Text } from "@chakra-ui/react";
import React from "react";

function CommentMessage() {
  return (
    <Box display="inline-block" marginBottom={3}>
      <Text color="white" fontWeight="600" fontSize={12} display="inline-block">
        <span
          style={{
            color: "#07aa5b",
            fontWeight: "800",
            fontSize: "12px",
            display: "inline-block",
            marginRight: "12px",
          }}
        >
          Sam Syft
        </span>
        people its not nice to say someone has no friends, no one is spamming
        anymore and sorry was said
      </Text>
    </Box>
  );
}

export default CommentMessage;