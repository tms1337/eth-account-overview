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
    width: "350px",
    height: "25px"
  },
  "@media (max-width: 600px)": {
    img: {
      width: "150px"
    }
  }
});

export default Loader;
