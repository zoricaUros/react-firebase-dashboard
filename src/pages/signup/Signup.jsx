/** @format */

import React, { useRef, useState } from "react";
import "./signup.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../components/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => navigate("/users");

  async function handleSubmit(e) {
    e.preventDefault();

    /* provera da li je isti password upisan u oba polja-confirm password */

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match, try again");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate.push("/users");
    } catch {
      setError("Something is wrong!");
    }
    setLoading(false);
  }

  return (
    <div className='signup'>
      <Sidebar />
      <div className='signupContainer'>
        <Navbar />
        <div>
          <Card className='w-50 m-4'>
            <Card.Body>
              <h2 className='text-center'>Sign Up</h2>
              {error && <Alert variant='danger'>{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id='email'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email' ref={emailRef} required />
                </Form.Group>
                <Form.Group id='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' ref={passwordRef} required />
                </Form.Group>
                <Form.Group id='password-confirm'>
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type='password'
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button
                  disabled={loading}
                  onClick={handleClick}
                  className='w-100 mt-4'
                  type='submit'
                >
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className='w-100 m-4'>
            Already have an account?<Link to='/login'>Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
