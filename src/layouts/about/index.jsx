import React from 'react'
import Banner from '../../components/banner'
import banner from '../../assets/img/banner.jpg'
import DescSection from '../../components/other/DescSection';
import preamble from '../../assets/img/preamble.png'
import Button from '@mui/material/Button';
import { BiChevronRight } from 'react-icons/bi'
import vote_image from '../../assets/img/vote.png';
import Title from '../../components/other/Title';
const About = () => {
    return (
        <div className="flex-grow-1 app-about">
            <Banner bgType="image" source={banner} styleClass='image-banner'>
                <div className="d-flex flex-column desc">
                    <Title>About The Nigerian Queen</Title>
                </div>
            </Banner>

            <DescSection
                title='Preamble'
                subTitle='THE NIGERIAN QUEEN (beauty for purpose) beauty pageant is a brand from 001 Entertainment outfit, targeted at redefining beauty with a connotation of purpose, and with a sole aim of carrying out humanitarian activities.'
                className="preamble-section bg-transparent"
                placement={{ right: 'col-lg-5 col-md-12', left: 'col-lg-7 col-md-12 d-flex flex-column justify-content-center titleBox' }}
                right={<img className='illus-image rounded' src={preamble} alt='Not Found' />}>Our Pedigree for The Nigerian Queen pageant is a search of rare combination of beauty and brains. Impeccable young ladies that would uphold strong values, beauty, intellects and prestige. The Nigerian Queen (beauty for purpose) is a prestigious Crown that goes beyond physical beauty, the organization aim at helping young girls find their true essence. We search for women that have a big heart towards society, we believe in uplifting and giving a voice to those who have the courage to stand out.

                This platform is all about Impact, not just a beautiful girl with a designer gown and a crown, But a girl that can create long lasting Impact and change the world in her own little way. A platform that develop potentials and talents, using pageantry as a tool for promoting peace, progress and youth development.

                We believe that change will come if we all command it from our own little corner; our pageantry platform also helps to project and celebrate our unique rich cultural heritage to every part of Africa and the entire world at large.
            </DescSection>

            <DescSection
                title='Vote For Your Favorite Contestant Into The Grand Finale'
                route={<Button size='large' variant='contained' className='mr-auto' color='success' href='/vote' endIcon={<BiChevronRight />}>Vote Now</Button>}
                className="vote-section"
                placement={{ right: 'col-lg-5 col-md-12', left: 'col-lg-7 col-md-12 d-flex flex-column justify-content-center titleBox' }}
                right={<img className='illus-image rounded' src={vote_image} alt='Not Found' />}>With 1 vote equals 2 point you can help your favorite contestant reach the Grand Finale faster than ever
            </DescSection>
        </div>
    )
}

export default About