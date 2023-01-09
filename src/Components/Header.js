import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
  <Link className="btn btn-ghost normal-case text-xl">Aladin Mama</Link>


  <Link className="btn btn-ghost normal-case text-xl" to= '/Home'>Home</Link>
  <Link className="btn btn-ghost normal-case text-xl" to= '/Login'>Login</Link>
  <Link className="btn btn-ghost normal-case text-xl" to= '/Register'>Register</Link>
  {user?.displayname && <span>Welcome, {user.displayname}</span>}
</div>

            
        </div>
    );
};

export default Header;