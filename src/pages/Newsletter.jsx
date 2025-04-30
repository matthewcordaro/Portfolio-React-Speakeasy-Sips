import React from "react"

function Newsletter() {
  return (
    <form className='form'>
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        SpeakeasySips Newsletter
      </h4>
      <div className='form-row'>
        {/* first name */}
        <label htmlFor='firstName' className='form-label'>
          first name
        </label>
        <input
          type='text'
          className='form-input'
          name='firstName'
          id='firstName'
          defaultValue='Matthew'
        />
        {/* last name */}
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          defaultValue='Cordaro'
        />
        {/* email */}
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          className='form-input'
          name='email'
          id='email'
          defaultValue='example@gmail.com'
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: "0.5rem" }}
      >
        submit
      </button>
    </form>
  )
}

export default Newsletter
