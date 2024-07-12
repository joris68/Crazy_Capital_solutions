import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";



function SuccessfulRegistration(){

    return (
      <p>something</p>
    );
}


export function Registration() {

  const [wasSuccessful, setWasSuccessfull] = useState(false);
  const [errorHappened, setErrorHappenend] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required('Username is required').min(7, 'Username shoul have at least 7 characters'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });


  const formOptions = { resolver: yupResolver(schema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;



    async function isUsernameAvailable(data){
        let newUsername = data.username;
        let response = await fetch("http://localhost:9000/api/checkusernameavailability", {
          method: "POST",
          body: JSON.stringify({username: newUsername})
        })
        if(response.ok) return true;
        else return false;
    }
    
    function onSubmit (data) {
      console.log(data);
      if(isUsernameAvailable){
        fetch("http://localhost:9000/api/registeruser", {
          method: "POST",
          body: JSON.stringify(data)
        }).then(response => {
            setWasSuccessfull(true);
            
        }).catch(err => {
            setErrorHappenend(true);
            console.log(error);
        })
      } else{

      }
    }

   function notnow(data){
      schema.validate(data);
      // handle validation here
      // check if username is unique ==> db call
      //if (correct) register user and show successfull registration page
      // else show errors in registration form
   }

  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <p> Ready. Set. Quant!</p>
      <Form.Group className='mb-3' controlId='formBasicUsername' >
        <Form.Label >Username</Form.Label>
        <Form.Control type="username" placeholder='Enter unique username'required {...register("username")}
              isInvalid={errors.username}/>
        <Form.Control.Feedback>
          {errors.username?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register("email")}
              isInvalid={errors.email} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required {...register("password")}
              isInvalid={errors.password}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordrepeat">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="password" placeholder="Repeat Password" required {...register("confirmPassword")}
              isInvalid={errors.confirmPassword}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </div>
  );
}
