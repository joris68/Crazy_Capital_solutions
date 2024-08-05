import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {testdata} from './data/assets';
import { Searchbar } from './Searchbar';
import { Input, Ripple, initMDB } from "mdb-ui-kit";


initMDB({ Input, Ripple });


export function Capm(){
    // get previously priced assets from the backend
    console.log(String(process.env.BACKEND_BASE_URL))
    //const prevAssets = axios.get(String(process.env.BACKEND_BASE_URL) + '/api/price/capm/prev');
    //console.log(prevassets);
    


    return (

        // search bar for assets
        <>

            <Searchbar/>

            {/* <div className="prevAssets">
                {testdata.map(asset => {
                    return(
                    <Container>
                        <Row>
                            <Col>{asset["asset_name"]}</Col>
                            <Col>{asset["benchmark"]}</Col>
                        </Row>
                        <Row>
                            <Col>{`StartDate: ${asset["start_date"]}`}</Col>
                            <Col>{`EndDtae: ${asset["end_date"]}`}</Col>
                        </Row>
                        <Row>
                            <p>Coefficients</p>
                            <Col>{`Const: ${asset["coefficients"]["const"]}`}</Col>
                            <Col>{`Const: ${asset["coefficients"]["market"]}}`}</Col>
                        </Row>
                        <Row>
                            <p>T-values</p>
                            <Col>{`Const: ${asset["t-values"]["const"]}`}</Col>
                            <Col>{`Const: ${asset["t-values"]["market"]}}`}</Col>
                        </Row>
                    </Container>
                    );
                })}
            </div> */}
        </>
              
    );
}

function renderPrevAssets(assetlist){

}