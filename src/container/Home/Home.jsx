import { Container, Navbar, Nav } from 'react-bootstrap'
import './Home.css'

const Home = () => {
  return (
    <div className='app__home'>
      <Container fluid>
        <Navbar className='mt-5' expand='lg' variant='dark'>
          <Container>
            <Navbar.Brand className='app__home-logo' href='#'>
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
                <Nav.Link className='app__home-navigator_link' href='#home'>
                  00 Home
                </Nav.Link>
                <Nav.Link className='app__home-navigator_link' href='#home'>
                  01 Destination
                </Nav.Link>
                <Nav.Link className='app__home-navigator_link' href='#home'>
                  02 Crew
                </Nav.Link>
                <Nav.Link className='app__home-navigator_link' href='#home'>
                  03 Technology
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
      <div className='app__home-content d-flex justify-content-between align-items-center mx-5 my-5'>
        <div className='app__home-content_about mx-auto d-flex flex-column justify-content-center align-items-center'>
          <h5 className='mb-3 textheading5__barlow'>so, you want to travel to</h5>
          <h1 className='textheading__bellefair'>space</h1>
          <p className='p__barlow'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not
            hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of
            this world experience!
          </p>
        </div>
        <a
          href='#'
          className='app__home-content_outerbtn mx-auto d-flex flex-row justify-content-center align-items-center'
        >
          <div className='app__home-content_btn d-flex justify-content-center align-items-center'>
            EXPLORE
          </div>
        </a>
      </div>
    </div>
  )
}

export default Home
