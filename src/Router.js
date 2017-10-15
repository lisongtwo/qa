import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Questions from './components/business/Questions'
import Question from './components/business/Question'

function MyRouter(){
  return (
    <Router>
      <div>
        <Route path="/question/:questionId" component={Question}/>
        <Route exact path="/" component={Questions}/>
      </div>
    </Router>
  )
}

export default MyRouter
