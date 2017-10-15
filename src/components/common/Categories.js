import React from 'react'
import _ from 'lodash'

const categories = ['sports', 'it', 'finance', 'others']

export default class Categories extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      showDropdown: false
    }

    this.clickedButton = this.clickedButton.bind(this)
    this.clickedDropdown = this.clickedDropdown.bind(this)
  }

  clickedButton(){
    this.setState({
      showDropdown: !this.state.showDropdown
    })
  }

  clickedDropdown(category){
    this.setState({
      showDropdown: false
    })
    this.props.changeCategory(category)
  }

  render(){
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle"
                type="button"
                onClick={this.clickedButton}>
                {this.props.category}
        </button>
        <div className="dropdown-menu"
                style={{display: this.state.showDropdown?'block':'none'}}>
          {_.without(categories, this.props.category).map(category => (
            <a key={category} className="dropdown-item" href="javascript:;"
              onClick={() => this.clickedDropdown(category)}>{category}</a>
          ))}
        </div>
      </div>
    )
  }
}
