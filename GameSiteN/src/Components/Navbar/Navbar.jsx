import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

import like from '../assets/like.gif';
import cart from '../assets/cart.gif';
import game from '../assets/game.gif';

const Navbar = () => {
    const [menu , setMenu] = useState("shop");
  return (
    <div className="navbar">
    <div className="nav-logo">
        <img src={game} alt="" />
        <p>GAMING</p>
    </div>    
    <ul>
        <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration: 'none'}}to='/'>Shop</Link>{menu==="shop"?<hr className="underline"/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}}to='/mens'>Men</Link>{menu==="mens"?<hr className="underline"/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}}to='/womens'>Women</Link>{menu==="womens"?<hr className="underline"/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr className="underline"/>:<></>}</li>
    </ul>
    <div className="nav-login-cart">
<Link to='/login'><button>Login</button></Link>
<Link to='/like'><img src = {like} alt="" /></Link>
<Link to='/cart'><img src = {cart} alt="" /></Link>
<div className="nav-cart-count">0</div>
<div className="nav-like-count">0</div>

    </div>
    </div>
  );
};
export default Navbar;