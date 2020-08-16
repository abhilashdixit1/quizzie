import React from 'react';

import styles from './commonstyle.module.css'

function Result(props) {
    return (
        <div>
            <div className={styles.container}>

                <div className={ props.obtained / props.total > 0.5 ? styles.childPass : styles.childFail}>
                    <div className={styles.score}>Score</div>
                    <div className={styles.content}>{props.obtained}/{props.total}</div>
                </div>
            </div>
            <div className={styles.result}>
                {props.obtained / props.total > 0.5 ?
                    <div className={styles.success}>Congratulations! You Succeeded in the quiz.</div>
                    : <div className={styles.fail}>Sorry! You failed. Better Luck Next Time</div>
                }
                <div className={styles.thanks}> Thank You!</div>
            </div>
        </div>
    );
}

export default Result;