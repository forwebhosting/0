import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/featuresData";
import "./Features.css";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      {/* <Title title="Features" des="What I Do" /> */}
      <Title title="Features" />
      <h1 className="whatican">
        <span>w</span>
        <span>h</span>
        <span>a</span>
        <span>t</span>
        <span>_</span>
        <span>i</span>
        <span>c</span>
        <span>a</span>
        <span>n</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
