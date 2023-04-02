/** @format */

import React, { useRef, useState } from "react";
import "./login.scss";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../components/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate.push("/users");
    } catch {
      setError("Something is wrong!");
    }

    setLoading(false);
  }

  return (
    <div className='login'>
      <Sidebar />
      <div className='loginContainer'>
        <Navbar />
        <div>
          <Card className='w-50 m-4'>
            <Card.Body>
              <h2 className='text-center'>Log in</h2>
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
                <Button
                  disabled={loading}
                  onClick={handleClick}
                  className='w-100 mt-4'
                  type='submit'
                >
                  Log in
                </Button>
              </Form>
              <Link to='/forgot-password'>Forgot Password?</Link>
            </Card.Body>
          </Card>
          <div className='w-100 m-4'>
            Please sign up first.<Link to='/signup'> Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
