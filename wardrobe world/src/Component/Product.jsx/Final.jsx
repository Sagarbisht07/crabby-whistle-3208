import React from "react";

let Navgate = () => {
  window.location.href = "/";
};
const Final = () => {
    setTimeout(Navgate,3000)
  return (
    <div
      style={{
        width: "60%",
        height: "100vh",
        margin: "auto",
        padding: "5px",
        marginTop: "2rem",
        marginBottom: "-7rem",
      }}
    >
      <img
        src="https://cdn.dribbble.com/users/2139038/screenshots/4434155/ui-animation.gif"
        alt="p"
      />
    </div>
  );
};

export default Final;
