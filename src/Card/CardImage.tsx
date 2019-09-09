import * as React from "react";
import styles from "./Card.module.scss";

export interface CardImageProps {
  alt?: string;
  src: string;
}
const CardImage: React.FC<CardImageProps> = ({ alt, src }) => (
  <img src={src} alt={alt} className={styles.image} />
);

export default CardImage;
