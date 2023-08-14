import React, { useState } from "react";
import ButtonCategory from "../ButtonCategory/ButtonCategory";

function CategoryList(props) {
  const categories = props.categories ?? ["technology", "fashion", "games"];
  const [isActive, setIsActive] = useState(0);

  const buttonHandle = (key, category) => {
    setIsActive(key);
    fetchVideosByCategory(category);
  };

  const fetchVideosByCategory = async (category) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/videos?category=${category}`
      );
      const data = await response.json();
      props.getData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {categories.map((category, key) => (
        <ButtonCategory
          isActive={isActive === key}
          onClick={() => buttonHandle(key, category)}
          marginRight="2"
          key={key}
        >
          {category}
        </ButtonCategory>
      ))}
    </>
  );
}

export default CategoryList;
