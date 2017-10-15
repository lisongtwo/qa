import axios from 'axios'

const baseUrl = 'https://gchj1ts54l.execute-api.us-west-1.amazonaws.com/dev/'

export default {
  getQuestions: function(category){
    return axios.get(`${baseUrl}questions?category=${category}`)
  },

  postQuestion: function(objQuestion){
    return axios.post(`${baseUrl}questions`, objQuestion)
  },

  getQuestion: function(questionId){
    return axios.get(`${baseUrl}questions/${questionId}`)
  },

  postAnswer: function(questionId, answer){
    return axios.post(`${baseUrl}questions/${questionId}/answers`, {answer: answer})
  }
}
