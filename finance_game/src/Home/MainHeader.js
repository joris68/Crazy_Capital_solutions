
import { Button } from '@mui/material';
import { useState } from 'react';

export function MainHeader() {

    const [showMore, setShowMore] = useState(false);

    function handleMoreClick(){
        setShowMore(!showMore);
    }

    return (
        <div style={{ textAlign: 'center', color: 'white' }}>
            <h1>Can you beat the market?</h1>
            <Button onClick={handleMoreClick}> {showMore ? 'Show Less' : 'How does it work?'} </Button>
            {showMore && <p className='show-more-content'>'This is an Asset Allocation Game to boost you financial decision making. You will be given a scenario which
                consist out of three things: The location, the time horizon and the set of assets given to you in this scenario. You objective
                maximaize the returs given the assets and the time horizon. You will have 60 seconds to allocate the capital. Benchmark in the New York edition
                would be the S&P 500. In Tokyo the benchmark would be the Nikkei. Prices and returns are calculated in the real-world historical data. </p>}
        </div>
    );
}