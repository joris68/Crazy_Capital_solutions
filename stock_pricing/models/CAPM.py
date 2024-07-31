import pandas as pd
import yfinance as yf
import statsmodels.api as sm

class CAPM:

    @classmethod
    def price_asset(cls, asset_name:str ,  benchmark:str , start_date:str, end_date: str):
        try:
            df = yf.download([asset_name, benchmark], start=start_date, end=end_date)
        except Exception as e:
            raise Exception("Downloading the data from Yahoo finance went wrong")

        # change time frequency from day to month, take the last value of each month and calculate the relative change for the specific months
        X = df['Adj Close'].rename(columns={asset_name: 'asset', benchmark: 'market'}).resample('M').last().pct_change().dropna();

        #calculate the covariance between the asset and the market
        covariance = X.cov().iloc[0,1]
        # calculate the market variance (assuming normal distribution?)
        benchmark_variance = X.market.var()
        beta = covariance / benchmark_variance

        y = X.pop('asset')
        X = sm.add_constant(X);
        capm_model = sm.OLS(y, X).fit()
        #result = capm_model.summary()
        input_parameters = {
            'asset_name' : asset_name,
            'benchmark': benchmark,
            'start_date': start_date,
            'end_date': end_date
        }
        return CAPM.create_return_object(capm_model, beta, input_parameters)
    
    @classmethod
    def create_return_object(cls, model, beta, input_parameters: dict):
        results_dict = {}
        for k, v in input_parameters.items():
            results_dict[k] = v
        results_dict["coefficients"] = model.params.to_dict()
        results_dict["t-values"] = model.tvalues.to_dict()
        results_dict['beta'] = beta
        return results_dict
        


        
        





if __name__ == "__main__":
     result= CAPM.price_asset("AAPL", "^GSPC", "2014-01-01", "2015-01-01")
     print(result)
    