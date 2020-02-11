import React from "react";

const Loader = () => {
  return (
    <img
      style={styles.img}
      src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
      alt="data is loading"
    />
  );
};

const styles = {
  img: {
    width: "50px"
  }
}

export default Loader;
