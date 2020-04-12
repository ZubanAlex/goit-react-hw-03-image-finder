import React from "react";
import T from "prop-types";

import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ img, onGetFullUrl }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={img.previewURL}
        alt={img.id}
        className={styles.ImageGalleryItemImage}
        onClick={onGetFullUrl}
      />
    </li>
  );
};

ImageGalleryItem.ptopTypes = {
  img: T.object.isRequired,
  onGetFullUrl: T.func.isRequired,
};
export default ImageGalleryItem;
