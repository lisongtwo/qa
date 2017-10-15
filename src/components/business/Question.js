import React from 'react'
import Store from '../common/Store'
import { Link } from 'react-router-dom'
import NewAnswer from './NewQuestion'

class Question extends React.Component{
  constructor(){
    super()

    this.state = {
      question: '',
      answers: []
    }

    this.refreshList = this.refreshList.bind(this)
    this._getList = this._getList.bind(this)
  }

  componentWillMount(){
    this._getList()
  }

  refreshList(){
    this._getList()
  }

  _getList(){
    Store.getQuestion(this.props.match.params.questionId).then(response => {
      this.setState({
        question: response.data.question,
        answers: response.data.answers
      })
    })
  }

  render(){
    return (
      <div className="container">
        <h3>
          {this.state.question}
          <Link to="/">Back</Link>
        </h3>
        <NewAnswer
          type="answer"
          questionId={this.props.match.params.questionId}
          afterSubmit={this.refreshList}
        />
        <table className="table">
          <tbody>
            {this.state.answers.length > 0?
              this.state.answers.map((answer, index) => (
              <tr key={index}>
                <td>{answer.answer}</td>
              </tr>
            )):(
              <tr><td>No answers</td></tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Question
