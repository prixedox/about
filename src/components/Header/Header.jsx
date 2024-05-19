import React, { useEffect } from 'react';
import './Header.css';

const easeInOutQuint = (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

const smoothScroll = (target, duration) => {
  const start = window.pageYOffset;
  const scrollPadding = 6 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const targetElement = document.querySelector(target);

  let end = targetElement.offsetTop - scrollPadding;
  end = Math.max(end, 0);

  const change = end - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuint(currentTime / duration);
    window.scrollTo(0, start + change * val);
    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};

function Header() {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const target = event.target.getAttribute('href');
      smoothScroll(target, 1500);
    };

    const links = document.querySelectorAll('.menu-item a');
    links.forEach((link) => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <div className='header-wrapper'>
      <div className="header">
        <div className='buttons-div'>
          <ul className='menu-list'>
            <li className='menu-item main-item'><a href="#home" className="button-link main-link">Home</a></li>
            <li className='menu-item'><a href="#education" className="button-link">Education</a></li>
            <li className='menu-item'><a href="#experience" className="button-link">Experience</a></li>
            <li className='menu-item'><a href="#skills" className="button-link">Skills</a></li>
            <li className='menu-item'><a href="#portfolio" className="button-link">Portfolio</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;