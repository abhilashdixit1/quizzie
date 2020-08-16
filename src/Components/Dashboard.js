import React, { Component } from 'react';
import QuesCard from './QuesCard'
import styles from './commonstyle.module.css'
import Result from './Result'

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            total: 0,
            currentQues: 0,
            marksObtained: 0,
            isShowPrev: false,
            isShowNext: true,
            isShowResult: false,
            attempted: [0],
        }
        this.clickPrev = this.clickPrev.bind(this)
        this.clickNext = this.clickNext.bind(this)
        this.calculateMarks = this.calculateMarks.bind(this)
        this.checkBoundary = this.checkBoundary.bind(this)
        this.showResult = this.showResult.bind(this)
        this.disable = this.disable.bind(this)
    }

    componentDidMount() {
        fetch('https://my-json-server.typicode.com/abhilashdixit1/quizapi/test')
            .then(res => res.json())
            .then(data => this.setState({ questions: data, total: data.length }))

        console.log(this.state.questions)
    }

    clickNext() {
        this.setState({ currentQues: this.state.currentQues + 1, isShowPrev: true }, () => this.checkBoundary())

    }
    clickPrev() {
        this.setState({ currentQues: this.state.currentQues - 1, isShowNext: true }, () => this.checkBoundary())
    }

    calculateMarks() {
        this.setState({ marksObtained: this.state.marksObtained + 1 },)
    }

    checkBoundary() {
        if (this.state.currentQues === 0) {
            this.setState({ isShowPrev: false })
        }
        if (this.state.currentQues === this.state.total - 1) {
            this.setState({ isShowNext: false })
        }
    }

    showResult() {
        this.setState({ isShowResult: true })
    }

    disable(id) {
        this.setState({ attempted: this.state.attempted.concat(id) })
    }


    render() {
        return (
            <div>
                {this.state.questions.length > 0 &&

                    <div>
                        {this.state.isShowResult ? <Result total={this.state.total} obtained={this.state.marksObtained}/> :
                            <div>

                                <div className={styles.quesTitle}>Question: {this.state.currentQues + 1} Of {this.state.total}</div>
                                <div >
                                    <div>
                                        < QuesCard question={this.state.questions[this.state.currentQues]} calc={this.calculateMarks} total={this.state.total}
                                            clickNext={this.clickNext} showResult={this.showResult} disable={this.disable} attempted={this.state.attempted} />
                                    </div>

                                    {this.state.isShowPrev && <button className={styles.navButton} onClick={this.clickPrev}>&larr;</button>}
                                    {this.state.isShowNext && <button className={styles.navButton} onClick={this.clickNext}>&rarr;</button>}
                         
                            </div>
                            </div>
                }
            </div>
                }
            </div>
        );
    }
}

export default Dashboard;