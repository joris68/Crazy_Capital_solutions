//import * as React from 'react';
import ImageNewYork from './assets/wall_street.jpeg';
import ImageTokyo from './assets/Tokyo_stock_exchange.jpeg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




export function Location({city}){
    let text;
    let header;
    if (city === "New York") {
        text = "Find you way on Wall Street!";
        header = "New York";
    }
    if (city === "Tokyo") {
        text = "Dominate in the Tokyan Stock Exchange!";
        header = "Tokyo";
    }
    

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={city === "New York" ? ImageNewYork : ImageTokyo} />
        <Card.Body>
          <Card.Title>{header}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary">Play Now!</Button>
        </Card.Body>
      </Card>
    );
}

