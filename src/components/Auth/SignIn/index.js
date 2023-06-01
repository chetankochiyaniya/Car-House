import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import TextField from './TextField.js'
import { useDispatch, useSelector } from 'react-redux'
import { UserSignIn, HandleModel } from '../../../redux/actions/index.js'
import { toast } from 'react-toastify'

export default function SignIn() {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid!').required('Email Required!'),
    password: Yup.string()
      .min(4, 'Password must be minimum 4 digits!')
      .required('Password Required!')
  })

  const dispatch = useDispatch()
  const users = useSelector((state) => state.userManagementReducer.users)

  const showSuccessToast = () =>
    toast.success('successfull loggedIn', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })
  const showErrorToast = () =>
    toast.error('invalid email or password !', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values) => {
          const { email, password } = values
          let existingUser = users.some(
            (user) => user.values.email === email && user.values.password === password
          )
          if (existingUser) {
            dispatch(
              UserSignIn({
                email: email,
                password: password
              })
            ),
              showSuccessToast(),
              dispatch(HandleModel(false))
          } else {
            showErrorToast()
          }
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
