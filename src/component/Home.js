import React from "react";

const Home = (props) => {
  return (
    <div className="home">
      <button onMouseEnter={props.handleMouseEnter}>
        <span>Select</span>
        <i
          className={
            // This font awesome icon is also known as "fa-Angle Down" and "fa-angle-right"
            props.isShow ? "fa fa-solid fa-angle-down" : "fa fa-solid fa-angle-right"
          }
        ></i>
      </button>
    </div>
  );
};

export default Home;