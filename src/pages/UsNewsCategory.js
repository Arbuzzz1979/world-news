import React from "react";
//Redux
import { useSelector } from "react-redux";
//Styled
import { NewsSection } from "../style/Style";
//Animations
import { topNewsAnimation } from "../animations/pageAnimation";

const UsNewsCategory = () => {
  const section = useSelector((state) => state.app.section);
  return (
    <NewsSection
      exit="exit"
      variants={topNewsAnimation}
      initial="hidden"
      animate="show"
    >
      UsNewsCategory : {section}
    </NewsSection>
  );
};

export default UsNewsCategory;
