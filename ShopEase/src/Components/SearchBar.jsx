import React from 'react'

function SearchBar({search, setSearch,onSearch}) {
  
  return (
    <div className='search-bar'>
      <div className="input">
        <input
          type="text"
          placeholder=' Search products...'
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
           onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
        <button
          onClick={onSearch}
        >🔍</button>
      </div>
    </div>
  )
}

export default SearchBar
