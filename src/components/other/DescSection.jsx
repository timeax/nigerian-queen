import React from 'react'
import Section from './Section'
import Title from './Title'

const DescSection = ({ children, className, title, right, placement, route, subTitle }) => {
    return (
        <Section styleClass={`desc-section ${className}`}>
            <div className="row">
                <div className={`left-content ${placement.left}`}>
                    <Title>{title}</Title>
                    {subTitle !== '' ? <h3 className="sub-title">{subTitle}</h3> : ''}
                    <p>{children}</p>

                    {route ? route : ''}
                </div>
                <div className={`right-content mt-md-3 ${placement.right}`}>{right}</div>
            </div>
        </Section>
    )
}
DescSection.defaultProps = {
    subTitle: ''
}
export default DescSection