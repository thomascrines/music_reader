const React = require('react')
const Router = require('react-router')
const { Link, browserHistory } = Router
const Song = require('./Song')

const Listing = React.createClass({

  getInitialState(){
    return { searchQuery: '', songs: [] }
  },

  componentDidMount(){
    var url = 'http://localhost:5000/api/songs'
    var request = new XMLHttpRequest()
    request.open('GET', url)

    request.setRequestHeader('Content-Type', "application/json")
    request.withCredentials = true

    request.onload = () => {
       if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState( { songs: data } )
       } else{
        browserHistory.goBack()
       }
    }
    request.send(null)
  },

  doSearch(event){
    this.setState({searchQuery: event.target.value})
  },

  render(){
    return(
      <div className="listing">
        <nav>
          <Link to='/' className='title'>&#127932; <strong>Music Reader </strong>&#x1D107;</Link><br/>
          <input className='search-box' type='text' placeholder='Search by title or composer' value={this.state.searchQuery} onChange={this.doSearch} />
        </nav>

        <div className='songs-container'>
          {
            this.state.songs.filter((song) => `${song.title} ${song.composer}`.toUpperCase().indexOf(this.state.searchQuery.toUpperCase()) >= 0)
             .map((song) => (
              <Song imagePath={song.imagePath} imageCount={song.imageCount} { ...song } key={song.id}/>
            ))

          }
        </div>
      
      </div>
    )
  }

})

module.exports = Listing