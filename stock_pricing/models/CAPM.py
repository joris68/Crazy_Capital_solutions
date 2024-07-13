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
        result = capm_model.summary()
        print(capm_model.params)
        print(capm_model.tvalues)
    
    @classmethod
    def create_return_object(model):
        result = {}
        result['']


        
        





if __name__ == "__main__":
    CAPM.price_asset("AAPL", "^GSPC", "2014-01-01", "2015-01-01")
    