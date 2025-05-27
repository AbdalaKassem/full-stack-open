const Search = (props) => {
    return (
        <div>
            find countries <input value={props.searchCountry} onChange={props.handleSearch} />
        </div>
    )
}

export default Search