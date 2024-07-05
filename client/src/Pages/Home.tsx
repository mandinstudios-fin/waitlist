import { Fragment } from 'react/jsx-runtime'
import Hero from '../Components/Hero/Hero'
import Roadmap from '../Components/Roadmap/Roadmap'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Roadmap />
      {/* <Footer /> */}
    </Fragment>
    
  )
}

export default Home