// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onDisplaySearchInput} = props
  const {suggestion} = suggestionDetails

  const onDisplay = () => {
    onDisplaySearchInput(suggestion)
  }

  return (
    <li className="suggestion-card">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onDisplay}
      />
    </li>
  )
}

export default SuggestionItem
