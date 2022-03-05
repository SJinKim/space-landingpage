import { Container, Navbar, Nav } from 'react-bootstrap'
import './NavbarDesktop.css'

const NavbarDesktop = () => {
  return (
    <Container fluid>
      <Navbar className='mt-5 app__home-navbar' expand='md' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>
            <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'>
              <g fill='none' fill-rule='evenodd'>
                <circle cx='24' cy='24' r='24' fill='#FFF' />
                <path
                  fill='#0B0D17'
                  d='M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z'
                />
              </g>
            </svg>
          </Navbar.Brand>
          <div className='border border-light app__home-line' />
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='d-flex flex-row justify-content-between align-items-center app__home-navigator'>
              <Nav.Link className='app__home-navigator_link' href='/'>
                00 Home
              </Nav.Link>
              <Nav.Link className='app__home-navigator_link' href='/destination'>
                01 Destination
              </Nav.Link>
              <Nav.Link className='app__home-navigator_link' href='/crew'>
                02 Crew
              </Nav.Link>
              <Nav.Link className='app__home-navigator_link' href='/technology'>
                03 Technology
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default NavbarDesktop
