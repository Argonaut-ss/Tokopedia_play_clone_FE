import React from "react";
import { Box } from "@chakra-ui/react";
import CardVideo from "../../components/CarVideo/CardVideo";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useEffect, useState } from "react";

function Home() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    console.log(process.env.REACT_APP_SERVER_URL);
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/videos`);
    const data = await response.json();
    setVideos(data.data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Box padding={3}>
      <Box marginTop={5}>
        <CategoryList />
      </Box>
      <Box>
        {videos.map((video, key) => (
          <CardVideo
            key={key}
            onlyAtLive={video.onlyAtLive}
            discountCoupon={video.discountCoupon}
            isLive={true}
            title={video.title}
            store={video.storeName}
            views={video.totalView}
            image={video.thumbnailUrl}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
