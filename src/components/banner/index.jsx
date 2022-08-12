import Props from 'prop-types'

const Banner = ({ bgType, children, source, styleClass }) => {
    let style = {}

    if(bgType === 'image') style.backgroundImage = `url(${source})`;
    return (
        <div className={`app-hero-section ${styleClass}`} style={style}>
            {bgType === 'video' ? <video src={source} loop={true} autoPlay="autoplay" width="100%" muted></video> : ''}
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