/**
 * This is the Searchbar used in the offered Solutions. It implements client-side fuzzy matching using fuze libary on the the S&P 500 dataset.
 */

import {fuseIndex} from './searchUtils.js';
import { Form, FormControl, Button } from 'react-bootstrap';
import {useState, useMemo} from 'react';
import { SearchbarResult } from './SearchbarResult';




export function Searchbar() {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function fuzzySearch(e) {
        setSearchTerm(e.target.value)
        //return fuseIndex.search(searchString);
        const results = fuseIndex.search(searchTerm);
        setSearchResults(results);
        
    }
    


    return (
        <>
            <Form inline>
            <FormControl
                type="text"
                placeholder="Search for S&P Asset"
                className="mb-3"
                value={searchTerm}
                onChange={fuzzySearch}
            />
            <Button variant="outline-success">Search</Button>   

            </Form>
            <div>
                {searchResults.length === 0 && searchTerm.length > 0 ? <p>Not is S&P 500</p> : SearchbarResult({searchResults})}
            </div>



        </>

        
    );
}

