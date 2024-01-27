import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, onImageClick }) => (
  <li
    className={styles.ImageGalleryItem}
    onClick={() => onImageClick(image.largeImageURL)}
  >
    <img
      src={image.webformatURL}
      alt={image.tags}
      className={styles['ImageGalleryItem-image']}
    />
  </li>
);

export default ImageGalleryItem;
