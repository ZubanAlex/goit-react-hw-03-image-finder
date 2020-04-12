import React, { Component } from "react";
import T from "prop-types";

import styles from "./Modal.module.css";

class Modal extends Component {
  static propTypes = {
    onClose: T.func.isRequired,
    src: T.string.isRequired,
  };

  state = {};

  componentWillMount() {
    window.addEventListener("keydown", this.closeOnEscape);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeOnEscape);
  }

  closeOnEscape = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  handelCloseModal = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { src } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handelCloseModal}>
        <div className={styles.Modal}>
          <img src={src} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
