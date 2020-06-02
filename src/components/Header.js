import React from 'react';
import {Link} from 'react-router';
import './Header.css';

const MenuItem = ({active, children, to}) => (
  <Link to={to} className={`menu-item ${active ? 'active':''}`}>
    {children}
  </Link>
);

const Header = (props, context) => {
  const {router} = context;
  return(
    <div>
      <div className="logo">
        Sophie Kim
      </div>

      <div className="menu">
        <MenuItem to={'./about'} active={router.isActive('/about')}>About</MenuItem>
        <MenuItem to={'./projects'} active={router.isActive('/projects')}>Projects</MenuItem>
        <MenuItem to={'./skills'} active={router.isActive('/skills')}>Skills</MenuItem>
        <MenuItem to={'./contact'} active={router.isActive('/contact')}>Contact</MenuItem>
      </div>
    </div>

  );
};


Header.contextTypes ={
  router: React.PropTypes.object
}

export default Header;
