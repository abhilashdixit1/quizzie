import React, { Component } from 'react';
import styles from './commonstyle.module.css'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className={styles.quiz}>

                    <div className={styles.letter}>Q</div>
                    <div className={styles.letter}>U</div>
                    <div className={styles.letterI}><div className={styles.heart}>&hearts;</div><div>I</div></div>
                    <div className={styles.letter}>Z</div>
                    <div className={styles.letter}>Z</div>
                    <div className={styles.letterI}><div className={styles.heart}>&hearts;</div><div>I</div></div>
                    <div className={styles.letter}>E</div>
                </div>
                <button className={styles.start} onClick={()=>{this.props.history.push("/dash")}}>Start</button>
            </div>
        );
    }
}

export default Home;