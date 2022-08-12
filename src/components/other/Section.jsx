import Props from 'prop-types'

const Section = ({children, styleClass}) => {

  return (
    <div className={`${styleClass} app-section`}>
        <div className="container">
            {children}
        </div>
    </div>
  )
}
Section.defaultProps = {
    styleClass: ''
}
Section.propTypes = {
    styleClass: Props.string
}

export default Section