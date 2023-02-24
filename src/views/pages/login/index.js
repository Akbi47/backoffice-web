import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.min.css';
import '../../../assets/css/auth.css';
import { passwordValidator } from '../../../controllers/validators/passwordValidator';
import { nameValidator } from '../../../controllers/validators/nameValidator';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import loginSlice from "./loginSlice"
function Login() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const passwordError = passwordValidator(password.value);
  const usernameError = nameValidator(username.value);

  const onFinish = (value) => {
    // console.log(value.username);
    const formdata = new FormData();

    formdata.append('username', value.username);
    formdata.append('password', value.password);
    // console.log(value.username, value.password);

    fetch('https://khongcotien.top/restlogin', {
      method: 'POST',
      body: formdata,
    })
      .then(response => {
        response.json();
        console.log(response);
        if (response.status === 200) {
          alert("Login Successfully");
          dispatch(loginSlice.actions.loginChange(true))
          
        }
        else if (passwordError) {
          setPassword({ ...password, error: passwordError });
        }
        else if (usernameError) {
          setUsername({ ...password, error: usernameError });
        }
        else {
          alert(response.status);
        }
      })
      .catch(error => {
        console.error(error);
        alert("Login Error");
      });
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      autoComplete="on"
      initialValues={{
        remember: true,
        // username: { username.value },
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} value={username.value} placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          value={password.value}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>

  );

};

export default Login
// ReactDOM.render(<Login />, document.getElementById('container'));