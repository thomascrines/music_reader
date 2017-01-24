const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./components/Home')
const Listing = require('./components/Listing')
const Viewer = require('./viewer/Viewer')
const Main = require('./components/Main')
const ReactRouter = require('react-router')
const {Router, Route, IndexRoute, hashHistory} = ReactRouter

const App = React.createClass({

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path='/songs' component={Listing} />
          <Route path='/songs/:songPath/:imageCount' component={Viewer}/>
        </Route>
      </Router>
    )
  }
})


ReactDOM.render(<App />, document.getElementById('app'))
