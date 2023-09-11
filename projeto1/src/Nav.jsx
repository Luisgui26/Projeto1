import {} from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Produtos">Produtos</NavLink>
      <NavLink to="/Sobre">Sobre</NavLink>
    </div>
  );
}

export default Nav;
