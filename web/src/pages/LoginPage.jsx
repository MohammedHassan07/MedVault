import React, { useState, useEffect, } from 'react'
import { useNavigate } from 'react-router-dom'
import isEmpty from '../utils/isEmpty'

const LoginPage = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  useEffect(() => {

    // console.log(categoryState)
    const tokenData = localStorage.getItem('tokenData')

    if (tokenData) {

      const { token } = JSON.parse(tokenData)
      // console.log('Token found:', token)

      navigate(`/login`)
    }
  }, [])

  // handle login TODO: Lab assistant login needs to implement
  async function handleLogin(e) {
    e.preventDefault()

    const data = { email, password }
    const { flag, error } = isEmpty(data)

    if (flag) {
      setMessage(error)
      setTimeout(() => setMessage(''), 2000)
      return
    }


    console.log(data)
    // const endPoint = ''
    // const response = await postRequest(endPoint, data)
    // if (response.flag) {

    //   const token = response.response.data.data.token
    //   localStorage.setItem('tokenData', JSON.stringify({ token }))

      navigate(`/`)
    // } else {
    //   console.log('Login failed:', response)
    //   setMessage(response.response.message)
    //   setTimeout(() => setMessage(''), 2000)
    // }
  }


  return (

    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="border border-info rounded-lg p-4 w-50 w-sm-40 w-md-35 w-lg-33">
        <h2 className="text-center text-3xl font-medium text-info">MedVault Log in</h2>
       
        <form className="mt-4">
          {message && (
            <div className="text-danger">
              <span>{message}</span>
            </div>
          )}

          <div className="mb-3">

            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">

            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-control"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="btn btn-info w-100 mt-4"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>

  )
}

export default LoginPage
