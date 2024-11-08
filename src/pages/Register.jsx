import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';

const Register = () => {
  const [credentials, setCredentials] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://tour-back-2.onrender.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login'); // Redirects to the login page
      } else {
        alert(data.message); // Show any error messages, e.g., "User already exists"
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__img">
                <img src={loginImg} alt="Login" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="User Icon" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input 
                      type="text"
                      placeholder="Username"
                      required
                      id="userName"
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button className="btn secondary_btn auth_btn" type="submit">
                    Register
                  </Button>
                </Form>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
