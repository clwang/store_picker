var SearchResults = React.createClass({
    render() {
        var results = this.props.stores.map((store) => {
            var storeName = store.search_str.split(',')[0];
            return ( 
                <div key={store.id} >
                    <address>
                        {storeName} <br />
                        {store.street} <br />
                        {store.city}, {store.state} {store.postal_code}
                    </address>
                    <button>+ Add</button>
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