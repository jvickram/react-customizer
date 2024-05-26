import React from 'react'
import Button from '../Component/Button'
import Input from '../Component/Input'

export default function Login() {
  return (
    <div>
        <h1>Login</h1>
        <label>Username <Input /></label>
        <label>Password </label><Input />
        <Button/>
    </div>
  )
}
