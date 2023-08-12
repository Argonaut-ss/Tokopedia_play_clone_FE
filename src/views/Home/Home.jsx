import React from "react";
import { Box } from "@chakra-ui/react";
import CardVideo from "../../components/CarVideo/CardVideo";
import CategoryList from "../../components/CategoryList/CategoryList";

function Home() {
  return (
    <Box padding={3}>
      <Box marginTop={5}>
        <CategoryList />
      </Box>
      <Box>
        <CardVideo
          onlyAtLive={true}
          discountCoupon={true}
          isLive={true}
          title="Lukisan Antik"
          store="lukian terpercaya"
        />
        <CardVideo
          onlyAtLive={true}
          discountCoupon={true}
          isLive={true}
          title="Lukisan Antik"
          store="lukian terpercaya"
        />
      </Box>
    </Box>
  );
}

export default Home;