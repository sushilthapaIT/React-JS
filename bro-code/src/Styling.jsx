// 3 ways we can add style in react
// 1. EXTERNAL
// 2. MODULES
// 3. INLINE

import React from 'react';
import styles from '../Button/Button.module.css'; // Adjusted import path

function Styling() {
    return (
        <>
            <button className={styles.button}>Click Me</button>
        </>
    );
}

export default Styling;

