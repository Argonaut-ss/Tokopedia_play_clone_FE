import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

function CardProduct() {
  return (
    <Card maxW="220px" h="350px" marginBottom={5} marginTop={5}>
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Product Image"
        height={190}
        borderTopRightRadius={8}
        borderTopLeftRadius={8}
      />
      <CardBody>
        <Flex
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <Box>
            <Text fontSize={14} marginBottom={2}>
              Rexus Mouse Gaming Xierra G23
            </Text>
            <Text fontWeight={800}>Rp105.000</Text>
          </Box>
          <Button
            variant="outline"
            borderColor="tokopedia.green.primary"
            color="tokopedia.green.primary"
          >
            Beli Sekarang
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default CardProduct;
