import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, ErrorMessage } from 'formik'
import TextField from './TextField.js'

export default function SignUp() {
  const validate = Yup.object({
    firstName: Yup.string().required('Firstname Required!'),
    email: Yup.string().email('Email is invalid!').required('Email Required!'),
    password: Yup.string()
      .min(4, 'Password must be minimum 4 digits!')
      .required('Password Required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match!')
      .required('Confirm password is required!')
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
          <Form className="form p-3">
            <TextField type="text" label={'Firstname'} name="firstName" placeholder="Lorem" />
            <TextField type="email" name="email" label="Email" placeholder="loremipsum@gmail.com" />
            <TextField type="password" name="password" label="Password" placeholder="qwert@123" />
            <div className="mb-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                className={`form-control shadow-none ${
                  formik.touched.confirmPassword && formik.errors.confirmPassword && 'is-invalid'
                }`}
                type="password"
                name="confirmPassword"
                placeholder="confirm password..."
                {...formik.getFieldProps('confirmPassword')}
              />

              <ErrorMessage component="div" name="confirmPassword" className="error" />
            </div>
            <button className="btn btn-dark" type="submit">
              Register
            </button>
            <button className="btn btn-primary m-3" type="reset">
              Reset
            </button>
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
