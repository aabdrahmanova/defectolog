import React, { useRef } from 'react';
import styles from './shopBlock.module.css';
import { useSpring, animated, useChain } from 'react-spring';

export const ShopBlock = () => {

    return (
        <div className={styles.mainBlock}>
           <h1 className="title">Магазин</h1>
        </div>
    )
}