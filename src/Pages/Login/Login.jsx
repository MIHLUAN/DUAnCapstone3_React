import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup'
import { loginApi } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const form = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:yup.object().shape({
      email:yup.string().required('email cannot be blank!').email('email is invalid!'),
      password:yup.string().required('password cannot be blank!')
    }),
    onSubmit: (values) => {
      const actionAsync = loginApi(values);
      dispatch(actionAsync);
    }
  })

  return (
    <>  <h3 className='login'>Login</h3>
    <form className='formLogin ' onSubmit={form.handleSubmit}>
    
      <div className='form-group emailLogin'>
        <p>Email</p>
        <input placeholder='email' className='form-control' name="email" onChange={form.handleChange} onBlur={form.handleBlur}/>
        {form.errors.email && <p className='text-danger'>{form.errors.email}</p>}
      </div>
      <div className='form-group passwordLogin'>
        <p>Password</p>
        <input type='password' placeholder='password' className='form-control' name="password" onChange={form.handleChange}   onBlur={form.handleBlur}/>
        {form.errors.password && <p className='text-danger'>{form.errors.password}</p>}

      </div>
      <div className='form-group submitLogin'>
        <NavLink to="/register" className="active registerNow">Register now ?</NavLink>

        <button className='btn btn-success mt-2 btnLogin' type='submit'>LOGIN</button>
      </div>
    </form></>
    
  )
}

export default Login