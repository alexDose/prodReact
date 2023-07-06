import React, {useState} from 'react';
import styles from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <div>{count}</div>
            <button className={styles.btn} onClick={increment}>plus</button>
        </div>
    );
};
