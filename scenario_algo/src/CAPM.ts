/**
 * Here I want to use the polygon stock price API to Evaluate a given Asset after the CAPM
 * Benchmark: S&P 500;
 * 
 */

import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

console.log(process.env.POLY_API_KEY);
rest.stocks.aggregates("AAPL", 1, "day", "2023-01-01", "2023-04-14").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});


rest.indices.dailyOpenClose("I:SPX", "2024-07-10").then((data) => {
    console.log(data);
}

).catch( err => console.log(err));


let asset : string = "AAPL";


