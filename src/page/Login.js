import React, { useState } from 'react'
import { Button, Col, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = () => {
  const [id,setId] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogin = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id,password))
    navigate('/')
  }
  return (
    <div className='login-page'>
      <Col lg={4}>
        <div className='mini-logo'><img src='https://cdn.imweb.me/thumbnail/20240306/42e567cf34e42.png' /></div>
        <Form onSubmit={(event)=>onLogin(event)}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="이메일" onChange={(event)=>setId(event.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="비밀번호" onChange={(event)=>setPassword(event.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button className='login-page-btn' type="submit">
            로그인
          </Button>
        </Form>
      </Col>
    </div>
  )
}

export default Login