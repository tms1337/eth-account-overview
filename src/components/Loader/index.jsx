import React from "react";

const Loader = () => {
  return (
    <img
      style={styles.img}
      src="https://imgur.com/zZ1whKT.gif"
      alt="data is loading"
    />
  );
};

const styles = {
  img: {
    width: "250px",
    height: "25px"
  }
}

export default Loader;
