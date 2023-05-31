import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, ErrorMessage } from 'formik'
import TextField from './TextField.js'
import { useDispatch, useSelector } from 'react-redux'
import { HandleModel, UpdateCustomError, UserSignUp } from '../../../redux/actions'

export default function SignUp() {
  const validate = Yup.object({
    fullName: Yup.string().required('fullName Required!'),
    email: Yup.string().email('Email is invalid!').required('Email Required!'),
    password: Yup.string()
      .min(4, 'Password must be minimum 4 digits!')
      .required('Password Required!'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match!')
      .required('Confirm password is required!')
  })

  const dispatch = useDispatch()

  const customError = useSelector((state) => state.userManagementReducer.customError)

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          const { fullName, email, password } = values
          dispatch(
            UserSignUp({
              name: fullName,
              email: email,
              password: password
            }),
            customError !== null
              ? (alert('User is already exists'), dispatch(UpdateCustomError(null)))
              : (alert('Suscfully sign in please go for sign up'), dispatch(HandleModel(false)))
          )
        }}>
        {(formik) => (
          <Form className="form p-3">
            <TextField type="text" label="Full Name" name="fullName" placeholder="Lorem" />
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
              Submit
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
  fullName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
