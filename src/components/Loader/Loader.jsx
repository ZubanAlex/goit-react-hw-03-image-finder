import React from "react";
import Spinner from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <Spinner
      className={styles.loader}
      type="ThreeDots"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};

export default Loader;
