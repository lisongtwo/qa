import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Store from '../common/Store'
import NewQuestion from './NewQuestion'
import Categories from '../common/Categories'

class Questions extends React.Component{
  constructor(){
    super()

    this.state = {
      questions: [],
      category: 'sports'
    }

    this.refreshList = this.refreshList.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
    //this._getList = this._getList.bind(this)
  }

  componentWillMount(){
    this._getList(this, this.state.category)
  }

  refreshList(){
    this._getList(this, this.state.category)
  }

  _getList(context, category){
    Store.getQuestions(category).then(questions => {
      context.setState({
        questions: questions.data
      })
    })
  }

  changeCategory(category){
    this.setState({
      category: category
    })
    this._getList(this, category)
  }

  render(){
    return (
      <div className="container">
        <NewQuestion
          category={this.state.category}
          hint="type something"
          afterSubmit={this.refreshList}
        />
        <Categories
          category={this.state.category}
          changeCategory={this.changeCategory}
        />
        <table className="table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {this.state.questions.map(function(question){
              return (
              <tr key={question.id}>
                <td><Link to={`/question/${question.id}`}>{question.question}</Link></td>
                <td>{question.details}</td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Questions
