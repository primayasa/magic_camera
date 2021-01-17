import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p 
            onClick={() => onRouteChange('signout')} 
            className='f3 link dim black underline pa3 pointer'>Sign Out
          </p>
      </nav>
    );
  } else {
      return (
        <header class="bg-light-red flex w-100 ph3 pv3 pv1-ns ph4-m ph5-l o-80">
          <nav classname = "f6 fw6 ttu tracked" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p 
              onClick={() => onRouteChange('signin')} 
              className='f3 link dim black underline pa3 pointer'>Sign In
            </p>
            <p 
              onClick={() => onRouteChange('register')} 
              className='f3 link dim black underline pa3 pointer'>Register
            </p>
          </nav>
        </header>
      );
  }
}

export default Navigation;