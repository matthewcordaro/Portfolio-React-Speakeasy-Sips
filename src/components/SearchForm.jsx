import React from "react"
import Wrapper from "../assets/wrappers/SearchForm"
import { Form, useNavigation } from "react-router-dom"

function SearchForm({ searchTerm }) {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          defaultValue={searchTerm}
          className='form-input'
        />
        <button type='submit' className='btn' disabled={isSubmitting}>
          {isSubmitting ? "Searching" : "submit"}
        </button>
      </Form>
    </Wrapper>
  )
}

export default SearchForm
