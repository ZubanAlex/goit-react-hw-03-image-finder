import React from "react";
import T from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ imgArray, onGetFullUrl, loadMoreIMG, isLoading }) => {
  return (
    <>
      <ul className={styles.ImageGallery}>
        {imgArray.map((img) => {
          return (
            <ImageGalleryItem
              key={img.id}
              img={img}
              onGetFullUrl={() => onGetFullUrl(img.largeImageURL)}
            />
          );
        })}
      </ul>
      {isLoading && <Spinner />}
      <Button onLoadMoreIMG={loadMoreIMG} />
    </>
  );
};

ImageGallery.propTypes = {
  imgArray: T.array.isRequired,
  onGetFullUrl: T.func.isRequired,
  loadMoreIMG: T.func.isRequired,
  isLoading: T.bool.isRequired,
};

export default ImageGallery;
