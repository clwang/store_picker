var Main = React.createClass({
  getInitialState() {
    return { stores: [] }
  },

  componentDidMount() { 
    $.getJSON('https://location-winnow.herokuapp.com/locations', (response) => { 
      this.setState({ stores: response }) 
    }); 
  },

  render() {
    return(
      <div>
        <h1>Welcome, Charles!</h1>
        <h2>Pick Your Stores So We Can Help You Hire.</h2>
        <Search />
        <SearchResults stores={this.state.stores} />
      </div>
    )
  }
});
