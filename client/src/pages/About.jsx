import React from "react";
import PageDesc from "@/layout/PageDesc";
import Member from "@/assets/images/Member.jpg";

function About() {
  return (
    <div>
      <PageDesc title={"About Us"} route={null} />
      <div className="flex flex-col h-fit items-center bg-primaryColor gap-[2rem] pt-[4.375rem] pb-[3.125rem] px-[20rem]">
        <img
          src={Member}
          alt=""
          className="h-[20rem] w-[45rem] object-contain"
        />
        <p className="text-secondaryColor font-semibold text-[1.2 rem] text-center">
          We are a team of students who share a deep passion for food and
          exploration. As a food enthusiasts, we believe that every meal tells a
          story and every dish offers a glimpse into the culture and creativity
          of its origin. Explor-Eats was born from our desire to connect people
          with incredible dining experiences, from hidden gems in the city to
          iconic dishes everyone should try. Our mission is simple: to make it
          easier for you to find amazing food, discover unique eateries, and
          share your love for all things culinary. Whether you're a casual diner
          or a seasoned foodie, Explor-Eats is here to guide you on a flavorful
          journey you won’t forget.
        </p>
      </div>
    </div>
  );
}

export default About;
