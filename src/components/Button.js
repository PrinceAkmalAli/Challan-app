import React from 'react';
import styles from './css/Button.module.css';

export default function Button({ text , onClick, style }) {
    return (
        <button
            className={styles.button}
            onClick={onClick}
            style={style}
        >
            {text}
        </button>
    );
}
