import React, { Component } from 'react';
import styles from './commonstyle.module.css'

class QuesCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRight:false,
            isWrong:false,
            isDisabled:false,
        }
    }

    checkAnswer(answer){

        console.log("curQues",this.props.total)
        console.log("questid",this.props.question.questionId)
        if(answer===this.props.question.right){
            this.setState({isRight:true,isDisabled:true})
            this.props.calc()
            this.props.disable(this.props.question.questionId)
        }else{
            this.setState({isWrong:true,isDisabled:true})
            this.props.disable(this.props.question.questionId)
        }
        if(this.props.total===this.props.question.questionId){
            this.props.showResult()
        }

        this.props.clickNext()
    }

    componentDidUpdate(prevProps){
        if (this.props.question !== prevProps.question){
        this.setState({isRight:false,isWrong:false,isDisabled:false})
        }
    }
    
    render() {
        return (
            <div className={styles.quesCard}>
                <div className={styles.question}>{this.props.question.text}</div>
                <div className={styles.optionGroup}>
                <button className={styles.option} disabled={this.state.isDisabled || this.props.attempted.includes(this.props.question.questionId)} onClick={()=>this.checkAnswer(this.props.question.option1)}>{this.props.question.option1}</button>
                <button className={styles.option} disabled={this.state.isDisabled || this.props.attempted.includes(this.props.question.questionId)} onClick={()=>this.checkAnswer(this.props.question.option2)}>{this.props.question.option2}</button>
                <button className={styles.option} disabled={this.state.isDisabled || this.props.attempted.includes(this.props.question.questionId)} onClick={()=>this.checkAnswer(this.props.question.option3)}>{this.props.question.option3}</button>
                <button className={styles.option} disabled={this.state.isDisabled || this.props.attempted.includes(this.props.question.questionId)} onClick={()=>this.checkAnswer(this.props.question.option4)}>{this.props.question.option4}</button>
                </div>

                {this.state.isRight && <div className={styles.correct}>Correct</div>}
                {this.state.isWrong && <div className={styles.incorrect}>InCorrect</div>}
                
            </div>
        );
    }
}

export default QuesCard;