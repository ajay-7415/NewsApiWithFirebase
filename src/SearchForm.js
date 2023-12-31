import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { query, handlesearch } = useGlobalContext()

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search  news</h2>
      <input
        type='text'
        className='form-input'
        value={query}
        onChange={(e) => handlesearch(e.target.value)}
      />
    </form>
  )
}

export default SearchForm
