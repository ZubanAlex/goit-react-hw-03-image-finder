import React, { Component } from "react";
import T from "prop-types";

import styles from "./Button.module.css";

class Button extends Component {
  static propTypes = {
    onLoadMoreIMG: T.func.isRequired,
  };

  render() {
    const loadMoreIMG = this.props.onLoadMoreIMG;
    return (
      <button type="button" className={styles.Button} onClick={loadMoreIMG}>
        Load more
      </button>
    );
  }
}

export default Button;
