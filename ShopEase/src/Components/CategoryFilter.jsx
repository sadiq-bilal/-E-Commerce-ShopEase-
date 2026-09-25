import React from 'react'

function CategoryFilter({category,setCategory}) {
  return (
    <div className='categoryFilter'>
      <select
        id='category'
        name='category'
        value={category} 
        onChange = {(e)=> setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Footwear">Footwear</option>
        <option value="Accessories">Accessories</option>
      </select>


    </div>
  )
}

export default CategoryFilter
