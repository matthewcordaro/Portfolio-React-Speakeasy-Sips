import React from "react"
import Wrapper from "../assets/wrappers/ErrorPage"
import _404 from "../assets/404.svg"
import { Link, useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()
  console.log(error)
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={_404} alt='404 error' />
          <h3>Oh Shit!</h3>
          <p>Lets go home.</p>
          <Link to='/'>Go Back Home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Wut?</h3>
      </div>
    </Wrapper>
  )
}

export default Error
