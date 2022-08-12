import Banner from "../../components/banner";
import { Button } from "@mui/material";
import vid from '../../assets/img/home-video.mp4'
import AboutBrand from "./components/AboutBrand";
import BFP from "./components/BFP";
import BlogSection from "./components/BlogSection";
import DescSection from "../../components/other/DescSection";
import vote_image from '../../assets/img/vote.png';
import Title from "../../components/other/Title";

const Home = () => {
  return (
    <div className='app-home'>
      <Banner bgType="video" source={vid} styleClass='home-banner'>
        <div className="d-flex flex-column desc">
          <h3 className="sub-heading">The Nigerian queen 2022</h3>
          <Title>
            Vote your favorite contestant to Top 5
          </Title>
          <p>#RoadToTheNigerianQueen</p>
          <div className="d-flex">
            <Button variant="contained" color="success" size="large" href="/vote">Vote now</Button>
            <span style={{ padding: '0 1rem' }} />
            <Button variant="outlined" color="success" size="large" href="/vote">Purchase Ticket</Button>
          </div>
        </div>
      </Banner>
      <AboutBrand />
      <div className="classic-section">
        <BFP />
        <BlogSection />

        <DescSection
            title='Your Vote Can Pick Who Becomes The New Queen'
            className="vote-desc-section bg-transparent"
            placement={{ right: 'col-lg-5 col-md-12', left: 'col-lg-7 col-md-12 d-flex flex-column justify-content-center titleBox' }}
            right={<img className='illus-image rounded' src={vote_image} alt='Not Found' />}
        >
          With 1 vote equals 2 point you can help your favorite contestant reach the Grand Finale faster than ever
        </DescSection>
      </div>
    </div>
  )
}

export default Home;