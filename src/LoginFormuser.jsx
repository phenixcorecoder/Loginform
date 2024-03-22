import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      const tempUsername = 'user';
      const tempPassword = 'password';

      if (values.username === tempUsername && values.password === tempPassword) {
        onLogin({ username: values.username });
        navigate('/dash');
      } else {
        setFieldError('password', 'Invalid username or password');
      }

      setSubmitting(false);
    },
  });

  return (
    <div className='bodyl'>
      <div className="square" style={{ '--i': 0 }}></div>
      <div className="square" style={{ '--i': 1 }}></div>
      <div className="square" style={{ '--i': 2 }}></div>
      <div className="square" style={{ '--i': 3 }}></div>
      <div className="square" style={{ '--i': 4 }}></div>
      <h1 className="form-header">User Login</h1>
      <form onSubmit={formik.handleSubmit}>
      <label>
          <FontAwesomeIcon icon={faUser} className='iconuser'></FontAwesomeIcon>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${formik.touched.username && formik.errors.username ? 'error' : ''}`}
            required
          />
          {formik.touched.username && formik.errors.username && (
            <div className="error-message">{formik.errors.username}</div>
          )}
        </label>
        <br />
        <label>
          <FontAwesomeIcon icon={faLock} className="iconpass"></FontAwesomeIcon>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control password ${formik.touched.password && formik.errors.password ? 'error' : ''}`}
            required
          />
          
          {formik.touched.password && formik.errors.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}
        </label>
        <br />
        <button type="submit" className="btn btn-primary red">
          Login
        </button>
        <a className="forget" href="/password-recovery">
          Forgot password?
        </a>
      </form>
    </div>
  );
};

export default LoginForm;
