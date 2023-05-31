import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import TextField from './TextField.js'
import { useDispatch, useSelector } from 'react-redux'
import { HandleModel, UserSignIn, UpdateCustomError } from '../../../redux/actions/index.js'

export default function SignIn() {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid!').required('Email Required!'),
    password: Yup.string()
      .min(4, 'Password must be minimum 4 digits!')
      .required('Password Required!')
  })

  const dispatch = useDispatch()
  const customError = useSelector((state) => state.userManagementReducer.customError)

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          const { email, password } = values
          dispatch(
            UserSignIn({
              email: email,
              password: password
            }),
            customError !== null
              ? (alert('Invalid email or password'), dispatch(UpdateCustomError(null)))
              : (alert('Suscfully SignIn'), dispatch(HandleModel(false)))
          )
        }}>
        {(formik) => (
          <Form className="form p-3 mt-5">
            <TextField type="email" name="email" label="Email" placeholder="loremipsum@gmail.com" />
            <TextField type="password" name="password" label="Password" placeholder="qwert@123" />
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
            <button className="btn btn-primary m-3" type="reset" onClick={formik.handleReset}>
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
