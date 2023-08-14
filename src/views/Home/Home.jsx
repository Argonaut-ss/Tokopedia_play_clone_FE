import React from "react";
import { Box, FormControl, Input} from "@chakra-ui/react";
import CardVideo from "../../components/CarVideo/CardVideo";
import CategoryList from "../../components/CategoryList/CategoryList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  const handleInputSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchVideos();
  };

  const getDataFromCategoryList = (data) => {
    setVideos(data);
  };

  const fetchVideos = async () => {
    try {
      const url = search
        ? `${process.env.REACT_APP_SERVER_URL}/videos?search=${search}`
        : `${process.env.REACT_APP_SERVER_URL}/videos`;
      const response = await fetch(url);
      const data = await response.json();
      setVideos(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Box padding={3}>
       <Box h="20%" w="100%" padding={3}>
        <form onSubmit={handleSubmit}>
          <Input
            variant="outline"
            placeholder="Search"
            color="white"
            marginBottom={2}
            marginTop={3}
            size="md"
            borderRadius={5}
            type="text"
            onChange={handleInputSearch}
          />
        </form>
      </Box>
      <Box marginTop={5}>
        <CategoryList getData={getDataFromCategoryList} />
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
            onClick={() =>
              navigate("/detail", {
                state: {
                  videoId: video.id,
                  videoUrl: video.videoUrl,
                },
              })
            }
          />
        ))}
      </Box>
    </Box>
  );
}

export default Home;
