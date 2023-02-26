import React from "react";

const About = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        marginTop: "2rem",
        marginBottom: "2rem",
        cursor: "pointer",
      }}
    >
      <img
        src="about.png"
        alt="about"
        width={{ base: "100%", md: "50%", lg: "50%" }}
      />
    </div>
  );
};

export default About;
