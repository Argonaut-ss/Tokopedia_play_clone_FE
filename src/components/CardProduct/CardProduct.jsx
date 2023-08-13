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

function CardProduct(props) {
  return (
    <Card maxW="220px" h="350px" marginBottom={5} marginTop={5}>
      <Image
        objectFit="cover"
        src={props.imageUrl}
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
              {props.title}
            </Text>
            <Text fontWeight={800}>{props.priceFormat}</Text>
          </Box>
          <Button
            variant="outline"
            borderColor="tokopedia.green.primary"
            color="tokopedia.green.primary"
            onClick={() => (window.location.href = props.productUrl)}
          >
            Beli Sekarang
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default CardProduct;
