var Main = React.createClass({
  getInitialState() {
    return { stores: [] }
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

  addStoreLocation(id) {
    $.ajax({
      url: 'https://location-winnow.herokuapp.com/users/1',
      data: { location_id: id, id: 1},
      dataType: 'JSON',
      type: 'PUT',
      success: (response) => {
        console.log('successfully added store', response);
      },
      error: (response) => {
        console.log('there was a problem adding your store', response);
      }
    });
  },

  render() {
    return(
      <div>
        <h1>Welcome, Charles!</h1>
        <h2>Pick Your Stores So We Can Help You Hire.</h2>
        <Search fetchResults={this.fetchResults} />
        <SearchResults stores={this.state.stores} addStoreLocation={this.addStoreLocation}  />
      </div>
    )
  }
});
