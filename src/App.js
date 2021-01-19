import React from "react";
import useDropdown from "./useDropdown.jsx";

const shoe_list = ["Prada", "Jimmy Choos", "Nike", "Adidas"];
const hat_list = ["Knicks", "Jets", "Rockets", "Cowboys"];

const Component = () => {
  const [shoe, ShoeDropdown] = useDropdown("Shoes", "", shoe_list);
  const [hat, HatDropdown] = useDropdown("Hats", "", hat_list);
  return (
    <>
      <ShoeDropdown />
      <HatDropdown />
    </>
  );
};

export default Component;
