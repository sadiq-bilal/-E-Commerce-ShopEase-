import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'
import products from '../Data/Product'
import ProductList from '../Components/ProductList'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <section className='featured'>
        <div className="section-1">
          <h2>Featured Products</h2>
          <Link to="/products" >View All →</Link>
        </div>
        
        <ProductList products={products.slice(0,5)}/>
        
      </section>
    </div>
  )
}

export default Home

