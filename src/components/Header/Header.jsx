import React, { useEffect, useState } from "react";
import "./Header.css";

const easeInOutQuint = (t) =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;

const smoothScroll = (target, duration) => {
  const start = window.scrollY;
  const scrollPadding =
    7 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  const targetElement = document.querySelector(target);

  if (!targetElement) return;

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

const Header = () => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const target = event.target.getAttribute("href");
      smoothScroll(target, 1500);
    };

    const links = document.querySelectorAll(".nav-item a");
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Add event listener to handle link clicks
    const handleNavLinkClick = (event) => {
      // Prevent default behavior of anchor tags
      event.preventDefault();

      // Remove active class from all links
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });

      // Add active class to the clicked link
      event.target.classList.add("active");

      // Close the navbar if it's open (for mobile responsiveness)
      const navCollapse = document.querySelector(".navbar-collapse");
      if (navCollapse.classList.contains("show")) {
        navCollapse.classList.remove("show");
        document.body.classList.remove("navbar-open");
      }
    };

    // Add click event listener to all nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary custom-navbar">
      <div className="container">
        <div className="nav-item">
          <a className="nav-link custom-brand" href="#home">
            Home
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <a className="nav-link custom-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
