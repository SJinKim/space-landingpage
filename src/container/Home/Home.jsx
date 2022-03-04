import { NavbarDesktop } from '../../components'
import './Home.css'

const Home = () => {
  return (
    <div className='app__home'>
      <NavbarDesktop />
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
