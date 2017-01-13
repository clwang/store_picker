var Main = React.createClass({
  getInitialState() {
    return { stores: [] }
  },

  componentDidMount() { 
    // $.getJSON('https://location-winnow.herokuapp.com/locations', (response) => { 
    //   this.setState({ stores: response }) 
    // }); 
  },

  fetchResults(term) {
    if (term == "" || term == undefined) {
      // reset the stores
      this.setState(this.getInitialState)
    } else {
      $.ajax({
        url: "https://location-winnow.herokuapp.com/locations?query=" + encodeURI(term),
        type: "GET",
        dataType: "JSON",
        success: (response) => {
          console.log(response);
          this.setState({ stores: response });
        }
      })
    }
    
  },

  render() {
    return(
      <div>
        <h1>Welcome, Charles!</h1>
        <h2>Pick Your Stores So We Can Help You Hire.</h2>
        <Search fetchResults={this.fetchResults} />
        <SearchResults stores={this.state.stores}  />
      </div>
    )
  }
});
