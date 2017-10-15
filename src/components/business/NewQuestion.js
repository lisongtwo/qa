import React from 'react'
import Store from '../common/Store'

class NewQuestion extends React.Component{
  constructor(){
    super()

    this.state = {
      question: ''
    }

    this.enterQuestion = this.enterQuestion.bind(this)
    this.submitQuestion = this.submitQuestion.bind(this)
  }

  submitQuestion(e){
    e.preventDefault()

    if(this.props.type === 'answer'){ //new answer
      Store.postAnswer(this.props.questionId, this.state.question).then(() => {
        this.props.afterSubmit()
        this.setState({
          question: ''
        })
      })
    }else{    //new question
      Store.postQuestion({
        category: this.props.category,
        question: this.state.question,
        details: ''
      }).then(() => {
        this.props.afterSubmit()
        this.setState({
          question: ''
        })
      })
    }
  }

  enterQuestion(e){
    this.setState({
      question: e.target.value
    })
  }

  render(){
    return (
      <div className="jumbotron">
        <form onSubmit={this.submitQuestion}>
          <div className="form-group row">
            <label className="col-lg-2">
              {this.props.type === 'answer'?
                (<span>Answer:</span>):
                (<span>Question:</span>)
            }
            </label>
            <input className="form-control col" value={this.state.question} onChange={this.enterQuestion}/>
          </div>
          <div className="form-group row">
            <div className="col">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default NewQuestion
