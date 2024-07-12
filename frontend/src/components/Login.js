import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function Login() {
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [wasSuccesfull, setWasSuccessfull] = useState(false);

  async function handleClick(event){
    event.preventDefault();
    let url = "http:localhost:9000/login";
    try {
      const response = await fetch(url, {
        method : "POST",
        body: JSON.stringify({email: emailInput, password: passwordInput})
      })
      if(response.ok){
        setWasSuccessfull(true);
      }else{
        
      }
    } catch(error){
      console.error(error.message);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Form>
      <p> Are you ready to QUANT ?</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Sign In
      </Button>
    </Form>
    </div>
  );
}
