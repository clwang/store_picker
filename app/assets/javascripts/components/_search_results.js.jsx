var SearchResults = React.createClass({
    addStoreLocation(id) {
        this.props.addStoreLocation(id)
    },

    render() {
        var results = this.props.stores.map((store) => {
            var storeName = store.search_str.split(',')[0];
            return ( 
                <div className="store" key={store.id} >
                    <address>
                        {storeName} <br />
                        {store.street} <br />
                        {store.city}, {store.state} {store.postal_code}
                    </address>
                    <button className='btn btn-success' onClick={this.addStoreLocation.bind(this, store.id)}>+ Add</button>
                    < br />
                </div>
            )
        });
        return (
            <div>
                {results}
            </div>
        )
    }
});