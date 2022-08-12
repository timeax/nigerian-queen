import Props from 'prop-types'
import { useEffect, useRef } from 'react';

const Banner = ({ bgType, children, source, styleClass }) => {
    let style = {}
    const ref = useRef(0);

    useEffect(() => {
        if (ref.current !== 0) {
            console.log('it came here')
            const app = document.querySelector('.App');
            // console.log(app.scrollWidth)
            ref.current.style.width = app.scrollWidth + 'px';

            window.addEventListener('resize', e => {
                ref.current.style.width = app.scrollWidth + 'px';
            });
        }
    });

    if (bgType === 'image') style.backgroundImage = `url(${source})`;
    return (
        <div className={`app-hero-section ${styleClass}`} style={style}>
            {bgType === 'video' ? <video ref={ref} src={source} loop={true} autoPlay="autoplay" width="100%" muted></video> : ''}
            <div className="overlay">
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    )
}

Banner.defaultProps = {
    bgType: 'solid',
    source: 'var(--dark)',
    styleClass: 'h-100'

}

Banner.propTypes = {
    bgType: Props.string.isRequired,
    source: Props.string,
}

export default Banner