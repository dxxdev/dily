import React from "react";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const a = useParams();
  console.log(a);
  return <div>CategoryProducts</div>;
};

export default CategoryProducts;
