import React from "react";
import { createUseStyles } from "react-jss";

const Loader = () => {
  const styles = useStyles();

  return (
    <img
      className={styles.img}
      src="https://imgur.com/zZ1whKT.gif"
      alt="data is loading"
    />
  );
};

const useStyles = createUseStyles({
  img: {
    width: "250px",
    height: "25px"
  }
})

export default Loader;
