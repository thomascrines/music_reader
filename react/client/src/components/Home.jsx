const React = require('react')
const { Link } = require('react-router')
const LoginBox = require('../auth/LoginBox.jsx')


const Home = () => (
  <div className="home">
  <h1 className='title'>&#127932; Music Reader &#x1D107;</h1>
  <LoginBox url='http://localhost:5000/'/>
  </div>
  )

module.exports = Home