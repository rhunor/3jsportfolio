import React from 'react';
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="section bg-primary text-white text-center py-4">
  <div className="container mx-auto">
    <a className="logo text-white" href="/">
      <i className="fak fa-mf-logo text-5xl"></i>
    </a>
    <div className="flex justify-center">
      <div className="w-2/3">
        <h1 className="title text-lg font-normal">
          Living, learning, &amp; leveling up one day at a time.
        </h1>
      </div>
    </div>
    <div className="social-icons mt-6">
      <p className="field space-x-4">
        <a className="button is-medium cursor-pointer" href="https://twitter.com/rhunorr" target="_blank">
          <span className="icon">
            <i className="fab fa-twitter fa-lg"></i>
          </span>
        </a>
        <a
          className="button is-medium cursor-pointer"
          href="https://www.linkedin.com/in/john-rhunor-ighoshemu-7979a8214/"
          target="_blank"
        >
          <span className="icon">
            <i className="fab fa-linkedin-in fa-lg"></i>
          </span>
        </a>
        <a className="button is-medium cursor-pointer" href="https://web.facebook.com/john.ighoshemu.9" target="_blank">
          <span className="icon">
            <i className="fa-brands fa-facebook fa-lg"></i>
          </span>
        </a>
        <a className="button is-medium cursor-pointer" href="https://www.instagram.com/rhunor1/" target="_blank">
          <span className="icon">
            <i className="fa-brands fa-instagram fa-lg"></i>
          </span>
        </a>
        <a className="button is-medium cursor-pointer" href="mailto:johnighoshemu@gmail.com?subject=feedback">
          <span className="icon">
            <i className="far fa-envelope fa-lg"></i>
          </span>
        </a>
      </p>
    </div>
    <div className="text-white mt-6">
      <span className="mr-1">Ighoshemu John Rhunor</span>
      <span className="icon align-middle">
        <i className="far fa-copyright"></i>
      </span>
      {new Date().getFullYear()}
    </div>
  </div>
</footer>


  )
}

export default Footer;