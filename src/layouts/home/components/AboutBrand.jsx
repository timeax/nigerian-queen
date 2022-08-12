import React from 'react'
import DescSection from '../../../components/other/DescSection'
import brandImage from '../../../assets/img/brand-logo.png'
import { BiChevronRight } from 'react-icons/bi';
import { Button } from '@mui/material';
const AboutBrand = () => {
    return (
        <DescSection
            title='Divapee Agency.'
            className="about-brand-section"
            placement={{ right: 'col-lg-5 col-md-12', left: 'col-lg-7 col-md-12 titleBox d-flex flex-column justify-content-center' }}
            right={<img className='illus-image' src={brandImage} alt='Not Found' />}
            route={<Button variant='outlined' color='success' endIcon={<BiChevronRight/>} className='mr-auto text-white' href='/'>Learn more</Button>}
        >
            The Nigerian Queen (beauty for purpose) is a prestigious Crown that goes beyond physical beauty, the organization aim at helping young girls find their true essence. We search for women that have a big heart towards society, we believe in uplifting and giving a voice to those who have the courage to stand out.
        </DescSection>
    )
}

export default AboutBrand