import React from 'react';
import './Header.css';
import { useSpring, animated } from '@react-spring/web';


const Header = () => {
  const fadeIn = useSpring({
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
      config: { duration: 1000 },
  });
    return (
      <>
      <animated.div style={fadeIn}>
          <header className="header">
              <p>
                  A brand and product<br />
                  designer working with<br />
                  clients globally
              </p>
          </header>
          <animated.div className='skills'>
            <p className='no-outline'>Expertise</p>
            <p className='outline'>Branding</p>
            <p className='outline'>Product</p>
            <p className='outline'>Design Systems</p>
          </animated.div>
        </animated.div>
      </>
    );
};

export default Header;
