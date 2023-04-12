import React from 'react';
import styles from './Card.module.css';
import { CardProps } from './CardTypes';

const Card: React.ComponentType<CardProps> = (props) => {
  const { children, className } = props;

  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
