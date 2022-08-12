import { BiChevronRight } from 'react-icons/bi'
import DescSection from '../../../components/other/DescSection'
import blogImage from '../../../assets/img/blog-image.jpg';
import { Button } from '@mui/material';
const BlogSection = () => {
    return (
        <DescSection
            title='Our Blog.'
            className="blog-section"
            placement={{ right: 'col-lg-6 col-md-12 col-sm-12', left: 'col-lg-6 col-md-12 col-sm-12 d-flex flex-column justify-content-center titleBox' }}
            right={<img className='illus-image rounded' src={blogImage} alt='Not Found' />}
            route={<Button variant='outlined' color='success' endIcon={<BiChevronRight />} className='mr-auto text-success' href='/'>View 2021 Highlights</Button>}
        >
           Get all the news, gist, upcoming events and information from Nigerian Queen (Beauty for Purpose). When we say, light, camera, you say action!
        </DescSection>
    )
}

export default BlogSection