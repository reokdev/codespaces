import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <>
        <header className="header">
            <p>
                A brand and product<br />
                designer working with<br />
                clients globally
            </p>
        </header>
        <div className='skills'>
        <p className='no-outline'>Expertise</p>
        <p className='outline'>Branding</p>
        <p className='outline'>Product</p>
        <p className='outline'>Design Systems</p>
        </div>
      </>
    );
};

export default Header;
