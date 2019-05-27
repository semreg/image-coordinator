import React, { useState, useContext } from 'react'
import './nav.scss'
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownMenu
} from 'mdbreact'
import LocaleContext from '../../../context/locale-context.js'

function Nav () {
  const [isOpen, setIsOpen] = useState(false)

  const context = useContext(LocaleContext)

  const toggleCollapse = () => setIsOpen(!isOpen)

  const { issues, sourceCode } = context.content.contents.nav

  const onLangsListClick = e => {
    const { value } = e.target

    context.updateLocale(value)

    localStorage.setItem('locale', value)
  }

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
                {issues}
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                className='nav-link'
                href="https://gitlab.com/Semreg/image-coordinator/"
                target='_blank'
                rel='noopener noreferrer'
              >
                {sourceCode}
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2"><MDBIcon className='language-icon' fas='true' icon="language" /></span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  {/* <MDBDropdownItem>English (US)</MDBDropdownItem>
                  <MDBDropdownItem>Ukrainian</MDBDropdownItem> */}
                  {/* {context.} */}
                  {context.langsList.map((item, index) => (
                    <MDBDropdownItem
                      key={index}
                      onClick={onLangsListClick}
                      value={item.short}
                    >
                      {item.name}
                    </MDBDropdownItem>
                  ))}
                </MDBDropdownMenu>
              </MDBDropdown>
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
