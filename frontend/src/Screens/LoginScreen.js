import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
import { useHistory } from "react-router-dom"
import { Button, InputGroup, FormControl } from 'react-bootstrap'
import Message from '../components/Message'

const LoginScreen = () => {
    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
      if (state) {
        history.push('/')
      }
    }, [state, history])


    const postData = () => {
        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
                if(data.error) {
                    console.log(data.error)
                } else {
                    if(data.user && data.token !== undefined) {
                      localStorage.setItem("user", JSON.stringify(data.user));
                      localStorage.setItem("jwt", data.token);
                      history.push("/admin")
                      dispatch({ type: "USER", payload: data.user })
                    } else {
                      setError(true)
                    }
                }
        })
        .catch(err => console.log(err));
    }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '70vh' }}>
      <div style={{ width: '30%' }}>
          {
            error && <Message variant='danger'>Login Failed...</Message> 
          }
      <h1>Sign In</h1>
          <span>Email</span>
          <InputGroup className="mb-3">
                <FormControl
                type='text'
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={email} onChange={(e) => setEmail(e.target.value)}
                />
          </InputGroup>
            <span>Password</span>
            <InputGroup className="mb-3">
                <FormControl
                type='password'
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
          </InputGroup>
            <Button onClick={() => postData()} type="submit">Sign In</Button>
      </div>
    </div>
  )
}

export default LoginScreen
