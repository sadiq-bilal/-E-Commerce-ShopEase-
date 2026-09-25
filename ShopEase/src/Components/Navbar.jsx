import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCard from "../Pages/ProfileCard";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
  navigate(`/products?search=${encodeURIComponent(search)}`);
  setSearch("");
};
 
  return (
    <div className="navbar">
      <div className="nav-1">
        <div className="logo">
          <h1>
          <Link to={"/"} style={{textDecoration:"none"}}>  <span>🛍️ </span> Shop<span style={{color:"blue"}}>Ease</span></Link>
          </h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <div className="nav-2">
        <SearchBar search={search} setSearch={setSearch}  onSearch={handleSearch} />
        <div className="profile">
        <Link to="/profilecard">👤</Link>
      </div>
      <div className="cart">
        <Link to="/cart">🛒</Link>
      </div>
      </div>
      
    </div>
  );
}

export default Navbar;
