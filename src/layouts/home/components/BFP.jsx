import React from 'react'
import Section from '../../../components/other/Section'
import Title from '../../../components/other/Title'
import videos from '../assets/videos'
import VideoFrame from './VideoFrame'
import Button from '@mui/material/Button';
import { BiChevronRight } from 'react-icons/bi'
const BFP = () => {
    return (
        <Section styleClass='bfp-section'>
            <div className="d-flex flex-column">
                <Title size='45px' className='mb-3' color='var(--theme)'>Beauty for purpose</Title>
                <div className="d-flex flex-wrap">
                    {videos.map((item, i) => <div key={i} className='col-6 d-flex align-items-center mb-4'>
                        <VideoFrame link={item} height='null' />
                    </div>)}
                </div>
                <Button target='_blank' color='success' variant='outlined' endIcon={<BiChevronRight />} className='mr-auto mt-4' href='https://www.youtube.com/channel/UCUI8aQAbfa5J7D5za5IbiVw/featured'>View all activities</Button>
            </div>
        </Section>
    )
}

export default BFP
