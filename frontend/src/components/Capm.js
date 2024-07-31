import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export async function Capm(){
    // get previously priced assets from the backend
    const prevAssets = await fetch(String(process.env.BACKEND_BASE_URL) + '/api/price/capm/prev');




    return (

        // search bar for assets
        <div>
            <div className="searchBar">
                <input placeholder="Enter S&P 500 Asset Name"/>
            </div>

            <div className="prevAssets">
                {prevAssets.map(asset => {
                    <Container>
                        <Row>
                            <Col>{asset["asset_name"]}</Col>
                            <Col>{asset["benchmark"]}</Col>
                        </Row>
                        <Row>
                            
                        </Row>

                    </Container>
                })}
            </div>

        </div>
              
         

        // previously priced assets





    );
}