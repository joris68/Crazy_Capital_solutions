/**
 * This is the Searchbar used in the offered Solutions. It implements client-side fuzzy matching using fuze libary on the the S&P 500 dataset.
 */


import {data} from './data/all_assets';
import Fuse from 'fuse.js'
import { Form, FormControl, Button } from 'react-bootstrap';
import {useState, useMemo} from 'react';
import { SearchbarResult } from './SearchbarResult';




export function Searchbar() {
    // cache creating the index through rerendering of the component
    const fuseIndex = useMemo(() => {
        return new Fuse(data, {keys: ['Symbol ']});
    }, [data]);

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    function fuzzySearch(e) {
        setSearchTerm(e.target.value)
        //return fuseIndex.search(searchString);
        const result = fuseIndex.search(searchTerm);
        console.log(result);
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



        </>

        
    );
}

