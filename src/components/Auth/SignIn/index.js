import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import TextField from './TextField.js'
import { Link } from '@mui/material'

export default function SignIn() {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid!').required('Email Required!'),
    password: Yup.string()
      .min(4, 'Password must be minimum 4 digits!')
      .required('Password Required!')
  })

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2))
        }}>
        {(formik) => (
          <Form className="form p-3 mt-5">
            <TextField type="email" name="email" label="Email" placeholder="loremipsum@gmail.com" />
            <TextField type="password" name="password" label="Password" placeholder="qwert@123" />
            <button className="btn btn-dark" type="submit">
              Sign In
            </button>
            <button className="btn btn-primary m-3" type="reset" onClick={formik.handleReset}>
              Reset
            </button>
            <br />
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Form>
        )}
      </Formik>
    </>
  )
}

const initialValues = {
  firstName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
