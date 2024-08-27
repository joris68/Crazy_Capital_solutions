


export function SearchbarResult({searchResultlist}) {
    return(
        <div className="search-results">
            <ul>
                {searchResultlist.map(obj => <li>{obj['Security']}</li>)}
            </ul>
        </div>

    );
}