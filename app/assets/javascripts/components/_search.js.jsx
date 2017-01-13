var Search = React.createClass({
    fetchResults() {
        this.props.fetchResults(this.refs.search.value);
    },

    render() {
        return (
            <div>
                <label htmlFor="search">Search for stores:</label>
                <br />
                <input ref='search' type="text" placeholder='Enter your address' onChange={this.fetchResults} />
            </div>
        )
    }
});