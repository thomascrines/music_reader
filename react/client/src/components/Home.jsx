const React = require('react')
const { Link } = require('react-router')
const LoginBox = require('../auth/LoginBox.jsx')


const Home = () => (
  <div className="home">
  <h1 className='title'>Music Reader</h1>
  <LoginBox url='http://localhost:5000/'/>
  </div>
  )

module.exports = Home