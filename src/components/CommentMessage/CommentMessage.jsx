import { Box, Text } from "@chakra-ui/react";
import React from "react";

function CommentMessage(props) {
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
          {props.username}
        </span>
        {props.commentMessage}
      </Text>
    </Box>
  );
}

export default CommentMessage;
