import React, { useState } from 'react'
import './nav.scss'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBIcon } from 'mdbreact'

function Nav () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => setIsOpen(!isOpen)

  return (
    <nav>
      <MDBNavbar color="danger-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Image Coordinator</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <a
                className='nav-link'
                href="https://gitlab.com/Semreg/image-coordinator/issues"
                target='_blank'
                rel='noopener noreferrer'
              >
                Issues
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className='nav-link'
                href="https://gitlab.com/Semreg/image-coordinator/"
                target='_blank'
                rel='noopener noreferrer'
              >
                Source Code
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className='nav-link'
                href="#!"
                target='_blank'
                rel='noopener noreferrer'
              >
                <MDBIcon className='language-icon' fas='true' icon="language" />
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a
                className='nav-link waves-effect waves-light'
                href="https://gitlab.com/Semreg"
                target='_blank'
                rel='noopener noreferrer'
              >
                <MDBIcon fab icon="gitlab" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className='nav-link waves-effect waves-light'
                href="https://github.com/Semreg"
                target='_blank'
                rel='noopener noreferrer'
              >
                <MDBIcon fab icon="github" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className='nav-link waves-effect waves-light'
                href="https://www.linkedin.com/in/vladislav-chabaniuk-792849159"
                target='_blank'
                rel='noopener noreferrer'
              >
                <MDBIcon fab icon="linkedin" />
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </nav>
  )
}

export default Nav
