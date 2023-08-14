import React, { useState } from "react";
import ButtonCategory from "../ButtonCategory/ButtonCategory";

function CategoryList(props) {
  const categories = props.categories ?? ["Live", "Explore", "Terbaru"];
  const [isActive, setIsActive] = useState();

  const buttonHandle = (key) => {
    setIsActive(key);
  };
  return (
    <>
      {categories.map((category, key) => (
        <ButtonCategory
          isActive={isActive === key}
          onClick={() => buttonHandle(key)}
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
