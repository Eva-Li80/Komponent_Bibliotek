import React, { useState } from 'react'

const Searchfield = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder='search..' />
            <button type="submit">Search</button>
        </form>
      
    </div>
  )
}

export default Searchfield
