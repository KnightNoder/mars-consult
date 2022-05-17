import '../css/ProceedTemplate.css'
import GenericButton from '../Components/GenericButton'

    // !/[0-9]/.test(e.key) ? SetAge(e.target.value) : e.preventDefault();
const ProceedTemplate = ({text,choice,backLink,conditionMet,vibrate,vibrateText,directNavigate,navigateTo,productNavigate,productLink}) => {
  return (
    <div className="proceed-container">
        <div className='empty-navigator'>
        </div>
        <div className='back-button'>
        <GenericButton text="Back" directNavigate={directNavigate} navigateTo={navigateTo} choice={backLink} newButton="true"
            conditionMet="true" vibrate={vibrate} vibrateText={vibrateText} /> 
        </div>
        <div className='empty'>
        </div>
        <div className='proceed-button'>
            <GenericButton text={text} choice={choice} productNavigate={productNavigate} productLink={productLink}
            conditionMet={conditionMet} vibrate={vibrate} vibrateText={vibrateText} />
        </div>

    </div>
  )
}

export default ProceedTemplate